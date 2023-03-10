import type { ReactElement } from 'react';
import type { CreatableSelectProps } from './Select.types';

import PropTypes from 'prop-types';
import CreatableReactSelect from 'react-select/creatable';
import AsyncCreatableReactSelect from 'react-select/async-creatable';
import cls from 'classnames';

import { Strong } from '../../typographyLegacy';
import { TextVariants } from '../../typographyLegacy/Text/Text.enums';
import { useSelectProps } from './useSelectProps';
import Select from './Select';
import { CLX_COMPONENT } from '../../../theme/constants';

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
}: CreatableSelectProps<IsMulti>): ReactElement {
  const selectProps = useSelectProps<IsMulti>(props);

  if (isAsync) {
    return (
      <AsyncCreatableReactSelect
        className={cls(CLX_COMPONENT, props?.className)}
        formatCreateLabel={renderCreateLabel(createNewLabel)}
        {...selectProps}
      />
    );
  }

  return (
    <CreatableReactSelect
      className={cls(CLX_COMPONENT, props?.className)}
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
