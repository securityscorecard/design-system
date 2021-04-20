import { patterns } from '../enums';

export const validateDomains = (target: HTMLInputElement): boolean => {
  const regex = new RegExp(patterns.domain.pattern, 'g');
  return !regex.test(target.value);
};

export const validateIPs = (target: HTMLInputElement): boolean => {
  const regex = new RegExp(patterns.ip.pattern, 'g');
  return !target.value.match(regex);
};
