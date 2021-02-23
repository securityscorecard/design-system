import styled, { css } from 'styled-components';

import { getBorderRadius, getColor, pxToRem } from '../../../utils/helpers';
import { NavButtonProps } from './Pagination.types';
import { IconButton } from '../../IconButton';

const NavButton = styled(IconButton)<NavButtonProps>`
  display: inline-block;

  width: ${pxToRem(48)};
  height: ${pxToRem(32)};
  padding: ${pxToRem(8, 16)};
  margin: ${pxToRem(0, 4)};
  border-radius: ${getBorderRadius};

  color: ${({ isDisabled }) =>
    getColor(isDisabled ? 'graphiteB' : 'graphite2B')};
  background-color: ${({ isDisabled }) =>
    getColor(isDisabled ? 'transparent' : 'graphite5H')};

  ${({ isDisabled }) =>
    !isDisabled &&
    css`
      &:hover {
        background-color: ${getColor('graphite4H')}
        text-decoration: none;
      }
    `}
`;

export default NavButton;
