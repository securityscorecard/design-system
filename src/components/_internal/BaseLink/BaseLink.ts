import { css } from 'styled-components';

import { getRadii } from '../../../utils';
import { Colors } from './BaseLink.types';

type LinkStylesProps = { $color: Colors };

export const LinkBaseStyles = css<LinkStylesProps>`
  margin: 0;
  border: none;
  font-family: inherit;
  font-weight: var(--sscds-font-weight-elementlabel-default);
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  color: var(--sscds-link-color);
  border-radius: ${getRadii('default')};
`;
export const LinkHoverStyles = css<LinkStylesProps>`
  color: var(--sscds-link-color-hover);
  text-decoration: underline;
`;
export const LinkActiveStyles = css<LinkStylesProps>`
  color: var(--sscds-link-color-active);
`;
