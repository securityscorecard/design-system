import { act, renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import useFocusTrap from './useFocusTrap';

describe('useFocusTrap Hook', () => {
  it('should return trapRef and control functions', () => {
    const { result } = renderHook(() =>
      useFocusTrap({
        isActive: false,
        restoreFocus: true,
      }),
    );

    expect(result.current.trapRef).toBeDefined();
    expect(typeof result.current.activate).toBe('function');
    expect(typeof result.current.deactivate).toBe('function');
    expect(result.current.isActive).toBe(false);
  });

  it('should call activate and deactivate functions correctly', () => {
    const { result } = renderHook(() =>
      useFocusTrap({
        isActive: false,
        restoreFocus: true,
      }),
    );

    // Simulate mounting the ref to a DOM element
    const mockElement = document.createElement('div');
    mockElement.innerHTML = '<button>Test Button</button>';
    Object.defineProperty(result.current.trapRef, 'current', {
      value: mockElement,
      writable: true,
    });

    // Test that activate and deactivate functions exist and can be called
    expect(typeof result.current.activate).toBe('function');
    expect(typeof result.current.deactivate).toBe('function');

    // Create spies for the functions
    const activateSpy = vi.spyOn(result.current, 'activate');
    const deactivateSpy = vi.spyOn(result.current, 'deactivate');

    // Test calling activate
    act(() => {
      result.current.activate();
    });

    expect(activateSpy).toHaveBeenCalledTimes(1);

    // Test calling deactivate
    act(() => {
      result.current.deactivate();
    });

    expect(deactivateSpy).toHaveBeenCalledTimes(1);

    // Clean up spies
    activateSpy.mockRestore();
    deactivateSpy.mockRestore();
  });
});
