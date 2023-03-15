import React, { useState } from 'react';

import { SearchPropType, SearchProps } from './Search.types';
import { Error } from '../../../forms/Message';
import { validatePattern } from '../../../Filters/helpers';
import { Stack } from '../../../layout';
import { SearchBar } from '../../../forms';

const Search: React.FC<SearchProps> = ({
  onSearch,
  onClear,
  placeholder = 'Search',
  isValidatedOnSubmit = false,
  pattern,
  errorMessage,
  ...props
}) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  const clear = () => {
    setIsSearching(false);
    setIsInvalid(false);
    onClear?.();
  };
  const search = async (searchQuery: string) => {
    setIsSearching(true);
    await onSearch(searchQuery);
    setIsSearching(false);
  };
  const handleKeyUp: React.KeyboardEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    const hasError = validatePattern(target);
    const searchValidQuery = () => {
      if (!hasError) {
        search(target.value);
      }
    };

    if (isValidatedOnSubmit) {
      if (e.key === 'Enter') {
        setIsInvalid(hasError);
        searchValidQuery();
      }
    } else {
      setIsInvalid(hasError);
      if (typingTimeout) {
        window.clearTimeout(typingTimeout);
      }
      setTypingTimeout(
        window.setTimeout(() => {
          searchValidQuery();
        }, 500),
      );
    }
  };

  return (
    <Stack>
      <SearchBar
        isInvalid={isInvalid}
        isSearching={isSearching}
        pattern={pattern}
        placeholder={placeholder}
        onClear={clear}
        onKeyUp={handleKeyUp}
        {...props}
      />
      {isInvalid && <Error>{errorMessage}</Error>}
    </Stack>
  );
};

Search.propTypes = SearchPropType;

export default Search;
