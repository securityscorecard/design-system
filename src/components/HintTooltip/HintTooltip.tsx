import styled from 'styled-components';

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

const HintTooltip = ({
  children,
  width,
  flow = 'inline',
  ...props
}: HintTooltipProps) => (
  <Tooltip popup={children} width={width} {...props}>
    <StyledIcon $flow={flow} name="info-circle-outline" tabIndex={0} />
  </Tooltip>
);

export default HintTooltip;
