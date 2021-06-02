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
  margin?: SpacingSizeValue;
  padding?: SpacingSizeValue;
}

export const PaddingTypes = {
  squish: 'squish',
  stretch: 'stretch',
  square: 'square',
} as const;

export type PaddingType = typeof PaddingTypes[keyof typeof PaddingTypes];
