import { getOperatorOptions } from './FilterRow';

describe('getOperatorOptions', () => {
  it('should return the correct operator option when a matching value exists', () => {
    const operatorValue = 'or';
    const operatorOptions = [
      { value: 'or', label: 'or' },
      { value: 'and', label: 'and' },
    ];
    const result = getOperatorOptions(operatorValue, operatorOptions);
    expect(result).toEqual({ value: 'or', label: 'or' });
  });

  it('should return the correct operator option when a matching value exists (CASE INSENSITIVE)', () => {
    const operatorValue = 'OR';
    const operatorOptions = [
      { value: 'or', label: 'or' },
      { value: 'and', label: 'and' },
    ];
    const result = getOperatorOptions(operatorValue, operatorOptions);
    expect(result).toEqual({ value: 'or', label: 'or' });
  });

  it('should return undefined when no matching operator value is found', () => {
    const operatorValue = 'greaterThan';
    const operatorOptions = [
      { value: 'or', label: 'or' },
      { value: 'and', label: 'and' },
    ];
    const result = getOperatorOptions(operatorValue, operatorOptions);
    expect(result).toBeUndefined();
  });

  it('should return undefined when operatorOptions array is empty', () => {
    const operatorValue = 'or';
    const operatorOptions = [];
    const result = getOperatorOptions(operatorValue, operatorOptions);
    expect(result).toBeUndefined();
  });
});
