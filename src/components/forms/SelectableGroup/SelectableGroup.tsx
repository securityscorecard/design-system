/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isNotUndefined, noop } from 'ramda-adjunct';
import styled from 'styled-components';
import { useId } from '@react-aria/utils';
import { useDeepCompareMemo } from 'use-deep-compare';
import { sort } from 'ramda';

import { Cluster, Padbox } from '../../layout';
import { Option, SelectableGroupProps } from './SelectableGroup.types';
import {
  getButtonHeight,
  getColor,
  getFontSize,
  getFontWeight,
  getRadii,
} from '../../../utils';

const Label = styled(Padbox)`
  display: flex;
  align-items: center;
  background: ${getColor('neutral.200')};
  color: ${getColor('neutral.900')};
  border-radius: ${getRadii('default')};
  font-size: ${getFontSize('lg')};
  font-weight: ${getFontWeight('semibold')};
  line-height: 1rem;
  height: ${getButtonHeight('md')};
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
    box-shadow: inset 0 0 0 1px ${getColor('neutral.900')},
      inset 0 0 0 3px ${getColor('primary.200')};
  }
  &:checked + ${Label} {
    box-shadow: inset 0 0 0 1px ${getColor('neutral.900')};
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

const SelectableGroup: React.FC<SelectableGroupProps> = ({
  isMulti = false,
  onChange = noop,
  value: valueFromProps,
  defaultValue: defaultValueFromProps,
  options,
  name,
  ...props
}) => {
  const isControlled = isNotUndefined(valueFromProps);
  const defaultValue = defaultValueFromProps || (isMulti ? [] : '');

  const id = useId();
  const [internalValue, setInternalValue] = useState<string | string[]>(
    defaultValue,
  );
  const value = isControlled ? valueFromProps : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Cluster gap="sm" {...props}>
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

SelectableGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      isDisabled: PropTypes.bool,
    }),
  ).isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectableGroup;
