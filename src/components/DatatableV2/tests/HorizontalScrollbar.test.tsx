import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
import HorizontalScrollbar from '../table/HorizontalScrollbar';
import Datatable from '../Datatable';
import { columns, data } from './mocks';

describe('HorizontalScrollbar', () => {
  const mockProps = {
    isVisible: true,
    onScrollLeft: vi.fn(),
    onScrollRight: vi.fn(),
    onScrollToStart: vi.fn(),
    onScrollToEnd: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle focus visibility, arrow keys, and hover interactions', async () => {
    const { user } = setup(<HorizontalScrollbar {...mockProps} />);

    // Get the scrollbar button
    const scrollbar = screen.getByRole('button', {
      name: /Horizontal scrollbar/i,
    });

    // Test focus visibility - element should be focusable
    expect(scrollbar).toHaveAttribute('tabIndex', '0');
    expect(scrollbar).toHaveAttribute('aria-controls', 'datatable-content');

    // Test arrow key navigation - focus without clicking to avoid triggering click handler
    scrollbar.focus();
    expect(scrollbar).toHaveFocus();

    // Test ArrowLeft key
    await user.keyboard('{ArrowLeft}');
    expect(mockProps.onScrollLeft).toHaveBeenCalledTimes(1);

    // Test ArrowRight key
    await user.keyboard('{ArrowRight}');
    expect(mockProps.onScrollRight).toHaveBeenCalledTimes(1);

    // Test Home key
    await user.keyboard('{Home}');
    expect(mockProps.onScrollToStart).toHaveBeenCalledTimes(1);

    // Test End key
    await user.keyboard('{End}');
    expect(mockProps.onScrollToEnd).toHaveBeenCalledTimes(1);

    // Test PageUp key (should call onScrollLeft 5 times)
    await user.keyboard('{PageUp}');
    expect(mockProps.onScrollLeft).toHaveBeenCalledTimes(6); // 1 from ArrowLeft + 5 from PageUp

    // Test PageDown key (should call onScrollRight 5 times)
    await user.keyboard('{PageDown}');
    expect(mockProps.onScrollRight).toHaveBeenCalledTimes(6); // 1 from ArrowRight + 5 from PageDown

    // Test hover behavior - in the real component, hover makes it nearly invisible
    // This tests that the hover event can be dispatched without errors
    const hoverEvent = new MouseEvent('mouseenter', {
      bubbles: true,
      cancelable: true,
    });
    scrollbar.dispatchEvent(hoverEvent);
    // Note: In the real Datatable component, hover makes the scrollbar nearly invisible
    // (opacity: 0.1; display: none), but in isolation it remains visible
    expect(scrollbar).toBeVisible();
  });

  it('should not render when isVisible is false', () => {
    setup(<HorizontalScrollbar {...mockProps} isVisible={false} />);

    expect(
      screen.queryByRole('button', {
        name: /Horizontal scrollbar/i,
      }),
    ).not.toBeInTheDocument();
  });

  it('should work correctly within full Datatable component', async () => {
    const { user } = setup(
      <Datatable data={data} columns={columns} id="test" />,
    );

    const scrollbar = screen.queryByRole('button', {
      name: /Horizontal scrollbar/i,
    });

    scrollbar.focus();
    expect(scrollbar).toHaveFocus();
    expect(scrollbar).toHaveClass('ds-table-horizontal-scrollbar');

    await user.hover(scrollbar);

    // In the TableContainer context, the scrollbar should still be in the DOM
    // but the CSS will make it nearly invisible (opacity: 0.1; display: none)
    expect(scrollbar).toBeInTheDocument();
    expect(scrollbar).toHaveClass('ds-table-horizontal-scrollbar');
  });
});
