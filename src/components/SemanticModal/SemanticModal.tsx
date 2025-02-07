import { type ComponentProps, type MouseEvent, forwardRef } from 'react';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import type { SemanticModalVariants } from './SemanticModal.enums';
import { SemanticModalProps } from './SemanticModal.types';
import { Modal } from '../Modal';
import { Icon } from '../Icon';
import {
  AbsoluteLinkActionKind,
  RelativeLinkActionKind,
} from '../../types/action.types';
import { pxToRem } from '../../utils';
import { Center, Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { Text } from '../Text';
import Button from '../ButtonV2/Button';

const colorVariants: Record<
  keyof typeof SemanticModalVariants,
  ComponentProps<typeof Icon>['color']
> = {
  success: 'var(--sscds-color-icon-success)',
  warn: 'var(--sscds-color-icon-warning)',
  error: 'var(--sscds-color-icon-danger)',
  ban: 'var(--sscds-color-icon-danger)',
};

const iconVariants = {
  success: SSCIconNames.checkCircleLight,
  warn: SSCIconNames.exclCircleLight,
  error: SSCIconNames.exclTriangleLight,
  ban: SSCIconNames.banLight,
};

const StyledModal = styled(Modal)`
  .sscds-modal-content {
    margin-top: var(--sscds-space-negative-6x);
  }
`;

const StyledIcon = styled(Icon)`
  font-size: ${pxToRem(40)};
`;

const SemanticModal = forwardRef<HTMLDivElement, SemanticModalProps>(
  (
    {
      title,
      message,
      actions,
      onClose,
      variant = 'success',
      primaryButtonColor = 'primary',
      isPrimaryButtonLoading = false,
      loadingText = '',
    },
    ref,
  ) => {
    const [dismissAction, mainAction] = actions ?? [];

    return (
      <StyledModal ref={ref} size="sm" onClose={onClose}>
        <Center isTextCentered>
          <Stack gap="6x">
            <div>
              <StyledIcon
                color={colorVariants[variant]}
                name={iconVariants[variant]}
              />
            </div>
            <Stack gap="2x">
              <Text as="div" size="h5" isBold>
                {title}
              </Text>
              <Text as="div" size="md" variant="subtle">
                {message}
              </Text>
            </Stack>
            {isNotUndefined(dismissAction) && (
              <Inline gap={SpaceSizes.md} justify="center">
                <Button
                  as={
                    isNotUndefined(dismissAction?.as)
                      ? dismissAction.as
                      : undefined
                  }
                  href={
                    (dismissAction as AbsoluteLinkActionKind<[MouseEvent]>).href
                  }
                  name={dismissAction.name}
                  to={
                    (dismissAction as RelativeLinkActionKind<[MouseEvent]>).to
                  }
                  variant="subtle"
                  onClick={dismissAction.onClick}
                >
                  {dismissAction.label as string}
                </Button>

                {isNotUndefined(mainAction) && (
                  <Button
                    as={
                      isNotUndefined(mainAction?.as) ? mainAction.as : undefined
                    }
                    href={
                      (mainAction as AbsoluteLinkActionKind<[MouseEvent]>).href
                    }
                    isLoading={isPrimaryButtonLoading}
                    loadingText={loadingText}
                    name={mainAction.name}
                    to={(mainAction as RelativeLinkActionKind<[MouseEvent]>).to}
                    variant={
                      primaryButtonColor === 'primary' ? 'base' : 'danger'
                    }
                    onClick={mainAction.onClick}
                  >
                    {mainAction.label as string}
                  </Button>
                )}
              </Inline>
            )}
          </Stack>
        </Center>
      </StyledModal>
    );
  },
);

export default SemanticModal;
