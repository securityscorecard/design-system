import { gt, length } from 'ramda';
import { isNotArray } from 'ramda-adjunct';

import { TupleType, TypeChecker } from './customPropTypes.types';

// Taken from https://stackoverflow.com/a/51165301/2216488
function CustomPropTypeError(message: string) {
  // eslint-disable-next-line fp/no-this
  this.message = message;
  // eslint-disable-next-line fp/no-this
  this.stack = '';
}
CustomPropTypeError.prototype = Error.prototype;

function createChainableTypeChecker(validate) {
  function checkType(
    isRequired,
    props,
    propName,
    componentName,
    location,
    propFullName,
    secret,
  ) {
    const componentNameValid = componentName || 'ANONYMOUS';
    const propNameValid = propFullName || propName;

    if (isRequired) {
      if (props[propName] === null) {
        return new CustomPropTypeError(
          `The ${location} \`${propNameValid}\` is marked as required in \`${componentNameValid}\` but its value is \`null\`.`,
        );
      }
      return new CustomPropTypeError(
        `The ${location} \`${propNameValid}\` is marked as required in \`${componentNameValid}\` but its value is \`undefined\`.`,
      );
    }

    return validate(
      props,
      propName,
      componentNameValid,
      location,
      propNameValid,
      secret,
    );
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

export function tuple(...types: TupleType[]): TypeChecker {
  return createChainableTypeChecker(
    // Validate fn
    (props, propName, componentName, location, propFullName, secret) => {
      const value = props[propName];
      const locationValid = location || 'prop';
      const propNameValid = propFullName || propName;

      if (isNotArray(value)) {
        return new CustomPropTypeError(
          `Invalid ${locationValid} \`${propNameValid}\` supplied to \`${componentName}\`, expected ${types.length}-element array`,
        );
      }
      if (gt(length(value), length(types))) {
        return new CustomPropTypeError(
          `Invalid ${locationValid} \`${propNameValid}\` supplied to \`${componentName}\`, expected up to ${types.length}-element array, got array of length ${value.length}`,
        );
      }
      for (let i = 0; i < value.length; i += 1) {
        const error = types[i](
          value,
          i,
          componentName,
          'element',
          `${propFullName}[${i}]`,
          secret,
        );
        if (error) {
          return error;
        }
      }

      return null;
    },
  );
}
