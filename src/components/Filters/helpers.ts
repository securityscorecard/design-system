export const validatePattern = (target: HTMLInputElement): boolean | string => {
  return !!target.validity.patternMismatch;
};

export const validate = (
  event: React.ChangeEvent<HTMLInputElement>,
  onValidate: (target: HTMLInputElement) => boolean | string,
  patternMessage: string,
): boolean => {
  const { target } = event;
  const error = onValidate(target);
  target.setCustomValidity(
    target.validity.patternMismatch ? patternMessage : '',
  );
  return !!error;
};
