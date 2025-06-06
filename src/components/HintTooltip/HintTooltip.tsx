import styled from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';

import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { HintTooltipProps } from './HintTooltip.types';

const StyledIcon = styled(Icon)<{ $flow: 'inline' | 'block' }>`
  display: ${({ $flow }) => ($flow === 'block' ? 'block' : 'inline-block')};
  background: var(--sscds-color-neutral-0);
  border: 1px solid var(--sscds-color-neutral-0);
  border-radius: 100%;
  color: var(--sscds-color-icon-subtle);
  &:hover {
    color: var(--sscds-color-icon-default);
  }
`;

interface TooltipButtonProps extends ComponentPropsWithoutRef<'button'> {
  'aria-label': string;
}

const TooltipButton = styled.button.attrs<TooltipButtonProps>(() => ({
  type: 'button',
  'aria-haspopup': 'true',
}))`
  background: none;
  border: none;
  cursor: help;
  padding: 0;
  display: inline-flex;
  align-items: center;
`;

const HintTooltip = ({
  children,
  width,
  flow = 'inline',
  'aria-label': ariaLabel = 'Help',
  ...props
}: HintTooltipProps) => (
  <Tooltip
    aria-label={ariaLabel}
    popup={children}
    width={width}
    wrapperEl={TooltipButton}
    {...props}
  >
    <StyledIcon $flow={flow} name="info-circle-outline" />
  </Tooltip>
);

export default HintTooltip;
