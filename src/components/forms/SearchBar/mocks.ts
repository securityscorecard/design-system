import { SearchSuggestionWithFilter } from './SearchBar.types';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const createMockOnSearch = (
  onClick: () => void,
): ((query: string) => Promise<SearchSuggestionWithFilter[]>) => {
  const mockOnSearch = async (
    query: string,
  ): Promise<SearchSuggestionWithFilter[]> => {
    await delay(1000);
    return [
      {
        name: `${query} suggestion 1`,
        value: `${query} suggestion 1`,
        filter: { field: 'Domain', condition: 'is' },
        onClick,
      },
      {
        name: `${query} suggestion 2`,
        value: `${query} suggestion 2`,
        filter: { field: 'Domain', condition: 'is' },
        onClick,
      },
      {
        name: `${query} suggestion 3`,
        value: `${query} suggestion 3`,
        filter: { field: 'Domain', condition: 'contains' },
        onClick,
      },
    ];
  };
  return mockOnSearch;
};
