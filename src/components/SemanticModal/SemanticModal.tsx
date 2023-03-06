import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isNotUndefined } from 'ramda-adjunct';

import { SemanticModalVariants } from './SemanticModal.enums';
import { RenderButtonProps, SemanticModalProps } from './SemanticModal.types';
import { Modal, ModalEnums } from '../Modal';
import { Button, ButtonEnums } from '../Button';
import { ButtonColors } from '../Button/Button.enums';
import { Icon } from '../Icon';
import { H4, Text } from '../typographyLegacy';
import {
  AbsoluteLinkActionKind,
  ActionKinds,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../types/action.types';
import * as CustomPropTypes from '../../types/customPropTypes';
import { getColor, pxToRem } from '../../utils';
import { Center, Inline, Padbox, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import { SSCIconNames } from '../../theme/icons/icons.enums';

const colorVariants = {
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
    href={(action as AbsoluteLinkActionKind<[React.MouseEvent]>).href}
    isLoading={isLoading}
    loadingText={loadingText}
    name={action.name}
    to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
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
                    (action: ActionKinds<[React.MouseEvent]>, index: number) =>
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

SemanticModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  actions: CustomPropTypes.tuple(ActionKindsPropType, ActionKindsPropType)
    .isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(SemanticModalVariants)),
  primaryButtonColor: PropTypes.oneOf(Object.values(ButtonColors)),
  isPrimaryButtonLoading: PropTypes.bool,
  loadingText: PropTypes.string,
};
