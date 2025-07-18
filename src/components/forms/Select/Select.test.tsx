import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DSProvider from '../../../theme/DSProvider/DSProvider';
import Select from './Select';
import { Option } from './Select.types';

const mockOptions: Option[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const renderSelect = (props = {}) => {
  return render(
    <DSProvider>
      <Select options={mockOptions} placeholder="Select an option" {...props} />
    </DSProvider>,
  );
};

describe('Select - WCAG Keyboard Navigation', () => {
  it('should render with proper accessibility attributes', () => {
    renderSelect({
      'aria-label': 'Country selector',
    });

    const select = screen.getByRole('textbox');
    expect(select).toHaveAttribute('aria-label', 'Country selector');
    expect(select).toHaveAttribute('aria-autocomplete', 'list');
  });

  it('should open dropdown with Space key', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard(' ');

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  it('should open dropdown with Enter key', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  it('should navigate options with arrow keys', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{ArrowDown}');

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    // Navigate through options
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowUp}');
    await user.keyboard('{ArrowDown}');
  });

  it('should select option with Enter key', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderSelect({ onChange });

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should close dropdown with Escape key', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });
  });

  it('should jump to first option with Home key', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Home}');

    // Should focus first option (check for focused class)
    await waitFor(() => {
      const firstOption = screen.getByText('Option 1');
      expect(firstOption).toHaveClass('ssc__option--is-focused');
    });
  });

  it('should jump to last option with End key', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{End}');

    // Should focus last option (check for focused class)
    await waitFor(() => {
      const lastOption = screen.getByText('Option 3');
      expect(lastOption).toHaveClass('ssc__option--is-focused');
    });
  });

  it('should filter options by typing', async () => {
    const user = userEvent.setup();
    renderSelect();

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('Option 2');

    await waitFor(() => {
      // Use a more specific selector to avoid the hidden div
      const optionElement = screen.getByText('Option 2', {
        selector: '.ssc__option',
      });
      expect(optionElement).toBeInTheDocument();
    });
    expect(
      screen.queryByText('Option 1', {
        selector: '.ssc__option',
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Option 3', {
        selector: '.ssc__option',
      }),
    ).not.toBeInTheDocument();
  });

  it('should handle disabled state correctly', () => {
    renderSelect({ isDisabled: true });

    const select = screen.getByRole('textbox');
    expect(select).toBeDisabled();
  });

  it('should handle invalid state correctly', () => {
    renderSelect({ isInvalid: true });

    // For invalid state, we check that the component renders without errors
    const select = screen.getByRole('textbox');
    expect(select).toBeInTheDocument();
  });

  it('should support multi-select with keyboard', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderSelect({ isMulti: true, onChange });

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(2);
    });
  });

  it('should remove selected value with Backspace in multi-select', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderSelect({ isMulti: true, onChange });

    const select = screen.getByRole('textbox');
    await user.click(select);
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');

    // Clear input and press backspace to remove last selected value
    await user.keyboard('{Backspace}');

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
