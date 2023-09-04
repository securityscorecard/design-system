import { css } from 'styled-components';

import { getFontWeight, getRadii, getToken } from '../../../utils';
import { Colors } from './BaseLink.types';

type LinkStylesProps = { $color: Colors };

export const LinkBaseStyles = css<LinkStylesProps>`
  margin: 0;
  border: none;
  font-family: inherit;
  font-weight: ${getFontWeight('regular')};
  text-decoration: underline;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  color: ${(p) => getToken(`color-action-link-${p.$color}`, p)};
`;
export const LinkHoverStyles = css<LinkStylesProps>`
  color: ${(p) => getToken(`color-action-link-${p.$color}-hover`, p)};
`;
export const LinkFocusStyles = css<LinkStylesProps>`
  outline: 0;
  color: ${(p) => getToken(`color-action-link-${p.$color}-hover`, p)};
  background-color: ${(p) =>
    getToken(`color-action-link-background-${p.$color}-focus`, p)};
  border-radius: ${getRadii('default')};
  text-decoration: none;
`;
export const LinkActiveStyles = css<LinkStylesProps>`
  color: ${(p) => getToken(`color-action-link-${p.$color}-active`, p)};
`;
