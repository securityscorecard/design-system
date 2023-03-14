import { FilterSuggestion } from './SearchBar.types';
export declare const delay: (ms: number) => Promise<ReturnType<typeof setTimeout>>;
export declare const mockOnSearch: (query: string) => Promise<void>;
export declare const mockSuggestions: (query: string) => FilterSuggestion[];
