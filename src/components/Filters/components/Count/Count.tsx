import { isNonEmptyString } from 'ramda-adjunct';

import { Error } from '../../../forms/Message';
import { validateNumber } from '../../helpers';
import { NumberProps } from '../Number/Number.types';
import { Input } from '../../../forms';
import { useSafeTranslation } from '../../../../hooks/useSafeTranslation';

const Count = ({
  value = '',
  onChange,
  min,
  max,
  placeholder,
  errorMessage,
  isInvalid = false,
  onError,
}: NumberProps) => {
  const { t } = useSafeTranslation();
  const resolvedPlaceholder =
    placeholder ?? t('sscds:filters.count.placeholder');
  const resolvedErrorMessage = errorMessage ?? t('sscds:filters.count.error');

  const handleKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
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
        type="number"
        value={value}
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
      />
      {isInvalid && <Error>{resolvedErrorMessage}</Error>}
    </>
  );
};

export default Count;
