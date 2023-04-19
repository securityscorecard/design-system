import type { FC, KeyboardEventHandler } from 'react';
import type { SearchProps } from './Search.types';

import { useEffect, useRef, useState } from 'react';

import { Error } from '../../../forms/Message';
import { validatePattern } from '../../../Filters/helpers';
import { Stack } from '../../../layout';
import { SearchBar } from '../../../forms';

const Search: FC<SearchProps> = ({
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
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const clear = () => {
    setIsSearching(false);
    setIsInvalid(false);
    onClear?.();
  };
  const search = async (searchQuery: string) => {
    if (isMounted.current) {
      setIsSearching(true);
    }
    await onSearch(searchQuery);
    if (isMounted.current) {
      setIsSearching(false);
    }
  };
  const handleKeyUp: KeyboardEventHandler = (e) => {
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

export default Search;
