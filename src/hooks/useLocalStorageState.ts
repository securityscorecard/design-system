export const useLocalStorageState = (key) => {
  let persistedState;
  try {
    persistedState = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    persistedState = undefined;
  }
  return [
    persistedState,
    (value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
  ];
};

export default useLocalStorageState;
