import styled from 'styled-components';

import { getColor, pxToRem } from '../../../utils/helpers';
import { IconButton } from '../../IconButton';
import { IconButtonProps } from '../../IconButton/IconButton.types';

const NavButton = styled(IconButton)
  .attrs((props) => ({
    ...props,
  }))
  .withConfig<IconButtonProps>({
    shouldForwardProp: (prop) => prop !== 'disabled',
  })`
  display: inline-block;

  width: ${pxToRem(48)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
  margin: ${pxToRem(0, 4)};
  border-radius: ${pxToRem(3)};

  color: ${({ isDisabled }) =>
    getColor(isDisabled ? 'graphiteB' : 'graphite2B')};
  background-color: ${({ isDisabled }) =>
    getColor(isDisabled ? 'transparent' : 'graphite5H')} !important;

     &:hover {
      color: ${getColor('graphite3B')} !important;
      border-color: ${getColor('graphite3B')} !important;
      //  background-color: ${getColor('graphite3B')} !important;
      text-decoration: none;
    }
`;

// NavButton.propTypes = {
//   isDisabled: PropTypes.bool,
// };

export default NavButton;
