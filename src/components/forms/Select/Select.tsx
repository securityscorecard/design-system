import React from 'react';
import ReactSelect from 'react-select';
import PropTypes from 'prop-types';

import { ActionKindsPropType } from '../../../types/action.types';
import { useSelectProps } from './useSelectProps';
import { GroupPropType, OptionPropType, SelectProps } from './Select.types';

const Select = <IsMulti extends boolean = false>(
  props: SelectProps<IsMulti>,
): React.ReactElement => {
  const defaultSelectProps = useSelectProps<IsMulti>(props);

  return <ReactSelect {...props} {...defaultSelectProps} />;
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([OptionPropType, GroupPropType]),
  ).isRequired,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    OptionPropType,
    PropTypes.arrayOf(OptionPropType),
  ]),
  defaultInputValue: PropTypes.string,
  defaultIsMenuOpen: PropTypes.bool,
  className: PropTypes.string,
  menuActions: PropTypes.arrayOf(ActionKindsPropType),
  maxPillLabelLength: PropTypes.number,
  isMenuPositionRelative: PropTypes.bool,
};

Select.defaultProps = {
  placeholder: '',
  isInvalid: false,
  isDisabled: false,
  isClearable: false,
  maxPillLabelLength: 16,
  isMenuPositionRelative: false,
};

export default Select;
