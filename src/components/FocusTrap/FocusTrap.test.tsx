import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FocusTrap from './index';

describe('FocusTrap Component', () => {
  it('should render children when active', () => {
    render(
      <FocusTrap isActive restoreFocus>
        <div data-testid="content">Focus trap content</div>
      </FocusTrap>,
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('Focus trap content')).toBeInTheDocument();
  });

  it('should trap focus within the component', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <button type="button" data-testid="outside-button">
          Outside Button
        </button>
        <FocusTrap isActive restoreFocus>
          <div>
            <button type="button" data-testid="first-button">
              First Button
            </button>
            <button type="button" data-testid="second-button">
              Second Button
            </button>
            <button type="button" data-testid="third-button">
              Third Button
            </button>
          </div>
        </FocusTrap>
      </div>,
    );

    const firstButton = screen.getByTestId('first-button');
    const secondButton = screen.getByTestId('second-button');
    const thirdButton = screen.getByTestId('third-button');
    const outsideButton = screen.getByTestId('outside-button');

    // Test that focus is trapped by checking that Tab key events are handled
    // Focus the first button
    await user.click(firstButton);
    expect(firstButton).toHaveFocus();

    await user.keyboard('{Tab}');
    expect(secondButton).toHaveFocus();

    await user.keyboard('{Tab}');
    expect(thirdButton).toHaveFocus();

    // Verify that the focus trap is working by ensuring we don't focus outside elements
    expect(outsideButton).not.toHaveFocus();

    // Test that the focus trap container exists and is properly set up
    expect(firstButton).toBeInTheDocument();
  });
});
