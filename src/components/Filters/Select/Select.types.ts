import PropTypes from 'prop-types';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  onChange: (value: Option) => void;
  value?: Option;
  isDisabled?: boolean;
  defaultValue?: Option | Option[];
}

export const OptionPropType = PropTypes.exact({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});
