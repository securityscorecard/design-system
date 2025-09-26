import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';

import { useFocusTrap } from './useFocusTrap';

describe('useFocusTrap Hook', () => {
  beforeEach(() => {
    // Mock document methods
    vi.spyOn(document, 'addEventListener').mockImplementation(() => {});
    vi.spyOn(document, 'removeEventListener').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should not set up event listeners when element is null or disabled', () => {
    const mockElement = null;
    const onClickOut = vi.fn();

    renderHook(() =>
      useFocusTrap({
        el: mockElement as HTMLElement,
        enabled: false,
        onClickOut,
      }),
    );

    // Check that keydown event listener was not added
    expect(document.addEventListener).not.toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
      expect.any(Object),
    );
  });

  it('should set up event listeners when element is provided and enabled', () => {
    const mockElement = document.createElement('div');
    const onClickOut = vi.fn();

    renderHook(() =>
      useFocusTrap({
        el: mockElement,
        enabled: true,
        onClickOut,
      }),
    );

    expect(document.addEventListener).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
      { capture: false },
    );
  });

  it('should handle tab navigation and escape key functionality', () => {
    const mockElement = document.createElement('div');
    const onClickOut = vi.fn();

    // Create focusable elements inside the container
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const input = document.createElement('input');
    button1.textContent = 'Button 1';
    button2.textContent = 'Button 2';

    mockElement.appendChild(button1);
    mockElement.appendChild(input);
    mockElement.appendChild(button2);

    // Mock focus methods
    const focusSpy1 = vi.spyOn(button1, 'focus').mockImplementation(() => {});
    const focusSpy2 = vi.spyOn(button2, 'focus').mockImplementation(() => {});

    // Mock document.activeElement
    Object.defineProperty(document, 'activeElement', {
      value: button1,
      writable: true,
    });

    let keydownHandler: (e: KeyboardEvent) => void;

    // Capture the keydown handler
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addEventListenerSpy = document.addEventListener as any;
    addEventListenerSpy.mockImplementation(
      (event: string, handler: EventListenerOrEventListenerObject) => {
        if (event === 'keydown') {
          keydownHandler = handler as (e: KeyboardEvent) => void;
        }
      },
    );

    renderHook(() =>
      useFocusTrap({
        el: mockElement,
        enabled: true,
        onClickOut,
      }),
    );

    // Test Escape key functionality (only works inside React Aria modal)
    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    const preventDefaultSpy = vi.spyOn(escapeEvent, 'preventDefault');
    const stopPropagationSpy = vi.spyOn(escapeEvent, 'stopPropagation');

    keydownHandler(escapeEvent);

    // Escape key should not trigger onClickOut unless inside React Aria modal
    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(stopPropagationSpy).not.toHaveBeenCalled();
    expect(onClickOut).not.toHaveBeenCalled();

    // Test Tab key navigation - forward tab from last element
    Object.defineProperty(document, 'activeElement', {
      value: button2,
      writable: true,
    });

    const tabEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    const tabPreventDefaultSpy = vi.spyOn(tabEvent, 'preventDefault');

    keydownHandler!(tabEvent);

    expect(tabPreventDefaultSpy).toHaveBeenCalled();
    expect(focusSpy1).toHaveBeenCalled(); // Should focus first element

    // Test Shift+Tab key navigation - reverse tab from first element
    Object.defineProperty(document, 'activeElement', {
      value: button1,
      writable: true,
    });

    const shiftTabEvent = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
    });
    const shiftTabPreventDefaultSpy = vi.spyOn(shiftTabEvent, 'preventDefault');

    keydownHandler!(shiftTabEvent);

    expect(shiftTabPreventDefaultSpy).toHaveBeenCalled();
    expect(focusSpy2).toHaveBeenCalled(); // Should focus last element

    // Clean up
    vi.restoreAllMocks();
  });
});
