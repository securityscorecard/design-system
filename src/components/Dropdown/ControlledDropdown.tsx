import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';

import { SpaceSizes } from '../../theme';
import { usePopup } from '../../hooks/usePopup';
import { usePortal } from '../../hooks/usePortal';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { ControlledDropdownProps } from './Dropdown.types';
import DropdownPane from './DropdownPane';
import { DropdownPlacements } from './Dropdown.enums';
import { mergeRefs } from '../../utils/mergeRefs';

const ControlledDropdown = forwardRef<
  HTMLDivElement,
  ControlledDropdownProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      triggerEl,
      isOpen,
      placement = DropdownPlacements.bottomStart,
      innerPaddingSize = SpaceSizes.md,
      innerPaddingType = PaddingTypes.square,
      maxPaneWidth = 270,
      isPaneElevated = false,
      hasPaneArrow = false,
      onClickOut,
      ...props
    },
    ref,
  ) => {
    const [paneEl, setPaneEl] = useState(null);
    const [arrowEl, setArrowEl] = useState(null);
    const { styles, attributes } = usePopup({
      triggerEl,
      paneEl,
      arrowEl,
      placement,
    });

    const { Portal } = usePortal();

    return isOpen ? (
      <Portal>
        <DropdownPane
          ref={mergeRefs(ref, setPaneEl)}
          arrowRef={setArrowEl}
          arrowStyles={styles.arrow}
          contentPaddingSize={innerPaddingSize}
          contentPaddingType={innerPaddingType}
          hasArrow={hasPaneArrow}
          isElevated={isPaneElevated}
          maxWidth={maxPaneWidth}
          style={styles.popper}
          onClickOut={onClickOut}
          {...props}
          {...attributes.popper}
        >
          {children}
        </DropdownPane>
      </Portal>
    ) : null;
  },
);

ControlledDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  triggerEl: PropTypes.instanceOf(HTMLElement),
  placement: PropTypes.oneOf(Object.values(DropdownPlacements)),
  innerPaddingSize: PropTypes.oneOf(Object.values(SpaceSizes)),
  innerPaddingType: PropTypes.oneOf(Object.values(PaddingTypes)),
  maxPaneWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<'auto'>(['auto']),
  ]),
  isPaneElevated: PropTypes.bool,
  hasPaneArrow: PropTypes.bool,
  onClickOut: PropTypes.func,
};

export default ControlledDropdown;
