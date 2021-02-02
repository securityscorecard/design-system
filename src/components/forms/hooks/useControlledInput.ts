import React, { useState } from 'react';

export const useControlledInput = (
  value: string,
  onChangeAdditionalAction: () => void,
): {
  inputValue: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resetValue: () => void;
} => {
  const [inputValue, setInputValue] = useState(value);

  const resetValue = () => setInputValue('');

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    onChangeAdditionalAction();
  };

  return { inputValue, onChangeInput, resetValue };
};
