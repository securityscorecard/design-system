import { validateNumber } from './helpers';

describe('validateNumber', () => {
  it('should validate only decimals and integars', () => {
    expect(validateNumber('10')).toBeTruthy();
    expect(validateNumber('10.2')).toBeTruthy();
    expect(validateNumber('stringInput')).toBeFalsy();
  });
  it('should validate range inclusively', () => {
    expect(validateNumber('4', 2, 5)).toBeTruthy();
    expect(validateNumber('2', 2, 5)).toBeTruthy();
    expect(validateNumber('5', 2, 5)).toBeTruthy();
    expect(validateNumber('6', 2, 5)).toBeFalsy();
  });
  it('should validate with missing min or max or both', () => {
    expect(validateNumber('4', 2, null)).toBeTruthy();
    expect(validateNumber('4', null, 5)).toBeTruthy();
    expect(validateNumber('4')).toBeTruthy();
  });
});
