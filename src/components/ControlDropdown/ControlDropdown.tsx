import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { useDropdown } from '../../hooks/useDropdown';
import { SpaceSizes } from '../../theme';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { pxToRem } from '../../utils';
import { Inline, Padbox, Stack } from '../layout';
import { Button } from '../Button';
import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
} from '../Button/Button.enums';
import { Icon } from '../Icon';
import { H4 } from '../typography';
import { ControlDropdownProps } from './ControlDropdown.types';
import { ControlDropdownPlacements } from './ControlDropdown.enums';

const CloseButton = styled(Button)`
  padding: 0;
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
`;

const ControlDropdown: React.FC<ControlDropdownProps> = ({
  children,
  title,
  parentRef,
  isOpen = false,
  onOpen,
  onClose,
  onReset,
  onSubmit,
  submitLabel = 'Apply',
  closeLabel = 'Close',
  resetLabel = 'Reset to defaults',
  placement = ControlDropdownPlacements.bottomLeft,
  width = 370,
}) => {
  const { isPaneDisplayed, Pane } = useDropdown(parentRef, {
    defaultIsPaneDisplayed: isOpen,
    paneWidth: width,
    onClickOut: onClose,
    onShow: () => {
      if (isPaneDisplayed) {
        onClose();
      } else {
        onOpen();
      }
    },
    onHide: onClose,
    placement,
    isElevated: true,
    hasInternalShowHide: false,
  });

  if (!isOpen) {
    return null;
  }
  return (
    <Pane>
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
              color={ButtonColors.secondary}
              size={ButtonSizes.lg}
              variant={ButtonVariants.text}
              onClick={onClose}
            >
              <Icon aria-label="Close dropdown" name={SSCIconNames.times} />
            </CloseButton>
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
    </Pane>
  );
};

ControlDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  parentRef: PropTypes.exact({
    current: PropTypes.instanceOf(HTMLElement),
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  submitLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  resetLabel: PropTypes.string,
  placement: PropTypes.oneOf(Object.values(ControlDropdownPlacements)),
  width: PropTypes.number,
  onReset: PropTypes.func,
};

export default ControlDropdown;
