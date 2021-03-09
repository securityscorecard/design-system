import { useEffect, useState } from 'react';

export const useDebouncedCallback = (
  setMethod: React.Dispatch<React.SetStateAction<string>> | ((any) => void),
  delay: number,
): React.Dispatch<React.SetStateAction<string>> => {
  const [debounced, setDebounced] = useState<
    React.Dispatch<React.SetStateAction<string>> | ((any) => void)
  >(setMethod);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounced(setMethod);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [setMethod, delay]);

  return debounced;
};
