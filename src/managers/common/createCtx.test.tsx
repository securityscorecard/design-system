import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { createCtx } from './createCtx';

describe('createCtx', () => {
  it('should return correct values', () => {
    const namespace = 'testNamespace';
    const errorMessage = 'Context not provided';
    const { useContext, Provider } = createCtx<string>(namespace, errorMessage);

    expect(useContext).toBeDefined();
    expect(Provider).toBeDefined();
  });

  it('should output error when value is undefined', () => {
    const namespace = 'testNamespace';
    const errorMessage = 'Context not provided';
    const { useContext, Provider } = createCtx<string>(namespace, errorMessage);

    const loggerSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => jest.fn());
    const wrapper = ({ children }) => (
      <Provider value={undefined}>{children}</Provider>
    );
    renderHook(() => useContext(), { wrapper });

    expect(loggerSpy).toHaveBeenCalledWith(
      `%c[design-system/${namespace}]  `,
      'color: crimson;font-weight: bold',
      errorMessage,
    );
    loggerSpy.mockRestore();
  });

  it('should return context value', () => {
    const namespace = 'testNamespace';
    const testValue = 'testValue';
    const { useContext, Provider } = createCtx<string>(
      namespace,
      'Context not provided',
    );

    const wrapper = ({ children }) => (
      <Provider value={testValue}>{children}</Provider>
    );
    const { result } = renderHook(() => useContext(), { wrapper });

    expect(result.current).toBe(testValue);
  });
});
