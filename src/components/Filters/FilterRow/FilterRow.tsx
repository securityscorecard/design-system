import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pluck } from 'ramda';

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

const getOptions = pluck('option');

const FilterRow: React.FC<FilterRowProps> = ({
  id,
  dataPoints,
  conditions,
  isFilterApplied,
  isFirstRow,
  onRemove,
  // FIXME use vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAdd,
}) => {
  const dataPointsOptions = getOptions(dataPoints);
  const conditionsOptions = getOptions(conditions);

  return (
    <Container>
      <StateButton
        id={id}
        isFilterApplied={isFilterApplied}
        onClick={onRemove}
      />
      <SplitField width={72}>
        {isFirstRow ? (
          <WhereOption />
        ) : (
          <Select defaultValue={operatorOptions[0]} options={operatorOptions} />
        )}
      </SplitField>
      <SplitField width={200}>
        <Select
          defaultValue={dataPointsOptions[0]}
          options={dataPointsOptions}
        />
      </SplitField>
      <SplitField width={144}>
        <Select
          defaultValue={conditionsOptions[0]}
          options={conditionsOptions}
        />
      </SplitField>
      <SplitField width={266}>
        <Input />
      </SplitField>
    </Container>
  );
};

export default FilterRow;

FilterRow.propTypes = {
  id: PropTypes.string.isRequired,
  dataPoints: PropTypes.arrayOf(
    PropTypes.exact({
      // eslint-disable-next-line react/no-unused-prop-types
      option: OptionPropType.isRequired,
      // eslint-disable-next-line react/no-unused-prop-types
      defaultCondition: OptionPropType,
    }),
  ).isRequired,
  conditions: PropTypes.arrayOf(
    PropTypes.exact({
      // eslint-disable-next-line react/no-unused-prop-types
      option: OptionPropType.isRequired,
      // eslint-disable-next-line react/no-unused-prop-types
      inputType: PropTypes.oneOf(Object.values(InputTypes)).isRequired,
      // eslint-disable-next-line react/no-unused-prop-types
      enumOptions: PropTypes.arrayOf(OptionPropType),
    }),
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  isFilterApplied: PropTypes.bool,
  isFirstRow: PropTypes.bool,
  onAdd: PropTypes.func,
};
