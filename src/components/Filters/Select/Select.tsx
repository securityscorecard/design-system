import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';

import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../Icon/Icon.enums';
import { selectStyles } from './styles';
import { OptionPropType, SelectProps } from './Select.types';

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name={SSCIconNames.caretDown} type={IconTypes.ssc} />
    </components.DropdownIndicator>
  );
};

const Select: React.FC<SelectProps> = (props) => (
  <ReactSelect
    components={{ DropdownIndicator }}
    styles={selectStyles}
    {...props}
  />
);

export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(OptionPropType),
  defaultValue: PropTypes.oneOfType([
    OptionPropType,
    PropTypes.arrayOf(OptionPropType),
  ]),
};
