import { action } from '@storybook/addon-actions';

import { FilterSuggestion } from './SearchBar.types';

export const delay = (ms: number): Promise<ReturnType<typeof setTimeout>> =>
  new Promise((res) => setTimeout(res, ms));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockOnSearch = async (query: string): Promise<void> => {
  await delay(1000);
  return null;
};

export const mockSuggestions = (query: string): FilterSuggestion[] => {
  return [
    {
      name: 'suggestion1',
      value: `${query} 1`,
      onClick: action('click-suggestion-1'),
      filter: { field: 'Field 1', condition: 'is' },
    },
    {
      name: 'suggestion2',
      value: `${query} 2`,
      onClick: action('click-suggestion-2'),
      filter: { field: 'Field 2', condition: 'contains' },
    },
    {
      name: 'suggestion3',
      value: `${query} 2`,
      onClick: action('click-suggestion-3'),
      filter: { field: 'Field 3', condition: 'is not' },
    },
  ];
};
