import type { FC } from 'react';
import type { InputProps } from './Input.types';

import { isNonEmptyString } from 'ramda-adjunct';

import { Error } from '../../../forms/Message';
import { validatePattern } from '../../helpers';
import { Input as BaseInput } from '../../../forms';

const Input: FC<InputProps> = ({
  value = '',
  onChange,
  maxLength,
  pattern,
  errorMessage,
  onValidate = validatePattern,
  placeholder = 'String',
  isInvalid = false,
  onError,
  ...props
}) => {
  const handleOnValidate = (event) => {
    const { target } = event;
    const hasError = onValidate(target) && isNonEmptyString(target.value);
    onError(hasError);
  };

  const handleOnChange = (event) => {
    onChange(event);
    handleOnValidate(event);
  };

  return (
    <>
      <BaseInput
        isInvalid={isInvalid}
        maxLength={maxLength}
        pattern={pattern}
        placeholder={placeholder}
        type="text"
        value={value}
        onBlur={handleOnValidate}
        onChange={handleOnChange}
        {...props}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </>
  );
};

export default Input;
