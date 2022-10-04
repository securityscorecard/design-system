import React from 'react';
import PropTypes from 'prop-types';
import CreatableReactSelect from 'react-select/creatable';
import AsyncCreatableReactSelect from 'react-select/async-creatable';

import { Strong } from '../../typographyLegacy';
import { TextVariants } from '../../typographyLegacy/Text/Text.enums';
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
  isAsync = false,
  ...props
}: CreatableSelectProps<IsMulti>): React.ReactElement {
  const selectProps = useSelectProps<IsMulti>(props);

  if (isAsync) {
    return (
      <AsyncCreatableReactSelect
        formatCreateLabel={renderCreateLabel(createNewLabel)}
        {...selectProps}
      />
    );
  }

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
CreatableSelect.displayName = 'CreatableSelect';

export default CreatableSelect;
