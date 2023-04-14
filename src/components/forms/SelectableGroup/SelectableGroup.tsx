/* eslint-disable react/destructuring-assignment */
import type { ChangeEvent, FC } from 'react';
import type { Option, SelectableGroupProps } from './SelectableGroup.types';

import { useState } from 'react';
import { isNotUndefined, noop } from 'ramda-adjunct';
import styled from 'styled-components';
import { useId } from '@react-aria/utils';
import { useDeepCompareMemo } from 'use-deep-compare';
import { pipe, sort } from 'ramda';
import cls from 'classnames';

import { Cluster, Padbox } from '../../layout';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getRadii,
  getToken,
  pxToRem,
} from '../../../utils';
import { CLX_COMPONENT } from '../../../theme/constants';

const Label = styled(Padbox)`
  display: flex;
  align-items: center;
  background: ${getColor('neutral.200')};
  color: ${getColor('neutral.900')};
  border-radius: ${getRadii('default')};
  font-size: ${getFontSize('lg')};
  font-weight: ${getFontWeight('semibold')};
  line-height: 1rem;
  height: ${pipe(getToken('size-action-size'), pxToRem)};
  cursor: pointer;

  &:hover {
    background-color: ${getColor('primary.50')};
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:focus + ${Label} {
    box-shadow: inset 0 0 0 2px ${getColor('primary.200')};
  }
  &:focus:checked + ${Label} {
    box-shadow: inset 0 0 0 2px ${getColor('neutral.900')},
      inset 0 0 0 3px ${getColor('primary.200')};
  }
  &:checked + ${Label} {
    box-shadow: inset 0 0 0 2px ${getColor('neutral.900')};
  }
  &:disabled + ${Label} {
    background: ${getColor('neutral.300')};
    color: ${getColor('neutral.600')};
    cursor: not-allowed;
  }
`;

const sortOptions = sort(
  (x: Option, y: Option) =>
    Number(x.isDisabled || false) - Number(y.isDisabled || false),
);

const getNextValue = (value: string, currentValues: string[]) => {
  const valueIndex = currentValues.indexOf(value);

  if (valueIndex === -1) {
    return [...currentValues, value];
  }
  return currentValues.filter((cv) => cv !== value);
};

const SelectableGroup: FC<SelectableGroupProps> = ({
  isMulti = false,
  onChange = noop,
  value: valueFromProps,
  defaultValue: defaultValueFromProps,
  options,
  name,
  className,
  ...props
}) => {
  const isControlled = isNotUndefined(valueFromProps);
  const defaultValue = defaultValueFromProps || (isMulti ? [] : '');

  const id = useId();
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue,
  );
  const value = isControlled ? valueFromProps : internalValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = isMulti
      ? getNextValue(e.target.value, value as string[])
      : e.target.value;

    onChange(newValue);

    if (!isControlled) {
      setInternalValue(newValue);
    }
  };

  const sortedOptions = useDeepCompareMemo<Option[]>(
    () => sortOptions(options),
    [options],
  );

  return (
    <Cluster gap="sm" {...props} className={cls(CLX_COMPONENT, className)}>
      {sortedOptions.map(
        ({ value: optionValue, label, isDisabled = false }) => {
          const optionId = `${optionValue}-${id}`;
          const optionProps = isMulti
            ? {
                checked: value.indexOf(optionValue) !== -1,
                name: optionValue,
                type: 'checkbox',
              }
            : {
                checked: value === optionValue,
                name,
                type: 'radio',
              };

          return (
            <div key={optionId}>
              <Input
                disabled={isDisabled}
                id={optionId}
                value={optionValue}
                onChange={handleChange}
                {...optionProps}
              />
              <Label
                as="label"
                htmlFor={optionId}
                paddingSize="md"
                paddingType="squish"
              >
                {label}
              </Label>
            </div>
          );
        },
      )}
    </Cluster>
  );
};

export default SelectableGroup;
