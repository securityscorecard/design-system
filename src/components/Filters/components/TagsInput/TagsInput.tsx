import type { FC } from 'react';
import type { TagsInputProps } from './TagsInput.types';

import { isNonEmptyString } from 'ramda-adjunct';

import { Error } from '../../../forms/Message';
import { MultiValueInput } from '../../../forms';
import { validatePattern } from '../../helpers';

const TagsInput: FC<TagsInputProps> = ({
  value: tags = [],
  onChange,
  maxLength,
  pattern,
  errorMessage,
  onValidate = validatePattern,
  onError,
  placeholder = 'Enter value',
  isInvalid = false,
}) => {
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
        placeholder={placeholder}
        value={tags}
        onInputChange={handleOnValidate}
        onValuesChange={onChange}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </>
  );
};

export default TagsInput;
