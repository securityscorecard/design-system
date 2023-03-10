import type { Colors } from './BaseLink.types';

import { css } from 'styled-components';

import { getFontWeight, getRadii, getToken } from '../../../utils';

type LinkStylesProps = { $color: Colors; $isExperimental: boolean };

export const LinkBaseStyles = css<LinkStylesProps>`
  margin: 0;
  border: none;
  font-family: inherit;
  font-weight: ${getFontWeight('semibold')};
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  color: ${(p) => getToken(`color-action-link-${p.$color}`, p)};
  border-radius: ${getRadii('default')};
`;
export const LinkHoverStyles = css<LinkStylesProps>`
  color: ${(p) => getToken(`color-action-${p.$color}-hover`, p)};
  text-decoration: underline;
`;
export const LinkActiveStyles = css<LinkStylesProps>`
  color: ${(p) => getToken(`color-action-link-${p.$color}-active`, p)};
`;
