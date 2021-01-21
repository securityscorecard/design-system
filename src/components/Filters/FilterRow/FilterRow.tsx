import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexContainer } from '../../FlexContainer';
import { StateButton } from '../StateButton';
import { Select } from '../Select';
import { Input } from '../Input';
import { WhereOption } from '../WhereOption';
import { FilterRowProps, SplitFieldProps } from './FilterRow.types';
import { DataPointPropTypes } from '../Filters.types';
import { Operators } from '../Filters.enums';
import { pxToRem } from '../../../utils/helpers';

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
  operator,
  // TODO implement logic
  /* eslint-disable @typescript-eslint/no-unused-vars */
  dataPoints,
  dataPoint,
  condition,
  input,
  /* eslint-enable */
}) => {
  return (
    <Container>
      <StateButton
        id={id}
        // eslint-disable-next-line no-console
        onClick={(filterId) => console.log(`Remove ${filterId}`)}
      />
      <SplitField width={72}>
        {operator === Operators.where ? (
          <WhereOption />
        ) : (
          <Select
            defaultValue={[{ value: 'and', label: 'And' }]}
            options={[{ value: 'and', label: 'And' }]}
          />
        )}
      </SplitField>
      <SplitField width={200}>
        <Select options={[{ value: 'test', label: 'Test' }]} />
      </SplitField>
      <SplitField width={144}>
        <Select options={[{ value: 'test', label: 'Test' }]} />
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
  dataPoints: PropTypes.arrayOf(DataPointPropTypes).isRequired,
  operator: PropTypes.oneOf(Object.values(Operators)).isRequired,
  dataPoint: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};
