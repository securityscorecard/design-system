import { action } from '@storybook/addon-actions';

import { DataPoint, FilterRow } from '../Filters.types';
import { InputTypes } from '../Filters.enums';

export const dataPointsMock: DataPoint[] = [
  {
    option: { value: 'pistachio', label: 'Pistachio' },
    defaultCondition: { value: 'equal to', label: 'is' },
  },
  {
    option: { value: 'lemon', label: 'Lemon' },
    defaultCondition: { value: 'not equal to', label: 'is not' },
  },
  {
    option: { value: 'smurf', label: 'Smurf' },
    defaultCondition: { value: 'is less than', label: 'is less than' },
  },
];

export const rowsMock: FilterRow[] = [
  {
    id: 'PtpHvE',
    conditions: [
      {
        option: { value: 'equal to', label: 'is' },
        inputType: InputTypes.string,
      },
      {
        option: { value: 'not equal to', label: 'is not' },
        inputType: InputTypes.string,
      },
      {
        option: { value: 'is less than', label: 'is less than' },
        inputType: InputTypes.string,
      },
    ],
    onRemove: action('OnRemove'),
    onAdd: action('OnAdd'),
  },
  {
    id: 'au4By4',
    conditions: [
      {
        option: { value: 'equal to', label: 'is' },
        inputType: InputTypes.string,
      },
      {
        option: { value: 'not equal to', label: 'is not' },
        inputType: InputTypes.string,
      },
      {
        option: { value: 'is less than', label: 'is less than' },
        inputType: InputTypes.string,
      },
      {
        option: { value: 'contains', label: 'contains' },
        inputType: InputTypes.string,
      },
      {
        option: { value: 'does not contain', label: 'does not contain' },
        inputType: InputTypes.string,
      },
    ],
    onRemove: action('OnRemove'),
    isFilterApplied: true,
    onAdd: action('OnAdd'),
  },
];
