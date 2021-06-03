/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
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
  renderHandler: (onClick: () => void) => React.ReactElement;
  title: string;
  defaultIsControlPaneOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;
}

const ControlDropdown: React.FC<ControlDropdownProps> = ({
  children,
  renderHandler,
  title,
  defaultIsControlPaneOpen,
  onOpen,
  onClose,
  onReset,
  onApply,
}) => {
  const parentRef = useRef(null);
  const {
    handleShowDropdown,
    handleHideDropdown,
    isPaneDisplayed,
    Pane,
  } = useDropdown(parentRef, {
    defaultIsPaneDisplayed: defaultIsControlPaneOpen,
    paneWidth: 370,
    onClickOut: onClose,
    placement: 'bottom-left',
    isElevated: true,
  });

  const handleOpen = () => {
    if (isPaneDisplayed) {
      onClose();
      handleHideDropdown();
    } else {
      onOpen();
      handleShowDropdown();
    }
  };
  const handleClose = () => {
    onClose();
    handleHideDropdown();
  };
  const handleApply = () => {
    onApply();
    handleHideDropdown();
  };
  const handleReset = () => {
    onReset();
  };

  return (
    <span ref={parentRef}>
      {renderHandler(handleOpen)}
      {isPaneDisplayed && (
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
                onClick={handleClose}
              >
                <Icon aria-label="Close dropdown" name={SSCIconNames.times} />
              </CloseButton>
            </FlexContainer>

            <FlexContainer flexDirection="column" margin={{ bottom: 0.8 }}>
              {children}
            </FlexContainer>

            <FlexContainer as="footer" justifyContent="space-between">
              <Button variant={ButtonVariants.text} onClick={handleReset}>
                Reset to defaults
              </Button>
              <FlexContainer>
                <Button
                  margin={{ right: 0.4 }}
                  variant={ButtonVariants.outline}
                  onClick={handleClose}
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
      )}
    </span>
  );
};

export default ControlDropdown;
