import type { FC } from 'react';
import PropTypes from 'prop-types';
import type { InlineProps } from '../layout/Inline/Inline';

import { useLogger } from '../../hooks/useLogger';
import { Inline } from '../layout';

const Nav: FC<InlineProps> = (props) => {
  const { warn } = useLogger('Nav');
  warn(`<Nav> and <NavItem> components are deprecated and will be removed soon.

Instead please use <Tabs> component (variant: \`text\`, size: \`large\`).

https://securityscorecard.github.io/design-system/alpha/?path=/docs/components-tabs--playground#text-tabs
`);

  return <Inline as="nav" {...props} />;
};

Nav.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Vertical alignment of elements inside Inline
   */
  align: PropTypes.oneOfType([
    PropTypes.oneOf([
      '-moz-initial',
      'baseline',
      'center',
      'end',
      'flex-end',
      'flex-start',
      'inherit',
      'initial',
      'normal',
      'revert-layer',
      'revert',
      'self-end',
      'self-start',
      'start',
      'stretch',
      'unset',
    ]),
    PropTypes.shape({
      '__@iterator@393': PropTypes.func,
      anchor: PropTypes.func,
      at: PropTypes.func,
      big: PropTypes.func,
      blink: PropTypes.func,
      bold: PropTypes.func,
      charAt: PropTypes.func,
      charCodeAt: PropTypes.func,
      codePointAt: PropTypes.func,
      concat: PropTypes.func,
      endsWith: PropTypes.func,
      fixed: PropTypes.func,
      fontcolor: PropTypes.func,
      fontsize: PropTypes.func,
      includes: PropTypes.func,
      indexOf: PropTypes.func,
      italics: PropTypes.func,
      lastIndexOf: PropTypes.func,
      length: PropTypes.number,
      link: PropTypes.func,
      localeCompare: PropTypes.func,
      match: PropTypes.func,
      matchAll: PropTypes.func,
      normalize: PropTypes.func,
      padEnd: PropTypes.func,
      padStart: PropTypes.func,
      repeat: PropTypes.func,
      replace: PropTypes.func,
      replaceAll: PropTypes.func,
      search: PropTypes.func,
      slice: PropTypes.func,
      small: PropTypes.func,
      split: PropTypes.func,
      startsWith: PropTypes.func,
      strike: PropTypes.func,
      sub: PropTypes.func,
      substr: PropTypes.func,
      substring: PropTypes.func,
      sup: PropTypes.func,
      toLocaleLowerCase: PropTypes.func,
      toLocaleUpperCase: PropTypes.func,
      toLowerCase: PropTypes.func,
      toString: PropTypes.func,
      toUpperCase: PropTypes.func,
      trim: PropTypes.func,
      trimEnd: PropTypes.func,
      trimLeft: PropTypes.func,
      trimRight: PropTypes.func,
      trimStart: PropTypes.func,
      valueOf: PropTypes.func,
    }),
  ]),
  className: PropTypes.string,
  /**
   * Whitespace between each child of the Inline
   */
  gap: PropTypes.oneOf([
    'lg',
    'lgPlus',
    'md',
    'mdPlus',
    'none',
    'sm',
    'xl',
    'xlPlus',
    'xs',
    'xxl',
    'xxs',
  ]),
  /**
   * Horizontal alignment of elements inside Inline
   */
  justify: PropTypes.oneOfType([
    PropTypes.oneOf([
      '-moz-initial',
      'center',
      'end',
      'flex-end',
      'flex-start',
      'inherit',
      'initial',
      'left',
      'normal',
      'revert-layer',
      'revert',
      'right',
      'space-around',
      'space-between',
      'space-evenly',
      'start',
      'stretch',
      'unset',
    ]),
    PropTypes.shape({
      '__@iterator@393': PropTypes.func,
      anchor: PropTypes.func,
      at: PropTypes.func,
      big: PropTypes.func,
      blink: PropTypes.func,
      bold: PropTypes.func,
      charAt: PropTypes.func,
      charCodeAt: PropTypes.func,
      codePointAt: PropTypes.func,
      concat: PropTypes.func,
      endsWith: PropTypes.func,
      fixed: PropTypes.func,
      fontcolor: PropTypes.func,
      fontsize: PropTypes.func,
      includes: PropTypes.func,
      indexOf: PropTypes.func,
      italics: PropTypes.func,
      lastIndexOf: PropTypes.func,
      length: PropTypes.number,
      link: PropTypes.func,
      localeCompare: PropTypes.func,
      match: PropTypes.func,
      matchAll: PropTypes.func,
      normalize: PropTypes.func,
      padEnd: PropTypes.func,
      padStart: PropTypes.func,
      repeat: PropTypes.func,
      replace: PropTypes.func,
      replaceAll: PropTypes.func,
      search: PropTypes.func,
      slice: PropTypes.func,
      small: PropTypes.func,
      split: PropTypes.func,
      startsWith: PropTypes.func,
      strike: PropTypes.func,
      sub: PropTypes.func,
      substr: PropTypes.func,
      substring: PropTypes.func,
      sup: PropTypes.func,
      toLocaleLowerCase: PropTypes.func,
      toLocaleUpperCase: PropTypes.func,
      toLowerCase: PropTypes.func,
      toString: PropTypes.func,
      toUpperCase: PropTypes.func,
      trim: PropTypes.func,
      trimEnd: PropTypes.func,
      trimLeft: PropTypes.func,
      trimRight: PropTypes.func,
      trimStart: PropTypes.func,
      valueOf: PropTypes.func,
    }),
  ]),
  /**
   * Child or children to fill available space
   */
  stretch: PropTypes.oneOfType([
    PropTypes.oneOf(['all', 'end', 'start']),
    PropTypes.number,
  ]),
} as any;

export default Nav;
