import PropTypes from 'prop-types';

export type SpacingSizeValue =
  | 'none'
  | number
  | {
      vertical?: number;
      horizontal?: number;
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
    };

export const SpacingSizeValuePropType = PropTypes.oneOfType([
  PropTypes.oneOf<'none'>(['none']),
  PropTypes.number.isRequired,
  PropTypes.exact({
    vertical: PropTypes.number,
    horizontal: PropTypes.number,
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,
]);

export interface SpacingProps {
  /**
   * DEPRECATED use Layout Primitives for layouts
   *
   * @deprecated use layout primitives instead */
  margin?: SpacingSizeValue;
  /**
   * DEPRECATED use Layout Primitives for layouts
   *
   * @deprecated use layout primitives instead */
  padding?: SpacingSizeValue;
}
