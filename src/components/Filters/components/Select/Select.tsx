import type { MultiValueProps, OptionTypeBase } from 'react-select';
import type { FC } from 'react';
import type { SelectProps } from './Select.types';

import ReactSelect, { components } from 'react-select';
import { toString } from 'ramda';

import Tag from '../TagsInput/Tag';
import { IconTypes, SSCIconNames } from '../../../../theme/icons/icons.enums';
import { Icon } from '../../../Icon';
import { selectStyles } from './styles';

function DropdownIndicator(props) {
  return (
    <components.DropdownIndicator {...props}>
      <Icon name={SSCIconNames.angleDown} type={IconTypes.ssc} />
    </components.DropdownIndicator>
  );
}

const MultiValue: FC<MultiValueProps<OptionTypeBase>> = (props) => {
  const { data, removeProps } = props;
  return <Tag value={data.label} onClose={removeProps.onClick} />;
};

const Select: FC<SelectProps> = (props) => {
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
