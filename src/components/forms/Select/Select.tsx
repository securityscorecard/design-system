import React from 'react';
import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { ActionKindsPropType } from '../../../types/action.types';
import { useSelectProps } from './useSelectProps';
import { GroupPropType, OptionPropType, SelectProps } from './Select.types';

function Select<IsMulti extends boolean = false>({
  isAsync = false,
  ...props
}: SelectProps<IsMulti>): React.ReactElement {
  const selectProps = useSelectProps<IsMulti>(props);

  if (isAsync) {
    return <AsyncReactSelect {...selectProps} />;
  }

  return <ReactSelect {...selectProps} />;
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([OptionPropType, GroupPropType]),
  ),
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
