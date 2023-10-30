import type { NavItemProps } from './NavItem.types';

import styled from 'styled-components';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../utils';
import { BaseButton } from '../_internal/BaseButton';
import { BaseButtonVariants } from '../_internal/BaseButton/BaseButton.enums';

const NavItem = styled(BaseButton)
  .attrs(() => ({
    variant: BaseButtonVariants.text,
  }))
  .withConfig<NavItemProps>({
    shouldForwardProp: (prop) => prop !== 'isActive',
  })`
  font-size: ${getFontSize('lg')};
  font-weight: ${({ isActive }) =>
    isActive ? getFontWeight('bold') : getFontWeight('regular')};
  line-height: ${getLineHeight('lg')};
  cursor: pointer;
  color: ${({ isActive }) =>
    getColor(isActive ? 'neutral.900' : 'primary.500')};
  padding: 0;
  height: auto;

  &:not(:first-of-type) {
    padding-left: ${pxToRem(8)};
  }

  &:hover {
    color: ${({ isActive }) =>
      isActive ? 'inherit' : getColor('primary.400')};
    text-decoration: none;
  }

  &:not(:last-of-type)::after {
    content: '';
    display: inline-block;
    height: ${pxToRem(15)};
    width: 1px;
    background: ${getColor('neutral.300')};
    margin-left: ${pxToRem(8)};
    vertical-align: text-bottom;
  }
`;

export default NavItem;
