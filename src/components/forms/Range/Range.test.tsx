import { fireEvent, render, screen } from '@testing-library/react';

import Range from './Range';

describe('Range', () => {
  it('should calculate correct default value if not provided', () => {
    render(<Range min={10} max={50} />);
    expect(screen.getByRole('slider')).toHaveValue('30'); // Default value should be mean of min and max (10 + 50) / 2
  });

  it('should change value', async () => {
    render(<Range min={0} max={100} />);
    const input = screen.getByRole('slider');
    fireEvent.change(input, { target: { value: 47 } });
    expect(input).toHaveValue('47');
  });
});
