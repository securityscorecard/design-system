import styled from 'styled-components';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

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

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: help;
  padding: 0;
`;

const TooltipButton = forwardRef<HTMLButtonElement, TooltipButtonProps>(
  (props, ref) => (
    <StyledButton ref={ref} aria-haspopup="true" type="button" {...props} />
  ),
);

TooltipButton.displayName = 'TooltipButton';

const HintTooltip = ({
  children,
  width,
  flow = 'inline',
  'aria-label': ariaLabel = 'More information: ',
  ...props
}: HintTooltipProps) => (
  <Tooltip
    aria-label={ariaLabel}
    enterDelay={0}
    popup={children}
    width={width}
    wrapperEl={TooltipButton}
    {...props}
  >
    <StyledIcon $flow={flow} name="info-circle-outline" />
  </Tooltip>
);

export default HintTooltip;
