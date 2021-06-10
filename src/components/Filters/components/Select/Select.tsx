import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, {
  MultiValueProps,
  OptionTypeBase,
  components,
} from 'react-select';
import { toString } from 'ramda';

import Tag from '../TagsInput/Tag';
import { IconTypes, SSCIconNames } from '../../../../theme/icons/icons.enums';
import { Icon } from '../../../Icon';
import { selectStyles } from './styles';
import { OptionPropType, SelectProps } from './Select.types';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <Icon name={SSCIconNames.caretDown} type={IconTypes.ssc} />
  </components.DropdownIndicator>
);

const MultiValue: React.FC<MultiValueProps<OptionTypeBase>> = (props) => {
  const { data, removeProps } = props;
  return <Tag value={data.label} onClose={removeProps.onClick} />;
};

const Select: React.FC<SelectProps> = (props) => {
  const { value } = props;

  return (
    <ReactSelect
      key={toString(value)}
      components={{ DropdownIndicator, MultiValue }}
      isClearable={false}
      maxMenuHeight={163} // 5 menu options
      styles={selectStyles}
      {...props}
    />
  );
};

export default Select;

Select.propTypes = {
  options: PropTypes.arrayOf(OptionPropType),
  value: OptionPropType,
  defaultValue: PropTypes.oneOfType([
    OptionPropType,
    PropTypes.arrayOf(OptionPropType),
  ]),
};

MultiValue.propTypes = {
  data: PropTypes.exact({
    /* eslint-disable-next-line react/no-unused-prop-types */
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  removeProps: PropTypes.exact({
    /* eslint-disable-next-line react/no-unused-prop-types */
    onTouchEnd: PropTypes.func,
    onClick: PropTypes.func,
    /* eslint-disable-next-line react/no-unused-prop-types */
    onMouseDown: PropTypes.func,
  }),
};
