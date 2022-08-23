import { useState } from 'react';
import { isNotUndefined } from 'ramda-adjunct';

export const useField = (valueFromProps, defaultValue, onChangeFromProps) => {
  const isControlled = isNotUndefined(valueFromProps);
  const hasDefaultValue = isNotUndefined(defaultValue);

  const [internalValue, setInternalValue] = useState(
    hasDefaultValue ? defaultValue : '',
  );
  const value = isControlled ? valueFromProps : internalValue;

  const onChange = (e) => {
    if (onChangeFromProps) {
      onChangeFromProps(e);
    }
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
  };

  return {
    value,
    onChange,
    isControlled,
    clearValue: () => setInternalValue(''),
  };
};
