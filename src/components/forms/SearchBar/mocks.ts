import { action } from '@storybook/addon-actions';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockOnSearch = async (query: string): Promise<void> => {
  await delay(1000);
  return null;
};

export const mockSuggestions = [
  {
    name: 'suggestion1',
    value: 'suggestion 1',
    onClick: action('click-suggestion-1'),
    filter: { field: 'Field 1', condition: 'is' },
  },
  {
    name: 'suggestion2',
    value: 'suggestion 2',
    onClick: action('click-suggestion-2'),
    filter: { field: 'Field 2', condition: 'contains' },
  },
  {
    name: 'suggestion3',
    value: 'suggestion 3',
    onClick: action('click-suggestion-3'),
    filter: { field: 'Field 3', condition: 'is not' },
  },
];
