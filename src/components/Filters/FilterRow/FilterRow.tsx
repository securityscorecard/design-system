import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexContainer } from '../../FlexContainer';
import { StateButton } from '../StateButton';
import { Select } from '../Select';
import { Input } from '../Input';
import { WhereOption } from '../WhereOption';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import { OptionPropType } from '../Select/Select.types';
import { InputTypes } from '../Filters.enums';
import { pxToRem } from '../../../utils/helpers';
import operatorOptions from '../data/operator-options.json';

const Container = styled(FlexContainer)`
  margin-bottom: ${pxToRem(8)};
  &:last-of-type {
    margin-bottom: ${pxToRem(0)};
  }
`;

const SplitField = styled.div<SplitFieldProps>`
  width: ${({ width }) => pxToRem(width)};
  margin-right: ${pxToRem(6)};
  &:first-of-type {
    margin-left: ${pxToRem(6)};
  }
  &:last-of-type {
    margin-right: ${pxToRem(0)};
  }
`;

const FilterRow: React.FC<FilterRowProps> = ({
  id,
  conditionOptions,
  defaultCondition,
  dataOptions,
  isFilterApplied,
  isFirstRow,
  onRemove,
  // FIXME use vars
  /* eslint-disable @typescript-eslint/no-unused-vars */
  inputType,
  enumOptions,
  onAdd,
  /* eslint-enable */
}) => (
  <Container>
    <StateButton id={id} isFilterApplied={isFilterApplied} onClick={onRemove} />
    <SplitField width={72}>
      {isFirstRow ? (
        <WhereOption />
      ) : (
        <Select defaultValue={operatorOptions[0]} options={operatorOptions} />
      )}
    </SplitField>
    <SplitField width={200}>
      <Select defaultValue={dataOptions[0]} options={dataOptions} />
    </SplitField>
    <SplitField width={144}>
      <Select
        defaultValue={defaultCondition || conditionOptions[0]}
        options={conditionOptions}
      />
    </SplitField>
    <SplitField width={266}>
      <Input />
    </SplitField>
  </Container>
);

export default FilterRow;

FilterRow.propTypes = {
  id: PropTypes.string.isRequired,
  dataOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  conditionOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  inputType: PropTypes.oneOf(Object.values(InputTypes)).isRequired,
  onRemove: PropTypes.func.isRequired,
  defaultCondition: OptionPropType,
  enumOptions: PropTypes.arrayOf(OptionPropType),
  isFilterApplied: PropTypes.bool,
  isFirstRow: PropTypes.bool,
  onAdd: PropTypes.func,
};
