import PropTypes from 'prop-types';

export const AlignItemsPropType = PropTypes.oneOf([
  'inherit',
  '-moz-initial',
  'initial',
  'revert',
  'unset',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'self-end',
  'self-start',
  'start',
  'baseline',
  'normal',
  'stretch',
]);

export const JustifyContentPropType = PropTypes.oneOf([
  'inherit',
  '-moz-initial',
  'initial',
  'revert',
  'unset',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
  'normal',
  'stretch',
  'space-around',
  'space-between',
  'space-evenly',
  'left',
  'right',
]);
