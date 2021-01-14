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
import { pxToRem } from '../../../utils/helpers';
import operatorOptions from '../data/operator-options.json';

const Container = styled(FlexContainer)`
  margin-bottom: ${pxToRem(8)};
  &:last-of-type {
    margin-bottom: ${pxToRem(0)};
  }
`;

const SplitField = styled.div`
  width: ${({ width }: SplitFieldProps) => pxToRem(width)};
  margin-right: ${pxToRem(6)};
  &:first-of-type {
    margin-left: ${pxToRem(6)};
  }
  &:last-of-type {
    margin-right: ${pxToRem(0)};
  }
`;

const FilterRow: React.FC<FilterRowProps> = ({
  uuid,
  conditionOptions,
  dataOptions,
  isFilterApplied,
  isFirstRow,
  onRemove,
}) => (
  <Container>
    <StateButton
      isFilterApplied={isFilterApplied}
      uuid={uuid}
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
      <Select defaultValue={dataOptions[0]} options={dataOptions} />
    </SplitField>
    <SplitField width={144}>
      <Select defaultValue={conditionOptions[0]} options={conditionOptions} />
    </SplitField>
    <SplitField width={266}>
      <Input />
    </SplitField>
  </Container>
);

export default FilterRow;

FilterRow.propTypes = {
  uuid: PropTypes.string.isRequired,
  conditionOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  dataOptions: PropTypes.arrayOf(OptionPropType).isRequired,
  onRemove: PropTypes.func.isRequired,
  isFilterApplied: PropTypes.bool,
  isFirstRow: PropTypes.bool,
};
