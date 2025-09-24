import { createGlobalStyle } from 'styled-components';

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
  abbr {
    text-decoration: none;
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
    background: var(--sscds-color-background-body);
    font-family: var(--sscds-font-family-body);
    font-weight: var(--sscds-font-weight-body-default);
    font-size: var(--sscds-font-size-body-md);
    line-height: var(--sscds-font-lineheight-body-md);
    color: var(--sscds-color-text-default);
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
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
    /* stylelint-disable-next-line property-no-vendor-prefix */
    -webkit-appearance: none;
  }
  *, *:before, *:after {
    box-sizing: border-box;

    /* Disable user select on everything but texts */
    user-select: none;
  }
  p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea {
    user-select: text;
  }

  /* global focus style */
  a, button, [tabindex="0"] {
    outline-offset: var(--sscds-focus-outline-offset, 0);
  }
  a:focus, button:focus, [tabindex="0"]:focus {
    outline: none;
  }
  a:focus-visible, button:focus-visible, [tabindex="0"]:focus-visible {
    outline: var(--sscds-focus-indicator-width) solid var(--sscds-focus-indicator-color);
    outline-offset: var(--sscds-focus-outline-offset, -1px);
    /* Dual-layer approach for maximum contrast on any background */
    box-shadow: 
      0 0 0 1px var(--sscds-color-white),
      0 0 0 calc(var(--sscds-focus-indicator-width) + 1px) var(--sscds-focus-indicator-color);
  }
  .ssc__control--is-focused .ssc__input input:focus-visible {
    outline: none;
    outline-offset: 0;
    box-shadow: none;
  }

  /* Tighter focus indicator for specific components */
  .sscds-buttonv2:focus-visible {
    outline-offset: 0;
  }
  .sscds-tighter-focus {
    transition: none;
    &:focus-visible {
      outline-offset: -3px;
      outline-width: 3px;
      box-shadow: none;
    }
  }

  :root {
    ${generateColorsCSSVars};
    --sscds-transition-fn: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --sscds-action-transition: all 300ms var(--sscds-transition-fn),outline 0ms;
    --sscds-focus-outline-offset: -1px;
    --sscds-table-focus-outline-width: 3px;
    --sscds-table-focus-outline-offset: -3px;
    --sscds-focus-indicator-color: var(--sscds-color-border-action-focused-high-contrast);
    --sscds-focus-indicator-width: 2px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
