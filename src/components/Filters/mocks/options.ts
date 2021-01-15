import { action } from '@storybook/addon-actions';

import { FilterRow } from '../Filters.types';

export const optionsMock: FilterRow[] = [
  {
    id: 'PtpHvE',
    conditionOptions: [
      { value: 'equal to', label: 'is' },
      { value: 'not equal to', label: 'is not' },
      { value: 'is less than', label: 'is less than' },
      { value: 'is at most', label: 'is at most' },
      { value: 'is at least', label: 'is at least' },
      { value: 'contains', label: 'contains' },
      { value: 'does not contain', label: 'does not contain' },
      { value: 'starts with', label: 'starts with' },
      { value: 'ends with', label: 'ends with' },
      { value: 'is empty', label: 'is empty' },
      { value: 'is not empty', label: 'is no empty' },
      { value: 'before', label: 'before' },
      { value: 'after', label: 'after' },
      { value: 'within last', label: 'within last' },
      { value: 'not within last', label: 'not within last' },
      { value: 'within next', label: 'within next' },
      { value: 'not within next', label: 'not within next' },
      { value: 'between', label: 'between' },
    ],
    dataOptions: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    onRemove: action('OnRemove'),
  },
  {
    id: 'au4By4',
    conditionOptions: [
      { value: 'equal to', label: 'is' },
      { value: 'not equal to', label: 'is not' },
      { value: 'contains', label: 'contains' },
      { value: 'does not contain', label: 'does not contain' },
    ],
    dataOptions: [
      { value: 'pistachio', label: 'Pistachio' },
      { value: 'lemon', label: 'Lemon' },
      { value: 'smurf', label: 'Smurf' },
    ],
    isFilterApplied: true,
    onRemove: action('OnRemove'),
  },
];
