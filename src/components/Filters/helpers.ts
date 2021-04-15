export const validateDefault = (target: HTMLInputElement): boolean | string => {
  return !!target.validity.patternMismatch;
};

export const onValidate = (
  event: React.ChangeEvent<HTMLInputElement>,
  validate: (target: HTMLInputElement) => boolean | string,
  patternMessage: string,
): boolean => {
  const { target } = event;
  const error = validate(target);
  target.setCustomValidity(
    target.validity.patternMismatch ? patternMessage : '',
  );
  return !!error;
};
