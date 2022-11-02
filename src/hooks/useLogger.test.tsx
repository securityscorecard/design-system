import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { noop } from 'ramda-adjunct';

import { DSProvider } from '../theme/DSProvider';
import { useLogger } from './useLogger';

const log = jest.spyOn(console, 'log').mockImplementation(noop);
const warn = jest.spyOn(console, 'warn').mockImplementation(noop);
const error = jest.spyOn(console, 'error').mockImplementation(noop);
const namespace = 'test namespace';
const message = 'test message';

describe('useLogger', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe('log', () => {
    it('should not call console.log when debug mode is disabled', () => {
      const wrapper = ({ children }) => (
        <DSProvider config={{ debugMode: false }}>{children}</DSProvider>
      );
      const { result } = renderHook(() => useLogger('useLoggerTest'), {
        wrapper,
      });

      result.current.log('log message');

      expect(log).not.toBeCalled();
    });
    it('should call console.log when debug mode is enabled', () => {
      const wrapper = ({ children }) => (
        <DSProvider config={{ debugMode: true }}>{children}</DSProvider>
      );
      const { result } = renderHook(() => useLogger('useLoggerTest'), {
        wrapper,
      });

      result.current.log('log message');

      expect(log).toBeCalled();
    });
    it('should call console.log with correct namespace and message', () => {
      const wrapper = ({ children }) => (
        <DSProvider config={{ debugMode: true }}>{children}</DSProvider>
      );
      const { result } = renderHook(() => useLogger(namespace), {
        wrapper,
      });

      result.current.log(message);

      expect(log).toBeCalledWith(
        `%c[design-system/${namespace}]  `,
        'color: darkturquoise;font-weight: bold',
        message,
      );
    });
  });

  describe('warn', () => {
    it('should not call console.warn when NODE_ENV=production', () => {
      const OLD_NODE_ENV = process.env.NODE_ENV;
      jest.resetModules();
      process.env.NODE_ENV = 'production';
      const wrapper = ({ children }) => (
        <DSProvider config={{ debugMode: false }}>{children}</DSProvider>
      );
      const { result } = renderHook(() => useLogger('useLoggerTest'), {
        wrapper,
      });

      result.current.warn('log message');

      expect(warn).not.toBeCalled();
      process.env.NODE_ENV = OLD_NODE_ENV;
    });

    describe('given NODE_ENV is not production', () => {
      it('should call console.warn', () => {
        const wrapper = ({ children }) => (
          <DSProvider config={{ debugMode: false }}>{children}</DSProvider>
        );
        const { result } = renderHook(() => useLogger('useLoggerTest'), {
          wrapper,
        });

        expect(() => result.current.warn('log message')).not.toThrowError();

        expect(warn).toBeCalled();
      });
      it('should call console.warn with correct namespace and message', () => {
        const wrapper = ({ children }) => (
          <DSProvider config={{ debugMode: true }}>{children}</DSProvider>
        );
        const { result } = renderHook(() => useLogger(namespace), {
          wrapper,
        });

        result.current.warn(message);

        expect(warn).toBeCalledWith(
          `%c[design-system/${namespace}]  `,
          'color: darkorange;font-weight: bold',
          message,
        );
      });
    });
  });

  describe('error', () => {
    describe('given NODE_ENV=production', () => {
      const OLD_NODE_ENV = process.env.NODE_ENV;
      beforeAll(() => {
        jest.resetModules();
        process.env.NODE_ENV = 'production';
      });
      afterAll(() => {
        process.env.NODE_ENV = OLD_NODE_ENV;
      });
      it('should call console.error', () => {
        const wrapper = ({ children }) => (
          <DSProvider config={{ debugMode: false }}>{children}</DSProvider>
        );
        const { result } = renderHook(() => useLogger('useLoggerTest'), {
          wrapper,
        });

        expect(() => result.current.error('log message')).not.toThrowError();

        expect(error).toBeCalled();
      });
      it('should call console.error with correct namespace and message', () => {
        const wrapper = ({ children }) => (
          <DSProvider config={{ debugMode: true }}>{children}</DSProvider>
        );
        const { result } = renderHook(() => useLogger(namespace), {
          wrapper,
        });

        result.current.error(message);

        expect(error).toBeCalledWith(
          `%c[design-system/${namespace}]  `,
          'color: crimson;font-weight: bold',
          message,
        );
      });
    });
    describe('given NODE_ENV is not production', () => {
      it('should throw error', () => {
        const wrapper = ({ children }) => (
          <DSProvider config={{ debugMode: false }}>{children}</DSProvider>
        );
        const { result } = renderHook(() => useLogger('useLoggerTest'), {
          wrapper,
        });

        expect(() => result.current.error('log message')).toThrowError();
        expect(error).not.toBeCalled();
      });
      it('should call console.error with correct namespace and message', () => {
        const wrapper = ({ children }) => (
          <DSProvider config={{ debugMode: false }}>{children}</DSProvider>
        );
        const { result } = renderHook(() => useLogger(namespace), {
          wrapper,
        });

        expect(() => result.current.error(message)).toThrowError(
          `[design-system/${namespace}] ${message}`,
        );
      });
    });
  });
});
