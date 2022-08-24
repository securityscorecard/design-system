import { css } from 'styled-components';

import { getFontWeight, getRadii, getToken } from '../../../utils';
import { Colors } from './BaseLink.types';

type LinkStylesProps = { $color: Colors };

export const LinkBaseStyles = css<LinkStylesProps>`
  margin: 0;
  border: none;
  font-family: inherit;
  font-weight: ${getFontWeight('semibold')};
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  color: ${(p) => getToken(`link-color-text-${p.$color}`, p)};
`;
export const LinkHoverStyles = css<LinkStylesProps>`
  color: ${(p) => getToken(`link-color-text-${p.$color}-hover`, p)};
  text-decoration: underline;
`;
export const LinkFocusStyles = css<LinkStylesProps>`
  outline: 0;
  color: ${(p) => getToken(`link-color-text-${p.$color}-hover`, p)};
  text-decoration: underline;
  background-color: ${(p) =>
    getToken(`link-color-background-${p.$color}-focus`, p)};
  border-radius: ${getRadii('default')};
`;
export const LinkActiveStyles = css<LinkStylesProps>`
  color: ${(p) => getToken(`link-color-text-${p.$color}-active`, p)};
`;
