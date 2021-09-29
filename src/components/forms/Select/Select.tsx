import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import ReactSelect, { components } from 'react-select';

import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { reactSelectTheme, selectStyles } from './Select.styles';
import { SelectProps } from './Select.types';
import { Inline, InlineEnums, Padbox } from '../../layout';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { SpaceSizes } from '../../../theme';

const Control = (props) => {
  const { children } = props;
  return (
    <components.Control {...props}>
      <Inline stretch={InlineEnums.StretchEnum.start} style={{ width: '100%' }}>
        {children}
      </Inline>
    </components.Control>
  );
};

const ValueContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, isMulti } = props;
  return (
    <Padbox paddingSize={SpaceSizes.md} paddingType={PaddingTypes.squish}>
      <components.ValueContainer {...props}>
        <Inline align="stretch" gap={isMulti ? SpaceSizes.xs : SpaceSizes.none}>
          {children}
        </Inline>
      </components.ValueContainer>
    </Padbox>
  );
};

const IndicatorsContainer = (props) => {
  const { children } = props;
  return (
    <components.IndicatorsContainer {...props}>
      <Inline>{children}</Inline>
    </components.IndicatorsContainer>
  );
};

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
}) => {
  const DSTheme = useTheme();

  return (
    <ReactSelect
      components={{
        DropdownIndicator,
        ClearIndicator,
        IndicatorsContainer,
        Control,
        ValueContainer,
      }}
      defaultMenuIsOpened={defaultIsMenuOpen}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isMulti={isMulti}
      options={options}
      placeholder={placeholder}
      styles={selectStyles(DSTheme)}
      theme={reactSelectTheme(DSTheme)}
      {...props}
    />
  );
};

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
