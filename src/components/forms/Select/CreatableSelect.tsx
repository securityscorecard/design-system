import React from 'react';
import PropTypes from 'prop-types';
import CreatableReactSelect from 'react-select/creatable';

import { Strong } from '../../typography';
import { TextVariants } from '../../typography/Text/Text.enums';
import { useSelectProps } from './useSelectProps';
import Select from './Select';
import { CreatableSelectProps } from './Select.types';

const renderCreateLabel = (createNewLabel: string) => (inputValue: string) =>
  (
    <>
      <span>{createNewLabel}</span>
      <Strong variant={TextVariants.inherit}>{inputValue}</Strong>
    </>
  );
function CreatableSelect<IsMulti extends boolean = false>({
  createNewLabel = 'Create',
  ...props
}: CreatableSelectProps<IsMulti>): React.ReactElement {
  const selectProps = useSelectProps<IsMulti>(props);

  return (
    <CreatableReactSelect
      formatCreateLabel={renderCreateLabel(createNewLabel)}
      {...selectProps}
    />
  );
}

CreatableSelect.propTypes = {
  ...Select.propTypes,
  createNewLabel: PropTypes.string,
};

CreatableSelect.defaultProps = Select.defaultProps;

export default CreatableSelect;
