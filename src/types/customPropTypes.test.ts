import {
  CustomPropTypeError,
  createChainableTypeChecker,
  tuple,
} from './customPropTypes';
import { TupleType } from './customPropTypes.types';

describe('tuple', () => {
  const mockTypeChecker: TupleType = (value, index, componentName) => {
    if (typeof value[index] !== 'number') {
      return new CustomPropTypeError(
        `Expected a number at position ${index} in ${componentName}, but got ${typeof value[
          index
        ]}`,
      );
    }
    return null;
  };

  it('should correctly validate an array', () => {
    const props = { key: [1, 2] };
    const typeChecker = tuple(mockTypeChecker, mockTypeChecker);
    const result = typeChecker(props, 'key', 'TestComponent', 'prop', 'key');
    expect(result).toBeNull();
  });

  it('should return an error when the input array has excess elements', () => {
    const props = { key: [1, 2, 3] };
    const typeChecker = tuple(mockTypeChecker, mockTypeChecker);
    const result = typeChecker(props, 'key', 'TestComponent', 'prop', 'key');
    expect(result).toBeInstanceOf(CustomPropTypeError);
    expect(result.message).toContain(
      'expected an array with a maximum of 2 elements, got array with 3 elements',
    );
  });

  it('should return an error when the input array is empty', () => {
    const props = { key: [] };
    const typeChecker = tuple(mockTypeChecker, mockTypeChecker);
    const result = typeChecker(props, 'key', 'TestComponent', 'prop', 'key');
    expect(result).toBeInstanceOf(CustomPropTypeError);
    expect(result.message).toContain(
      'expected an array with a maximum of 2 elements, got empty array',
    );
  });

  it('should return an error when the input is not an array', () => {
    const props = { key: 'not an array' };
    const typeChecker = tuple(mockTypeChecker);
    const result = typeChecker(props, 'key', 'TestComponent', 'prop', 'key');
    expect(result).toBeInstanceOf(CustomPropTypeError);
    expect(result.message).toContain('expected an array');
  });
});

describe('createChainableTypeChecker', () => {
  const mockValidate = (props, propName) => {
    if (props[propName] === 'invalid') {
      return new CustomPropTypeError('Invalid value');
    }
    return null;
  };

  const typeChecker = createChainableTypeChecker(mockValidate);

  it('should correctly handle optional property', () => {
    const props = { someProp: null };
    const result = typeChecker(props, 'someProp', 'TestComponent');
    expect(result).toBeNull();
  });

  it('should throw error when required property is null', () => {
    const props = { someProp: null };
    const result = typeChecker.isRequired(
      props,
      'someProp',
      'TestComponent',
      'prop',
    );
    expect(result).toBeInstanceOf(CustomPropTypeError);
    expect(result.message).toContain(
      'The prop `someProp` is marked as required in `TestComponent` but its value is `null`.',
    );
  });

  it('should validate property', () => {
    const props = { someProp: 'valid' };
    const result = typeChecker(props, 'someProp', 'TestComponent');
    expect(result).toBeNull();
  });
});
