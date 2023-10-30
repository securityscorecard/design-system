import type { HintTooltipProps } from './HintTooltip.types';
import type { Color } from '../../theme/colors.types';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';
import { includes } from 'ramda';

import { getColor } from '../../utils';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { ColorTypes } from '../../theme';

const StyledIcon = styled(Icon).withConfig<{ color: Color }>({
  shouldForwardProp: (property) => !includes(property, ['color']),
})`
  background: ${getColor('neutral.0')};
  border: 1px solid ${getColor('neutral.0')};
  border-radius: 100%;
  color: ${({ color, theme }) =>
    isNotUndefined(color) ? getColor(color, { theme }) : 'inherit'};
  &:hover {
    color: ${({ theme }) => getColor('neutral.700', { theme })};
  }
`;

const HintTooltip = ({ children, width, ...props }: HintTooltipProps) => (
  <Tooltip popup={children} width={width} {...props}>
    <StyledIcon
      color={ColorTypes.neutral600}
      name="info-circle-outline"
      tabIndex={0}
    />
  </Tooltip>
);

HintTooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.number,
};

export default HintTooltip;
