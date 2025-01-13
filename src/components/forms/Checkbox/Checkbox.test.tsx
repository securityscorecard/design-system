import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('should set input indeterminate state when isIndeterminate is true', () => {
    setup(
      <Checkbox
        checkboxId="test-checkbox"
        name="test"
        isIndeterminate
        label="Test Checkbox"
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBePartiallyChecked();
  });

  it('should update indeterminate state when prop changes', () => {
    const { rerender } = setup(
      <Checkbox
        checkboxId="test-checkbox"
        name="test"
        isIndeterminate={false}
        label="Test Checkbox"
      />,
    );

    expect(screen.getByRole('checkbox')).not.toBePartiallyChecked();

    rerender(
      <Checkbox
        checkboxId="test-checkbox"
        name="test"
        isIndeterminate
        label="Test Checkbox"
      />,
    );

    expect(screen.getByRole('checkbox')).toBePartiallyChecked();
  });

  it('should handle ref correctly with indeterminate state', () => {
    const ref = { current: null };
    setup(
      <Checkbox
        ref={ref}
        checkboxId="test-checkbox"
        name="test"
        isIndeterminate
        label="Test Checkbox"
      />,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current as HTMLInputElement).toBePartiallyChecked();
  });

  it('should update indeterminate state after user interactions', async () => {
    const onChange = vi.fn();
    const { user } = setup(
      <Checkbox
        checkboxId="test-checkbox"
        name="test"
        isIndeterminate
        label="Test Checkbox"
        onChange={onChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBePartiallyChecked();

    await user.click(checkbox);
    expect(onChange).toHaveBeenCalled();
    expect(checkbox).not.toBePartiallyChecked();
  });

  it('should handle both checked and indeterminate states', () => {
    setup(
      <Checkbox
        checkboxId="test-checkbox"
        name="test"
        checked
        onChange={vi.fn()}
        isIndeterminate
        label="Test Checkbox"
      />,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    expect(checkbox).toBePartiallyChecked();
  });
});
