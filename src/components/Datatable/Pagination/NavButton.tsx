import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor, pxToRem } from '../../../utils/helpers';
import { IconButton } from '../../IconButton';
import { NavButtonProps } from './Pagination.types';

const NavButton = styled(IconButton)
  .attrs((props) => ({
    ...props,
  }))
  .withConfig<NavButtonProps>({
    shouldForwardProp: (prop) => prop !== 'isDisabled',
  })`
  display: inline-block;

  width: ${pxToRem(48)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
  margin: ${pxToRem(0, 6)};
  border-radius: ${pxToRem(3)};

  color: ${({ isDisabled }) =>
    getColor(isDisabled ? 'graphiteB' : 'graphite2B')};
  background-color: ${({ isDisabled }) =>
    getColor(isDisabled ? 'transparent' : 'graphite5H')} !important;
`;

//    &:hover {
//       background-color: ${getColor('graphite5H')};
//       text-decoration: none;
//     }

NavButton.propTypes = {
  isDisabled: PropTypes.bool,
};

export default NavButton;
