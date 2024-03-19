import { createGlobalStyle } from 'styled-components';

import { BASE_FONT_SIZE, BASE_LINE_HEIGHT } from '../constants';
import {
  getColor,
  getFontFamily,
  getFontWeight,
  getToken,
  pxToRem,
} from '../../utils';

const flattenColors = ([key, value]) => {
  if (typeof value === 'string') {
    return [[key, value]];
  }
  return Object.entries(value).flatMap(([k, v]) =>
    flattenColors([`${key}-${k}`, v]),
  );
};

export const generateColorsCSSVars = ({ theme: { colors } }) => {
  return Object.entries(colors)
    .flatMap(flattenColors)
    .map(([key, value]) => [`--sscds-${key}`, value])
    .map((item) => item.join(':'))
    .join(';\n');
};

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v4.0 | 20180602
    License: none (public domain)
  */
    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    background: ${getColor('neutral.0')};
    font-family: ${getFontFamily('base')};
    font-weight: ${getFontWeight('regular')};
    font-size: ${pxToRem(BASE_FONT_SIZE * 0.875)};
    line-height: ${pxToRem(BASE_LINE_HEIGHT)};
    color: ${getColor('text.primary')};
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28) */
  html {
    box-sizing: border-box;
  }

  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;

    /* Disable user select on everything but texts */
    user-select: none;
  }

  p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea {
    user-select: text;
  }

  /* global focus style */
  a, button, [tabindex="0"] {
    outline-offset: ${getToken('action-focus-ring-offset')};
  }

  a:focus, button:focus, [tabindex="0"]:focus {
    outline: none;
  }

  a:focus-visible, button:focus-visible, [tabindex="0"]:focus-visible {
    outline: ${getToken('action-focus-ring')};
  }

  :root {
    ${generateColorsCSSVars};
    --sscds-transition-fn: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --sscds-action-transition: all 300ms var(--sscds-transition-fn),outline 0ms;
  }
`;
