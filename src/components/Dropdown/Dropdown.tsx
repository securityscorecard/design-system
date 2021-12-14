import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { Ref } from '@fluentui/react-component-ref';

import { SpaceSizes } from '../../theme';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { DropdownProps } from './Dropdown.types';
import { DropdownPlacements, DropdownTriggerEvents } from './Dropdown.enums';
import ControlledDropdown from './ControlledDropdown';

const Dropdown: React.FC<DropdownProps> = ({
  children,
  trigger,
  triggerEvents = [DropdownTriggerEvents.click],
  placement = DropdownPlacements.bottomStart,
  innerPaddingSize = SpaceSizes.md,
  innerPaddingType = PaddingTypes.square,
  maxPaneWidth = 270,
  isPaneElevated = false,
  hasPaneArrow = false,
  hoverHideDelay = 250,
  defaultIsOpen = false,
  onClose = noop,
  onOpen = noop,
}) => {
  const [isVisible, setIsVisible] = useState(defaultIsOpen);
  const [triggerEl, setTriggerEl] = useState(null);
  const timeoutId = useRef(null);

  const showPane = () => {
    onOpen();
    setIsVisible(true);
  };

  const hidePane = () => {
    onClose();
    setIsVisible(false);
  };
  const togglePane = () => {
    isVisible === true ? hidePane() : showPane();
  };

  const handleTriggerOnClick = () => {
    if (!triggerEvents.includes('click')) {
      return;
    }
    togglePane();
  };

  const handleTriggerOnKeyDown: React.KeyboardEventHandler = (e) => {
    if (!triggerEvents.includes('click')) {
      return;
    }

    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault();
        togglePane();
        break;
      case 'Escape':
        e.preventDefault();
        hidePane();
        break;
      default:
    }
  };

  const handleTriggerOnMouseEnter = () => {
    if (!triggerEvents.includes('hover')) {
      return;
    }
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    showPane();
  };
  const handleTriggerOnMouseLeave = () => {
    if (!triggerEvents.includes('hover')) {
      return;
    }
    timeoutId.current = setTimeout(hidePane, hoverHideDelay);
  };
  const handleTriggerOnFocus = () => {
    if (!triggerEvents.includes('focus')) {
      return;
    }
    showPane();
  };
  const handleTriggerOnBlur = () => {
    if (!triggerEvents.includes('focus')) {
      return;
    }
    hidePane();
  };

  return (
    <>
      <Ref innerRef={setTriggerEl}>
        {React.cloneElement(trigger, {
          onClick: handleTriggerOnClick,
          onTouchStart: handleTriggerOnClick,
          onKeyDown: handleTriggerOnKeyDown,
          onMouseEnter: handleTriggerOnMouseEnter,
          onMouseLeave: handleTriggerOnMouseLeave,
          onFocus: handleTriggerOnFocus,
          onBlur: handleTriggerOnBlur,
        })}
      </Ref>
      <ControlledDropdown
        hasPaneArrow={hasPaneArrow}
        innerPaddingSize={innerPaddingSize}
        innerPaddingType={innerPaddingType}
        isOpen={isVisible}
        isPaneElevated={isPaneElevated}
        maxPaneWidth={maxPaneWidth}
        placement={placement}
        triggerEl={triggerEl}
        onClickOut={hidePane}
        onMouseEnter={handleTriggerOnMouseEnter}
        onMouseLeave={handleTriggerOnMouseLeave}
      >
        {children}
      </ControlledDropdown>
    </>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.element.isRequired,
  triggerEvents: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(DropdownTriggerEvents)),
  ),
  placement: PropTypes.oneOf(Object.values(DropdownPlacements)),
  innerPaddingSize: PropTypes.oneOf(Object.values(SpaceSizes)),
  innerPaddingType: PropTypes.oneOf(Object.values(PaddingTypes)),
  maxPaneWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<'auto'>(['auto']),
  ]),
  isPaneElevated: PropTypes.bool,
  hasPaneArrow: PropTypes.bool,
  hoverHideDelay: PropTypes.number,
  defaultIsOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default Dropdown;
