import React from 'react';
import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';
import cls from 'classnames';

import { useSelectProps } from './useSelectProps';
import { SelectProps } from './Select.types';
import { CLX_COMPONENT } from '../../../theme/constants';

function Select<IsMulti extends boolean = false>({
  isAsync = false,
  ...props
}: SelectProps<IsMulti>): React.ReactElement {
  const selectProps = useSelectProps<IsMulti>(props);
  const { className } = props;

  if (isAsync) {
    return (
      <AsyncReactSelect
        {...selectProps}
        className={cls(CLX_COMPONENT, className)}
      />
    );
  }

  return (
    <ReactSelect {...selectProps} className={cls(CLX_COMPONENT, className)} />
  );
}

Select.defaultProps = {
  placeholder: '',
  isInvalid: false,
  isDisabled: false,
  isClearable: false,
  maxPillLabelLength: 16,
  isMenuPositionRelative: false,
  className: '',
};

Select.displayName = 'Select';

export default Select;
