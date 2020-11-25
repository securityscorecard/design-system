import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';

import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../Icon/Icon.enums';
import { reactSelectTheme, selectStyles } from './styles';
import { SelectProps } from './Select.types';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name={SSCIconNames.chevronDown} type={IconTypes.ssc} />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon name={SSCIconNames.times} type={IconTypes.ssc} />
    </components.ClearIndicator>
  );
};

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = '',
  isInvalid = false,
  isDisabled = false,
  isClearable = false,
  isMulti = false,
  defaultIsMenuOpen = false,
  ...props
}) => (
  <ReactSelect
    components={{ DropdownIndicator, ClearIndicator }}
    defaultMenuIsOpened={defaultIsMenuOpen}
    isClearable={isClearable}
    isDisabled={isDisabled}
    isInvalid={isInvalid}
    isMulti={isMulti}
    options={options}
    placeholder={placeholder}
    styles={selectStyles}
    theme={reactSelectTheme}
    {...props}
  />
);

const OptionPropType = PropTypes.exact({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Select.propTypes = {
  options: PropTypes.arrayOf(OptionPropType),
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    OptionPropType,
    PropTypes.arrayOf(OptionPropType),
  ]),
  defaultIsMenuOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Select;
