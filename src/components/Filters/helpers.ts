export const validatePattern = (target: HTMLInputElement): boolean => {
  return !!target.validity.patternMismatch;
};

export const validateNumber = (
  value: string,
  min?: number,
  max?: number,
): boolean => {
  const n = parseFloat(value);
  const isNumber = Number(n) === n;
  const aboveMin = !Number(min) || n >= min;
  const belowMax = !Number(max) || n <= max;

  return isNumber && aboveMin && belowMax;
};
