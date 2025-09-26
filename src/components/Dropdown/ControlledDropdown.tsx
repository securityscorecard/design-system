import { forwardRef, useState } from 'react';

import { SpaceSizes } from '../../theme';
import { usePopup } from '../../hooks/usePopup';
import { usePortal } from '../../hooks/usePortal';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { ControlledDropdownProps } from './Dropdown.types';
import DropdownPane from './DropdownPane';
import { DropdownPlacements } from './Dropdown.enums';
import { mergeRefs } from '../../utils/mergeRefs';
import { useFocusTrap } from '../../hooks/useFocusTrap';

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
      focusTrap = true,
      onClickOut,
      style = {},
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

    useFocusTrap({ el: paneEl, enabled: isOpen && focusTrap, onClickOut });
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
          style={{ ...styles.popper, ...style }}
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

export default ControlledDropdown;
