import { patterns } from '../enums';

export const validateDomains = (target: HTMLInputElement): boolean => {
  const regex = new RegExp(patterns.domain.pattern, 'g');
  return !target.value.match(regex);
};
