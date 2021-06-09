/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import { useDropdown } from '../../../../hooks/useDropdown';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { pxToRem } from '../../../../utils';
import { Button } from '../../../Button';
import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
} from '../../../Button/Button.enums';
import { FlexContainer } from '../../../FlexContainer';
import { Icon } from '../../../Icon';
import { H4 } from '../../../typography';

const CloseButton = styled(Button)`
  padding: 0;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
`;

export interface ControlDropdownProps {
  parentRef: React.MutableRefObject<HTMLSpanElement>;
  title: string;
  isControlPaneOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;
}

const ControlDropdown: React.FC<ControlDropdownProps> = ({
  children,
  title,
  parentRef,
  isControlPaneOpen,
  onOpen,
  onClose,
  onReset,
  onApply,
}) => {
  const { isPaneDisplayed, Pane } = useDropdown(parentRef, {
    defaultIsPaneDisplayed: isControlPaneOpen,
    paneWidth: 370,
    onClickOut: onClose,
    onShow: () => {
      if (isPaneDisplayed) {
        onClose();
      } else {
        onOpen();
      }
    },
    onHide: onClose,
    placement: 'bottom-left',
    isElevated: true,
    hasInternalShowHide: false,
  });

  const handleApply = () => {
    onApply();
  };

  return (
    isControlPaneOpen && (
      <Pane>
        <FlexContainer flexDirection="column" padding={1}>
          <FlexContainer
            as="header"
            justifyContent="space-between"
            margin={{ bottom: 0.8 }}
          >
            <H4 margin="none">{title}</H4>
            <CloseButton
              color={ButtonColors.secondary}
              size={ButtonSizes.lg}
              variant={ButtonVariants.text}
              onClick={onClose}
            >
              <Icon aria-label="Close dropdown" name={SSCIconNames.times} />
            </CloseButton>
          </FlexContainer>

          <FlexContainer flexDirection="column" margin={{ bottom: 0.8 }}>
            {children}
          </FlexContainer>

          <FlexContainer as="footer" justifyContent="space-between">
            <Button variant={ButtonVariants.text} onClick={onReset}>
              Reset to defaults
            </Button>
            <FlexContainer>
              <Button
                margin={{ right: 0.4 }}
                variant={ButtonVariants.outline}
                onClick={onClose}
              >
                Close
              </Button>
              <Button variant={ButtonVariants.solid} onClick={handleApply}>
                Apply
              </Button>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Pane>
    )
  );
};

export default ControlDropdown;
