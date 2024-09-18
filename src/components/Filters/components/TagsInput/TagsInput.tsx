import { isNonEmptyString } from 'ramda-adjunct';

import { Error } from '../../../forms/Message';
import { TagsInputProps } from './TagsInput.types';
import { MultiValueInput } from '../../../forms';
import { validatePattern } from '../../helpers';
import { useSafeTranslation } from '../../../../hooks/useSafeTranslation';

const TagsInput = ({
  value: tags = [],
  onChange,
  maxLength,
  pattern,
  errorMessage,
  onValidate = validatePattern,
  onError,
  placeholder = 'Enter value',
  isInvalid = false,
}: TagsInputProps) => {
  const { t } = useSafeTranslation();
  const resolvedPlaceholder =
    placeholder ?? t('sscds|filters.tagsInput.placeholder');
  const handleOnValidate = (event) => {
    const { target } = event;
    const hasError = onValidate(target) && isNonEmptyString(target.value);
    onError(hasError);
  };

  return (
    <>
      <MultiValueInput
        maxLength={maxLength}
        pattern={pattern}
        placeholder={resolvedPlaceholder}
        value={tags}
        onInputChange={handleOnValidate}
        onValuesChange={onChange}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </>
  );
};

export default TagsInput;
