import { act, renderHook } from '@testing-library/react-hooks';
import { type MockInstance, vi } from 'vitest';

import { useManagerEvents } from './useManagerEvents';

describe('useManagerEvents', () => {
  let addEventListenerSpy: MockInstance;
  let removeEventListenerSpy: MockInstance;

  beforeEach(() => {
    addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });

  it('should correctly attach event listeners to the window object for each event specified in the `listeners` object', () => {
    const listeners = {
      testEvent: vi.fn(),
    };
    renderHook(() => useManagerEvents(listeners));

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'testEvent',
      expect.any(Function),
    );
  });

  it('should correctly remove event listeners from the window object when the component unmounts', () => {
    const listeners = {
      testEvent: vi.fn(),
    };
    const { unmount } = renderHook(() => useManagerEvents(listeners));

    act(() => {
      unmount();
    });

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'testEvent',
      expect.any(Function),
    );
  });

  it('should not invoke event listeners after the component has unmounted', () => {
    const listeners = {
      testEvent: vi.fn(),
    };
    const { unmount } = renderHook(() => useManagerEvents(listeners));

    act(() => {
      unmount();
    });

    window.dispatchEvent(new CustomEvent('testEvent'));
    expect(listeners.testEvent).not.toHaveBeenCalled();
  });
});
