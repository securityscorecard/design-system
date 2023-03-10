import type { MouseEvent } from 'react';
import type {
  AbsoluteLinkActionKind,
  RelativeLinkActionKind,
} from '../../types/action.types';
import type { CardActionsProps } from './Card.types';

import PropTypes from 'prop-types';
import { isNonEmptyString } from 'ramda-adjunct';
import { forwardRef } from 'react';

import { Inline } from '../layout';
import { SpaceSizes } from '../../theme';
import { Button, ButtonEnums } from '../Button';
import { ActionKindsPropType } from '../../types/action.types';
import { CardContainer } from './Card';

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ actions, rightAdornment = null }, ref) => (
    <CardContainer
      horizontalPadding={SpaceSizes.mdPlus}
      verticalPadding={SpaceSizes.sm}
    >
      <Inline
        ref={ref}
        align="center"
        gap={SpaceSizes.mdPlus}
        justify="space-between"
      >
        <Inline gap={SpaceSizes.mdPlus}>
          {actions?.map((action) => (
            <Button
              key={action.name}
              aria-label={action.ariaLabel}
              data-interactive="true"
              href={(action as AbsoluteLinkActionKind<[MouseEvent]>).href}
              iconName={action.iconName}
              iconType={action.iconType}
              isDisabled={action.isDisabled}
              to={(action as RelativeLinkActionKind<[MouseEvent]>).to}
              variant={ButtonEnums.ButtonVariants.text}
              onClick={action.onClick}
            >
              {isNonEmptyString(action.label) && action.label}
            </Button>
          ))}
        </Inline>
        {rightAdornment}
      </Inline>
    </CardContainer>
  ),
);

CardActions.propTypes = {
  actions: PropTypes.arrayOf(ActionKindsPropType),
  rightAdornment: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default CardActions;
