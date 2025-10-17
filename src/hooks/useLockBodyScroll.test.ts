import { renderHook } from '@testing-library/react';

import { useLockBodyScroll } from './useLockBodyScroll';

describe('useLockBodyScroll', () => {
  beforeEach(() => {
    // Reset body styles and dataset before each test
    document.body.style.overflow = '';
    document.body.dataset.sscdsLocked = undefined;
    document.body.dataset.scrollLocked = undefined;
  });

  afterEach(() => {
    // Clean up after each test
    document.body.style.overflow = '';
    document.body.dataset.sscdsLocked = undefined;
    document.body.dataset.scrollLocked = undefined;
  });

  it('should lock body scroll when enabled is true (default)', () => {
    renderHook(() => useLockBodyScroll());

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    expect(document.body.dataset.sscdsLocked).toBe('true');
  });

  it('should lock body scroll when enabled is explicitly true', () => {
    renderHook(() => useLockBodyScroll({ enabled: true }));

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    expect(document.body.dataset.sscdsLocked).toBe('true');
  });

  it('should NOT lock body scroll when enabled is false', () => {
    // Set initial overflow to test preservation
    document.body.style.overflow = 'auto';
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    renderHook(() => useLockBodyScroll({ enabled: false }));

    // Should preserve original overflow, not set to hidden
    expect(document.body.style.overflow).toBe(originalOverflow);
    expect(document.body.dataset.sscdsLocked).toBe('true'); // Still marks as locked for tracking
  });

  it('should restore original overflow when component unmounts', () => {
    // Set initial body overflow
    document.body.style.overflow = 'scroll';

    const { unmount } = renderHook(() => useLockBodyScroll({ enabled: true }));

    // Should be locked while mounted
    expect(document.body).toHaveStyle({ overflow: 'hidden' });

    // Unmount the hook
    unmount();

    // Should restore original overflow (the hook restores to the original inline style)
    expect(document.body).toHaveStyle({ overflow: 'scroll' });
    expect(document.body.dataset.sscdsLocked).toBeUndefined();
  });

  it('should handle Radix scroll lock detection', () => {
    // Simulate Radix setting scrollLocked
    document.body.dataset.scrollLocked = '1';

    renderHook(() => useLockBodyScroll({ enabled: true }));

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    expect(document.body.dataset.sscdsLocked).toBe('true');
  });

  it('should handle existing inline overflow styles', () => {
    // Set existing inline overflow
    document.body.style.overflow = 'scroll';

    const { unmount } = renderHook(() => useLockBodyScroll({ enabled: true }));

    // Should be locked while mounted
    expect(document.body).toHaveStyle({ overflow: 'hidden' });

    // Unmount and check restoration
    unmount();

    // Should restore to the original inline style
    expect(document.body).toHaveStyle({ overflow: 'scroll' });
  });

  it('should not interfere with multiple instances when already locked', () => {
    // First instance locks the body
    const { unmount: unmount1 } = renderHook(() =>
      useLockBodyScroll({ enabled: true }),
    );

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    expect(document.body.dataset.sscdsLocked).toBe('true');

    // Second instance should not change anything since already locked
    const { unmount: unmount2 } = renderHook(() =>
      useLockBodyScroll({ enabled: true }),
    );

    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    expect(document.body.dataset.sscdsLocked).toBe('true');

    // Unmounting second instance should not unlock
    unmount2();
    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    expect(document.body.dataset.sscdsLocked).toBe('true');

    // Unmounting first instance should unlock
    unmount1();
    expect(document.body).toHaveStyle({ overflow: '' });
    expect(document.body.dataset.sscdsLocked).toBeUndefined();
  });

  it('should handle enabled parameter changes', () => {
    // Test that the hook can be called with different enabled values
    const { unmount: unmount1 } = renderHook(() =>
      useLockBodyScroll({ enabled: true }),
    );
    expect(document.body).toHaveStyle({ overflow: 'hidden' });
    unmount1();

    // Reset and test with enabled: false
    document.body.style.overflow = '';
    document.body.dataset.sscdsLocked = undefined;

    const { unmount: unmount2 } = renderHook(() =>
      useLockBodyScroll({ enabled: false }),
    );
    // When enabled is false, it should preserve the original overflow
    expect(document.body).not.toHaveStyle({ overflow: 'hidden' });
    unmount2();
  });

  describe('WCAG Compliance Tests', () => {
    it('should allow scroll for non-modal components (enabled: false)', () => {
      // Simulate a non-modal drawer that should not lock scroll
      document.body.style.overflow = 'auto';

      renderHook(() => useLockBodyScroll({ enabled: false }));

      // Should not prevent scrolling for accessibility compliance (WCAG 2.1.1, 2.4.3)
      expect(document.body).not.toHaveStyle({ overflow: 'hidden' });
    });

    it('should lock scroll for modal components (enabled: true)', () => {
      // Simulate a modal drawer that should lock scroll
      renderHook(() => useLockBodyScroll({ enabled: true }));

      // Should prevent scrolling for modal behavior (WCAG 2.1.2, 2.4.7)
      expect(document.body).toHaveStyle({ overflow: 'hidden' });
    });
  });
});
