export const validatePattern = (target: HTMLInputElement): boolean => {
  return !!target.validity.patternMismatch;
};
