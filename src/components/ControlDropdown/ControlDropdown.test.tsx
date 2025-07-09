/* eslint-disable testing-library/no-node-access */
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../utils/tests/setup';
import ControlDropdown from './ControlDropdown';

describe('ControlDropdown', () => {
  const defaultProps = {
    title: 'Test Dropdown',
    parentRef: { current: document.createElement('div') },
    isOpen: true,
    onClose: vi.fn(),
    onSubmit: vi.fn(),
  };

  it('should render when open', () => {
    setup(<ControlDropdown {...defaultProps}>Content</ControlDropdown>);

    expect(screen.getByText('Test Dropdown')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should not render when closed', () => {
    setup(
      <ControlDropdown {...defaultProps} isOpen={false}>
        Content
      </ControlDropdown>,
    );

    expect(screen.queryByText('Test Dropdown')).not.toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('should not render when parentRef is null', () => {
    setup(
      <ControlDropdown {...defaultProps} parentRef={{ current: null }}>
        Content
      </ControlDropdown>,
    );

    expect(screen.queryByText('Test Dropdown')).not.toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('should trigger onClose when pressing ESC key', async () => {
    const onCloseMock = vi.fn();
    const { user } = setup(
      <ControlDropdown {...defaultProps} onClose={onCloseMock}>
        Content
      </ControlDropdown>,
    );

    await user.keyboard('{Escape}');

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should trigger onClose when pressing ESC key while focused on content inside dropdown', async () => {
    const onCloseMock = vi.fn();
    const { user } = setup(
      <ControlDropdown {...defaultProps} onClose={onCloseMock}>
        <button type="button" data-testid="internal-button">
          Click me
        </button>
      </ControlDropdown>,
    );

    const internalButton = screen.getByTestId('internal-button');
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(internalButton);

    await user.keyboard('{Escape}');

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onSubmit when Apply button is clicked', async () => {
    const onSubmitMock = vi.fn();
    const { user } = setup(
      <ControlDropdown {...defaultProps} onSubmit={onSubmitMock}>
        Content
      </ControlDropdown>,
    );

    const applyButton = screen.getByRole('button', { name: /apply/i });
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(applyButton);

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('should call onClose when Close button is clicked', async () => {
    const onCloseMock = vi.fn();
    const { user } = setup(
      <ControlDropdown {...defaultProps} onClose={onCloseMock}>
        Content
      </ControlDropdown>,
    );

    // Get all close buttons and click the one in the footer (not the header)
    const closeButtons = screen.getAllByRole('button', { name: /close/i });
    // eslint-disable-next-line testing-library/no-node-access
    const footerCloseButton = closeButtons[1]; // The second one is in the footer
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(footerCloseButton);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should call onReset when Reset button is clicked', async () => {
    const onResetMock = vi.fn();
    const { user } = setup(
      <ControlDropdown {...defaultProps} onReset={onResetMock}>
        Content
      </ControlDropdown>,
    );

    const resetButton = screen.getByRole('button', {
      name: /reset to defaults/i,
    });
    // eslint-disable-next-line testing-library/no-node-access
    await user.click(resetButton);

    expect(onResetMock).toHaveBeenCalled();
  });

  it('should not show Reset button when onReset is not provided', () => {
    setup(<ControlDropdown {...defaultProps}>Content</ControlDropdown>);

    expect(
      screen.queryByRole('button', { name: /reset to defaults/i }),
    ).not.toBeInTheDocument();
  });

  it('should use custom labels when provided', () => {
    setup(
      <ControlDropdown
        {...defaultProps}
        submitLabel="Custom Submit"
        closeLabel="Custom Close"
        resetLabel="Custom Reset"
        onReset={vi.fn()}
      >
        Content
      </ControlDropdown>,
    );

    expect(
      screen.getByRole('button', { name: /custom submit/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /custom close/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /custom reset/i }),
    ).toBeInTheDocument();
  });

  it('should trap focus and cycle correctly with Shift+Tab navigation', async () => {
    const { user } = setup(
      <ControlDropdown {...defaultProps}>
        <button type="button" data-testid="content-button">
          Content Button
        </button>
      </ControlDropdown>,
    );

    // Wait for the dropdown to be fully rendered
    await new Promise<void>((resolve) => {
      setTimeout(resolve, 50);
    });

    // Get all focusable elements in the expected tab order
    const closeButton = screen.getByRole('button', { name: /close dropdown/i });
    const contentButton = screen.getByTestId('content-button');
    const closeFooterButton = screen.getAllByRole('button', {
      name: /close/i,
    })[1]; // Footer close button
    const applyButton = screen.getByRole('button', { name: /apply/i });

    // Manually focus the first element to start the test
    closeButton.focus();

    // Test forward tab navigation
    await user.tab();
    expect(contentButton).toHaveFocus();

    await user.tab();
    expect(closeFooterButton).toHaveFocus();

    await user.tab();
    expect(applyButton).toHaveFocus();

    // Test that focus cycles back to first element when tabbing past the last
    await user.tab();
    expect(closeButton).toHaveFocus();

    // Test reverse tab navigation (Shift+Tab)
    await user.tab({ shift: true });
    expect(applyButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(closeFooterButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(contentButton).toHaveFocus();

    await user.tab({ shift: true });
    expect(closeButton).toHaveFocus();

    // Test that focus cycles to last element when Shift+Tabbing past the first
    await user.tab({ shift: true });
    expect(applyButton).toHaveFocus();
  });
});
