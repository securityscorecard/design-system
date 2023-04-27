import type { FC } from 'react';
import type { ControlDropdownProps } from './ControlDropdown.types';

import { forwardRef, useEffect, useState } from 'react';
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

const ControlDropdown: FC<ControlDropdownProps> = forwardRef<
  HTMLDivElement,
  ControlDropdownProps
>(
  (
    {
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
    },
    ref,
  ) => {
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
        ref={ref}
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
  },
);

export default ControlDropdown;
