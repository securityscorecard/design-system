import { isNonEmptyString } from 'ramda-adjunct';

import { Error } from '../../../forms/Message';
import { validateNumber } from '../../helpers';
import { NumberProps } from './Number.types';
import { Input } from '../../../forms';
import { useSafeTranslation } from '../../../../hooks/useSafeTranslation';

const Number = ({
  value = '',
  onChange,
  min,
  max,
  placeholder = 'Number',
  errorMessage = 'Use only numbers',
  isInvalid = false,
  onError,
}: NumberProps) => {
  const { t } = useSafeTranslation();
  const resolvedPlaceholder =
    placeholder ?? t('sscds|filters.number.placeholder');
  const resolvedErrorMessage = errorMessage ?? t('sscds|filters.number.error');
  const handleOnChange = (event) => {
    onChange(event);
    const hasError =
      !validateNumber(event.target.value, min, max) &&
      isNonEmptyString(event.target.value);
    onError(hasError);
  };

  return (
    <>
      <Input
        data-has-spin="false"
        isInvalid={isInvalid}
        placeholder={resolvedPlaceholder}
        step="any"
        type="number"
        value={value}
        onChange={handleOnChange}
      />
      {isInvalid && <Error>{resolvedErrorMessage}</Error>}
    </>
  );
};

export default Number;
