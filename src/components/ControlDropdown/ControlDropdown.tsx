import type { FC } from 'react';
import type { ControlDropdownProps } from './ControlDropdown.types';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { isNotUndefined } from 'ramda-adjunct';

import { SpaceSizes } from '../../theme';
import { Inline, Padbox, Stack } from '../layout';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { CloseButton } from '../CloseButton';
import { H4 } from '../typographyLegacy';
import { ControlDropdownPlacements } from './ControlDropdown.enums';
import ControlledDropdown from '../Dropdown/ControlledDropdown';
import { CLX_COMPONENT } from '../../theme/constants';

const ControlDropdown: FC<ControlDropdownProps> = ({
  children,
  title,
  parentRef,
  isOpen = false,
  onClose,
  onReset,
  onSubmit,
  submitLabel = 'Apply',
  closeLabel = 'Close',
  resetLabel = 'Reset to defaults',
  placement = ControlDropdownPlacements.bottomLeft,
  width = 390,
}) => {
  const [, setMounted] = useState(false);
  useEffect(() => {
    // Note: the popup hook used by the ControlledDropdown needs to be notified when the ref changes
    setMounted(true);
  }, []);
  if (!isOpen || !parentRef?.current) {
    return null;
  }
  return (
    <ControlledDropdown
      className={CLX_COMPONENT}
      innerPaddingSize={SpaceSizes.none}
      isOpen={isOpen}
      maxPaneWidth={width}
      placement={placement}
      triggerEl={parentRef.current}
      isPaneElevated
    >
      <Padbox paddingSize={SpaceSizes.md}>
        <Stack gap={SpaceSizes.md}>
          <Inline
            align="center"
            as="header"
            gap={SpaceSizes.md}
            justify="space-between"
          >
            <H4 margin="none">{title}</H4>
            <CloseButton
              ariaLabel="Close dropdown"
              marginCompensation={SpaceSizes.md}
              onClose={onClose}
            />
          </Inline>
          {children}
          <Inline
            align="center"
            as="footer"
            gap={SpaceSizes.md}
            justify="flex-end"
            stretch="start"
          >
            {isNotUndefined(onReset) && (
              <div>
                <Button variant={ButtonVariants.text} onClick={onReset}>
                  {resetLabel}
                </Button>
              </div>
            )}

            <Inline gap={SpaceSizes.sm} justify="flex-end">
              <Button variant={ButtonVariants.outline} onClick={onClose}>
                {closeLabel}
              </Button>
              <Button variant={ButtonVariants.solid} onClick={onSubmit}>
                {submitLabel}
              </Button>
            </Inline>
          </Inline>
        </Stack>
      </Padbox>
    </ControlledDropdown>
  );
};

ControlDropdown.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Label of close button in footer
   */
  closeLabel: PropTypes.string,
  /**
   * Flag to control show/hide of the dropdown
   */
  isOpen: PropTypes.bool,
  /**
   * Callback when dropdown is closed
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Callback when Reset to defaults is clicked. When not provided button will not show.
   */
  onReset: PropTypes.func,
  /**
   * Callback when Apply button is clicked
   */
  onSubmit: PropTypes.func.isRequired,
  /**
   * Reference to opener button used to calculate correct position
   */
  parentRef: PropTypes.shape({
    current: PropTypes.shape({}).isRequired,
  }).isRequired,
  /**
   * Position to which dropdown will be aligned
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
   * Label of reset button in footer
   */
  resetLabel: PropTypes.string,
  /**
   * Label of submit button in footer
   */
  submitLabel: PropTypes.string,
  /**
   * Title in dropdown header
   */
  title: PropTypes.string.isRequired,
  /**
   * Width of the dropdown
   */
  width: PropTypes.number,
} as any;

export default ControlDropdown;
