import { useEffect, useState } from 'react';

import { Condition, DataPoint } from '../Filters.types';
import { useFilterRowType } from './useFilterRow.types';
import { Option } from '../inputs/Select/Select.types';

export const normalizeOptions = <O extends Option>({
  value,
  label,
}: O): Option => ({
  value,
  label,
});

const getValuesOnChange = (dataPoints, dataPointValue, conditionValue) => {
  const dataPoint = dataPoints.find(({ value }) => value === dataPointValue);

  const conditions = dataPoint.conditions.map(normalizeOptions);

  const condition = dataPoint.conditions.find(
    ({ value }) => value === conditionValue,
  );

  return {
    dataPoint: normalizeOptions<DataPoint>(dataPoint),
    conditions,
    condition: normalizeOptions<Condition>(condition),
    Input: () => condition.input,
  };
};

export const useFilterRow = (
  dataPoints: DataPoint[],
  dataPointValue: string,
  conditionValue: string,
): useFilterRowType => {
  const [dataPoint, setDataPoint] = useState(null);
  const [conditions, setConditions] = useState(null);
  const [condition, setCondition] = useState(null);
  const [InputComponent, setInputComponent] = useState(null);

  useEffect(() => {
    const {
      dataPoint: dataPointOptions,
      conditions: conditionsOptions,
      condition: conditionOptions,
      Input,
    } = getValuesOnChange(dataPoints, dataPointValue, conditionValue);

    setDataPoint(dataPointOptions);
    setConditions(conditionsOptions);
    setCondition(conditionOptions);
    setInputComponent(Input);
  }, [dataPoints, dataPointValue, conditionValue]);

  return {
    dataPoint,
    conditions,
    condition,
    InputComponent,
  };
};
