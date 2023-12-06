export const useLocalStorageState = <S = Record<string, unknown>>(
  key: string,
) => {
  let persistedState: S;
  try {
    persistedState = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    persistedState = undefined;
  }
  return [
    persistedState,
    (value: S): void => {
      localStorage.setItem(key, JSON.stringify(value));
    },
  ] as const;
};

export default useLocalStorageState;
