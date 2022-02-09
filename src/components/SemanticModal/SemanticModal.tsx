import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isNotUndefined } from 'ramda-adjunct';

import { SemanticModalVariants } from './SemanticModal.enums';
import { SemanticModalProps } from './SemanticModal.types';
import { Modal, ModalEnums } from '../Modal';
import { Button, ButtonEnums } from '../Button';
import { ButtonColors } from '../Button/Button.enums';
import { Icon } from '../Icon';
import { H3, Text } from '../typography';
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
  // FIXME replace by semantic color success 500
  [SemanticModalVariants.success]: '#358500',
  [SemanticModalVariants.warn]: 'pumpkin',
  [SemanticModalVariants.error]: 'strawberry',
  [SemanticModalVariants.ban]: 'strawberry',
};

const iconVariants = {
  [SemanticModalVariants.success]: SSCIconNames.checkCircle,
  [SemanticModalVariants.warn]: SSCIconNames.exclTriangle,
  [SemanticModalVariants.error]: SSCIconNames.error,
  [SemanticModalVariants.ban]: SSCIconNames.ban,
};

const StyledIcon = styled(Icon)<{ $variant?: SemanticModalProps['variant'] }>`
  color: ${({ $variant }) =>
    $variant === SemanticModalVariants.success
      ? colorVariants[$variant]
      : getColor(colorVariants[$variant])};
  font-size: ${pxToRem(48)};
`;

const SemanticModal = forwardRef<HTMLDivElement, SemanticModalProps>(
  (
    {
      title,
      message,
      actions,
      onClose,
      variant = SemanticModalVariants.success,
      primaryButtonColor = ButtonEnums.ButtonColors.primary,
    },
    ref,
  ) => {
    const renderButton = (
      action: ActionKinds<[React.MouseEvent]>,
      buttonVariant: typeof ButtonEnums.ButtonVariants[keyof typeof ButtonEnums.ButtonVariants],
      color: typeof ButtonEnums.ButtonColors[keyof typeof ButtonEnums.ButtonColors],
    ) => (
      <Button
        key={action.name}
        color={color}
        href={(action as AbsoluteLinkActionKind<[React.MouseEvent]>).href}
        name={action.name}
        size={SpaceSizes.lg}
        to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
        variant={buttonVariant}
        onClick={action.onClick}
      >
        {action.label}
      </Button>
    );

    return (
      <Modal ref={ref} size={ModalEnums.ModalSizes.sm} onClose={onClose}>
        <Center isTextCentered>
          <Stack gap={SpaceSizes.md}>
            <Padbox paddingSize={SpaceSizes.md}>
              <StyledIcon $variant={variant} name={iconVariants[variant]} />
            </Padbox>
            <H3>{title}</H3>
            <Text>{message}</Text>
            <Padbox paddingSize={SpaceSizes.md}>
              <Inline gap={SpaceSizes.md} justify="center">
                {actions.map(
                  (action: ActionKinds<[React.MouseEvent]>, index: number) =>
                    isNotUndefined(action) &&
                    renderButton(
                      action,
                      index === 0
                        ? ButtonEnums.ButtonVariants.outline
                        : ButtonEnums.ButtonVariants.solid,
                      index === 0
                        ? ButtonEnums.ButtonColors.primary
                        : primaryButtonColor,
                    ),
                )}
              </Inline>
            </Padbox>
          </Stack>
        </Center>
      </Modal>
    );
  },
);

export default SemanticModal;

SemanticModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actions: CustomPropTypes.tuple(ActionKindsPropType, ActionKindsPropType)
    .isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(SemanticModalVariants)),
  primaryButtonColor: PropTypes.oneOf(Object.values(ButtonColors)),
};
