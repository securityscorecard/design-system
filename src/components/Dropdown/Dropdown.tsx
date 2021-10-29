import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { Ref } from '@fluentui/react-component-ref';

import { SpaceSizes } from '../../theme';
import { usePopup } from '../../hooks/usePopup';
import { usePortal } from '../../hooks/usePortal';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { DropdownProps } from './Dropdown.types';
import DropdownPane from './DropdownPane';
import { DropdownPlacements, DropdownTriggerEvents } from './Dropdown.enums';

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
  const [paneEl, setPaneEl] = useState(null);
  const [arrowEl, setArrowEl] = useState(null);
  const timeoutId = useRef(null);
  const { styles, attributes } = usePopup({
    triggerEl,
    paneEl,
    arrowEl,
    placement,
  });

  const { Portal } = usePortal();

  const showPane = () => {
    onOpen();
    setIsVisible(true);
  };

  const hidePane = () => {
    onClose();
    setIsVisible(false);
  };

  const handleTriggerOnClick = () => {
    if (!triggerEvents.includes('click')) {
      return;
    }
    isVisible === true ? hidePane() : showPane();
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
          onMouseEnter: handleTriggerOnMouseEnter,
          onMouseLeave: handleTriggerOnMouseLeave,
          onFocus: handleTriggerOnFocus,
          onBlur: handleTriggerOnBlur,
        })}
      </Ref>
      {isVisible && (
        <Portal>
          <DropdownPane
            ref={setPaneEl}
            arrowRef={setArrowEl}
            arrowStyles={styles.arrow}
            contentPaddingSize={innerPaddingSize}
            contentPaddingType={innerPaddingType}
            hasArrow={hasPaneArrow}
            isElevated={isPaneElevated}
            maxWidth={maxPaneWidth}
            style={styles.popper}
            onClickOut={hidePane}
            onMouseEnter={handleTriggerOnMouseEnter}
            onMouseLeave={handleTriggerOnMouseLeave}
            {...attributes.popper}
          >
            {children}
          </DropdownPane>
        </Portal>
      )}
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
