import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import SingleDatePicker from './SingleDatePicker';

describe('SingleDatePicker', () => {
  it('should date picker popping up when user clicks on the input ', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <SingleDatePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={null}
        onChange={handleChangeDate}
      />,
    );

    await userEvent.click(screen.getByPlaceholderText('Enter date…'));

    await waitFor(() => {
      expect(screen.getByText(/March 2021/i)).toBeInTheDocument();
    });
  });

  it('should call onchange when a date is picked', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <SingleDatePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={null}
        onChange={handleChangeDate}
      />,
    );
    const input = screen.getByPlaceholderText('Enter date…');

    // Opens date picker
    await userEvent.click(input);

    // Click on a date
    fireEvent.click(screen.getByLabelText('Choose Friday, March 12th, 2021'));

    await waitFor(() => {
      expect(handleChangeDate).toHaveBeenCalled();
    });
  });

  it('should determine selected date by input value', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <SingleDatePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={new Date('2021/03/12')}
        onChange={handleChangeDate}
      />,
    );

    await waitFor(() => {
      expect(screen.getByDisplayValue('12 Mar, 2021')).toBeInTheDocument();
    });
  });

  it('should change the default placeholder', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <SingleDatePicker
        value={null}
        placeholder="Custom placeholder"
        onChange={handleChangeDate}
      />,
    );

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText('Custom placeholder'),
      ).toBeInTheDocument();
    });
  });
});
