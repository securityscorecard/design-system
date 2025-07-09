import { useEffect, useState } from 'react';
import { isNotUndefined } from 'ramda-adjunct';
import styled from 'styled-components';

import { SpaceSizes } from '../../theme';
import { Inline, Padbox, Stack } from '../layout';
import Button from '../ButtonV2/Button';
import { CloseButton } from '../CloseButton';
import { H4 } from '../Heading';
import { ControlDropdownProps } from './ControlDropdown.types';
import { ControlDropdownPlacements } from './ControlDropdown.enums';
import ControlledDropdown from '../Dropdown/ControlledDropdown';
import { CLX_COMPONENT } from '../../theme/constants';

const Bleed = styled.div`
  margin-inline: var(--sscds-space-negative-4x);
`;
const ControlDropdown = ({
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
}: ControlDropdownProps) => {
  const [, setMounted] = useState(false);
  useEffect(() => {
    // Note: the popup hook used by the ControlledDropdown needs to be notified when the ref changes
    setMounted(true);
  }, []);

  // ESC key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
    return undefined;
  }, [isOpen, onClose]);

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
          <Bleed>
            <Padbox
              paddingSize="md"
              style={{
                borderTop: '1px solid var(--sscds-color-border-default)',
                paddingBlockEnd: 0,
              }}
            >
              <Inline
                align="center"
                gap="md"
                justify="flex-end"
                stretch="start"
              >
                {isNotUndefined(onReset) && (
                  <div>
                    <Button size="sm" variant="ghost" onClick={onReset}>
                      {resetLabel}
                    </Button>
                  </div>
                )}
                <Inline gap={SpaceSizes.sm} justify="flex-end">
                  <Button size="sm" variant="subtle" onClick={onClose}>
                    {closeLabel}
                  </Button>
                  <Button size="sm" onClick={onSubmit}>
                    {submitLabel}
                  </Button>
                </Inline>
              </Inline>
            </Padbox>
          </Bleed>
        </Stack>
      </Padbox>
    </ControlledDropdown>
  );
};

export default ControlDropdown;
