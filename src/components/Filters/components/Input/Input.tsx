import { isNonEmptyString } from 'ramda-adjunct';

import { InputProps } from './Input.types';
import { Error } from '../../../forms/Message';
import { validatePattern } from '../../helpers';
import { Input as BaseInput } from '../../../forms';
import { useSafeTranslation } from '../../../../hooks/useSafeTranslation';

const Input = ({
  value = '',
  onChange,
  maxLength,
  pattern,
  errorMessage,
  onValidate = validatePattern,
  placeholder,
  isInvalid = false,
  onError,
  ...props
}: InputProps) => {
  const { t } = useSafeTranslation();
  const resolvedPlaceholder =
    placeholder ?? t('sscds:filters.input.placeholder');
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
        placeholder={resolvedPlaceholder}
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
