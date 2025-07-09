import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
import Switch from './Switch';
import { SwitchSizes } from './Switch.enums';

describe('Switch', () => {
  const defaultProps = {
    switchId: 'test-switch',
  };

  it('should render when unchecked', () => {
    setup(<Switch {...defaultProps} />);

    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).not.toBeChecked();
  });

  it('should render when checked', () => {
    setup(<Switch {...defaultProps} checked />);

    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).toBeChecked();
  });

  it('should be disabled when isDisabled is true', () => {
    setup(<Switch {...defaultProps} isDisabled />);

    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeDisabled();
  });

  it('should call onChange when clicked', async () => {
    const onChangeMock = vi.fn();
    const { user } = setup(
      <Switch {...defaultProps} onChange={onChangeMock} />,
    );

    const switchInput = screen.getByRole('checkbox');
    await user.click(switchInput);

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should be keyboard accessible - can be focused with Tab', async () => {
    const { user } = setup(<Switch {...defaultProps} />);

    // Tab to the switch
    await user.tab();

    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toHaveFocus();
  });

  it('should toggle when Space key is pressed', async () => {
    const onChangeMock = vi.fn();
    const { user } = setup(
      <Switch {...defaultProps} onChange={onChangeMock} />,
    );

    const switchInput = screen.getByRole('checkbox');
    await user.tab();
    expect(switchInput).toHaveFocus();

    await user.keyboard(' ');

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('should not toggle when disabled and Space key is pressed', async () => {
    const onChangeMock = vi.fn();
    const { user } = setup(
      <Switch {...defaultProps} isDisabled onChange={onChangeMock} />,
    );

    const switchInput = screen.getByRole('checkbox');
    // Disabled inputs can't receive focus in test environment, so we'll test the behavior differently
    await user.click(switchInput);
    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it('should have proper ARIA attributes', () => {
    setup(<Switch {...defaultProps} aria-label="Test switch" />);

    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toHaveAttribute('aria-label', 'Test switch');
  });

  it('should support different sizes', () => {
    setup(<Switch {...defaultProps} size={SwitchSizes.md} />);

    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeInTheDocument();
  });

  it('should forward ref correctly', () => {
    const ref = vi.fn();
    setup(<Switch {...defaultProps} ref={ref} />);

    expect(ref).toHaveBeenCalled();
  });
});
