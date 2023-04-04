import type { FC, KeyboardEventHandler } from 'react';
import type { DropdownProps } from './Dropdown.types';

import {
  cloneElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { noop } from 'ramda-adjunct';
import { Ref } from '@fluentui/react-component-ref';

import { SpaceSizes } from '../../theme';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { DropdownPlacements, DropdownTriggerEvents } from './Dropdown.enums';
import ControlledDropdown from './ControlledDropdown';
import { CLX_COMPONENT } from '../../theme/constants';

const Dropdown: FC<DropdownProps> = forwardRef(
  (
    {
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
    },
    ref,
  ) => {
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

    useImperativeHandle(ref, () => ({
      togglePane,
      hidePane,
      showPane,
    }));

    // eslint-disable-next-line
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (!triggerEvents.includes('click')) {
          return;
        }
        switch (e.key) {
          case 'Escape':
            e.preventDefault();
            hidePane();
            break;
          default:
        }
      };
      if (isVisible) {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
      }
      // eslint-disable-next-line
    }, [isVisible]);

    const handleTriggerOnClick = () => {
      if (!triggerEvents.includes('click')) {
        return;
      }
      togglePane();
    };

    const handleTriggerOnKeyDown: KeyboardEventHandler = (e) => {
      if (!triggerEvents.includes('click')) {
        return;
      }

      switch (e.key) {
        case ' ':
        case 'Enter':
          e.preventDefault();
          togglePane();
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

    const isFocusTrapEnabled = triggerEvents.includes(
      DropdownTriggerEvents.click,
    );

    return (
      <>
        <Ref innerRef={setTriggerEl}>
          {cloneElement(trigger, {
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
          className={CLX_COMPONENT}
          focusTrap={isFocusTrapEnabled}
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
  },
);

Dropdown.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Default visibility state.
   */
  defaultIsOpen: PropTypes.bool,
  /**
   * Should show arrow tip pointing to the center of trigger element.
   */
  hasPaneArrow: PropTypes.bool,
  /**
   * Delay until the dropdown pane is closed. Used only for `hover` triggerEvent, in ms.
   */
  hoverHideDelay: PropTypes.number,
  /**
   * Size of padding in the dropdown pane.
   */
  innerPaddingSize: PropTypes.oneOf([
    'lg',
    'lgPlus',
    'md',
    'mdPlus',
    'none',
    'sm',
    'xl',
    'xlPlus',
    'xs',
    'xxl',
    'xxs',
  ]),
  /**
   * Type of padding in the dropdown pane.
   */
  innerPaddingType: PropTypes.oneOf(['square', 'squish', 'stretch']),
  /**
   * Should have the dropdown pane box shadow.
   */
  isPaneElevated: PropTypes.bool,
  /**
   * Maximal width of the dropdown pane. When set to 'auto',
   * the pane width is controlled by it's content.
   */
  maxPaneWidth: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
  ]),
  /**
   * Callback called when the dropdown pane is closed.
   */
  onClose: PropTypes.func,
  /**
   * Callback called when the dropdown pane is opened.
   */
  onOpen: PropTypes.func,
  /**
   * Alignement of the dropdown pane.
   */
  placement: PropTypes.oneOf([
    'auto-end',
    'auto-start',
    'auto',
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  /**
   * React element used to trigger the dropdown pane.
   */
  trigger: PropTypes.element.isRequired,
  /**
   * Array of events which triggers the dropdown pane visibility change.
   */
  triggerEvents: PropTypes.arrayOf(
    PropTypes.oneOf(['click', 'focus', 'hover']),
  ),
} as any;

export default Dropdown;
