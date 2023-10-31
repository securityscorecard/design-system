import type { MouseEvent } from 'react';
import type {
  RenderButtonProps,
  SemanticModalProps,
} from './SemanticModal.types';
import type {
  AbsoluteLinkActionKind,
  ActionKinds,
  RelativeLinkActionKind,
} from '../../types/action.types';
import type { Color } from '../../theme';

import { forwardRef } from 'react';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { SemanticModalVariants } from './SemanticModal.enums';
import { Modal, ModalEnums } from '../Modal';
import { Button, ButtonEnums } from '../Button';
import { Icon } from '../Icon';
import { H4, Text } from '../typographyLegacy';
import { getColor, pxToRem } from '../../utils';
import { Center, Inline, Padbox, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import { SSCIconNames } from '../../theme/icons/icons.enums';

const colorVariants: Record<keyof typeof SemanticModalVariants, Color> = {
  [SemanticModalVariants.success]: 'success.500',
  [SemanticModalVariants.warn]: 'warning.500',
  [SemanticModalVariants.error]: 'error.500',
  [SemanticModalVariants.ban]: 'error.500',
};

const iconVariants = {
  [SemanticModalVariants.success]: SSCIconNames.checkCircle,
  [SemanticModalVariants.warn]: SSCIconNames.exclTriangle,
  [SemanticModalVariants.error]: SSCIconNames.error,
  [SemanticModalVariants.ban]: SSCIconNames.ban,
};

const StyledIcon = styled(Icon)<{ $variant?: SemanticModalProps['variant'] }>`
  color: ${({ $variant }) => getColor(colorVariants[$variant])};
  font-size: ${pxToRem(48)};
`;

const renderButton = ({
  action,
  color,
  isLoading,
  loadingText,
  variant,
}: RenderButtonProps) => (
  <Button
    key={action.name}
    color={color}
    href={(action as AbsoluteLinkActionKind<[MouseEvent]>).href}
    isLoading={isLoading}
    loadingText={loadingText}
    name={action.name}
    to={(action as RelativeLinkActionKind<[MouseEvent]>).to}
    variant={variant}
    onClick={action.onClick}
  >
    {action.label}
  </Button>
);

const SemanticModal = forwardRef<HTMLDivElement, SemanticModalProps>(
  (
    {
      title,
      message,
      actions,
      onClose,
      variant = SemanticModalVariants.success,
      primaryButtonColor = ButtonEnums.ButtonColors.primary,
      isPrimaryButtonLoading = false,
      loadingText = '',
    },
    ref,
  ) => {
    return (
      <Modal ref={ref} size={ModalEnums.ModalSizes.sm} onClose={onClose}>
        <Center isTextCentered>
          <Stack gap={SpaceSizes.lg}>
            <div>
              <StyledIcon $variant={variant} name={iconVariants[variant]} />
            </div>
            <Stack gap={SpaceSizes.md}>
              <H4>{title}</H4>
              <Text as="div" size="md">
                {message}
              </Text>
              <Padbox paddingSize={SpaceSizes.md}>
                <Inline gap={SpaceSizes.md} justify="center">
                  {actions.map(
                    (action: ActionKinds<[MouseEvent]>, index: number) =>
                      isNotUndefined(action) &&
                      renderButton({
                        action,
                        variant:
                          index === 0
                            ? ButtonEnums.ButtonVariants.outline
                            : ButtonEnums.ButtonVariants.solid,
                        color:
                          index === 0
                            ? ButtonEnums.ButtonColors.primary
                            : primaryButtonColor,
                        isLoading: index === 0 ? false : isPrimaryButtonLoading,
                        loadingText,
                      }),
                  )}
                </Inline>
              </Padbox>
            </Stack>
          </Stack>
        </Center>
      </Modal>
    );
  },
);

export default SemanticModal;
