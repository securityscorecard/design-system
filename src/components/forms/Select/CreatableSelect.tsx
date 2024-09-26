import React from 'react';
import CreatableReactSelect from 'react-select/creatable';
import AsyncCreatableReactSelect from 'react-select/async-creatable';
import cls from 'classnames';

import { Strong } from '../../Text';
import { TextVariants } from '../../Text/Text.enums';
import { useSelectProps } from './useSelectProps';
import { CreatableSelectProps } from './Select.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const renderCreateLabel = (createNewLabel: string) => (inputValue: string) =>
  (
    <>
      <span>{createNewLabel}</span>
      <Strong variant={TextVariants.inherit}>{inputValue}</Strong>
    </>
  );
function CreatableSelect<IsMulti extends boolean = false>({
  createNewLabel = 'Create',
  isAsync = false,
  placeholder = '',
  isInvalid = false,
  isDisabled = false,
  isClearable = false,
  maxPillLabelLength = 16,
  isMenuPositionRelative = false,
  className = '',
  ...props
}: CreatableSelectProps<IsMulti>): React.ReactElement {
  const selectProps = useSelectProps<IsMulti>({
    placeholder,
    isInvalid,
    isDisabled,
    isClearable,
    maxPillLabelLength,
    isMenuPositionRelative,
    className,
    ...props,
  });

  if (isAsync) {
    return (
      <AsyncCreatableReactSelect
        className={cls(CLX_COMPONENT, props?.className)}
        formatCreateLabel={renderCreateLabel(createNewLabel)}
        {...selectProps}
      />
    );
  }

  return (
    <CreatableReactSelect
      className={cls(CLX_COMPONENT, props?.className)}
      formatCreateLabel={renderCreateLabel(createNewLabel)}
      {...selectProps}
    />
  );
}

CreatableSelect.displayName = 'CreatableSelect';

export default CreatableSelect;
