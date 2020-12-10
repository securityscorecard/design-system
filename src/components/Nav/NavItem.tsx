import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../utils/helpers';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { NavItemProps } from './NavItem.types';

const NavItem = styled(Button)
  .attrs(() => ({
    variant: ButtonVariants.text,
  }))
  .withConfig<NavItemProps>({
    shouldForwardProp: (prop) => prop !== 'isActive',
  })`
  display: block;
  font-size: ${getFontSize('lg')};
  font-weight: ${({ isActive }) =>
    isActive ? getFontWeight('bold') : getFontWeight('regular')};
  line-height: ${getLineHeight('lg')};
  cursor: pointer;
  color: ${({ isActive }) =>
    getColor(isActive ? 'graphite4B' : 'blueberryClassic')};
  padding: 0;
  height: auto;

  &:not(:first-of-type) {
    padding-left: ${pxToRem(8)};
  }

  &:hover {
    color: ${({ isActive }) =>
      isActive ? 'inherit' : getColor('radiantBlueberry')};
    text-decoration: none;
  }

  &:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    height: ${pxToRem(15)};
    width: 1px;
    background: ${getColor('graphite2H')};
    margin-left: ${pxToRem(8)};
    vertical-align: text-bottom;
  }
`;

NavItem.propTypes = {
  isActive: PropTypes.bool,
};

export default NavItem;
