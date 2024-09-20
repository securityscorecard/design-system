import React from 'react';
import { isNonEmptyString } from 'ramda-adjunct';

import { Inline } from '../layout';
import { SpaceSizes } from '../../theme';
import { Button } from '../Button';
import {
  AbsoluteLinkActionKind,
  RelativeLinkActionKind,
} from '../../types/action.types';
import { CardActionsProps } from './Card.types';
import { CardContainer } from './Card';

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ actions, rightAdornment = null }: CardActionsProps, ref) => (
    <CardContainer $horizontalPadding="6x" $verticalPadding="2x">
      <Inline
        ref={ref}
        align="center"
        gap={SpaceSizes.mdPlus}
        justify="space-between"
      >
        <Inline
          gap={SpaceSizes.sm}
          style={{ marginInlineStart: 'var(--sscds-space-negative-2x)' }}
        >
          {actions?.map((action) => (
            <Button
              key={action.name}
              aria-label={action.ariaLabel}
              data-interactive="true"
              href={(action as AbsoluteLinkActionKind<[React.MouseEvent]>).href}
              iconStart={
                typeof action.iconName !== 'undefined'
                  ? {
                      name: action.iconName,
                      type: action.iconType,
                    }
                  : undefined
              }
              isDisabled={action.isDisabled}
              to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
              variant="ghost"
              onClick={action.onClick}
            >
              {isNonEmptyString(action.label) ? action.label : undefined}
            </Button>
          ))}
        </Inline>
        {rightAdornment}
      </Inline>
    </CardContainer>
  ),
);

export default CardActions;
