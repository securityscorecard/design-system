import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import DateRangePicker from './DateRangePicker';

describe('DateRangePicker', () => {
  it('should date range picker popping up when user clicks on the input ', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <DateRangePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={{ startDate: null, endDate: null }}
        onChange={handleChangeDate}
      />,
    );

    await userEvent.click(screen.getByPlaceholderText('Start date'));

    await waitFor(() => {
      expect(screen.getAllByText(/March 2021/i)[0]).toBeInTheDocument();
    });

    await userEvent.click(screen.getByPlaceholderText('End date'));

    await waitFor(() => {
      expect(screen.getAllByText(/March 2021/i)[1]).toBeInTheDocument();
    });
  });

  it('should call onchange when a start date or end date is picked', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <DateRangePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={{ startDate: null, endDate: null }}
        onChange={handleChangeDate}
      />,
    );
    const inputStartDate = screen.getByPlaceholderText('Start date');

    // Opens date picker
    await userEvent.click(inputStartDate);

    // Click on a date
    fireEvent.click(screen.getByLabelText('Choose Friday, March 12th, 2021'));

    expect(handleChangeDate).toHaveBeenCalled();

    const inputEndDate = screen.getByPlaceholderText('End date');

    // Opens date picker
    await userEvent.click(inputEndDate);

    // Click on a date
    fireEvent.click(screen.getByLabelText('Choose Friday, March 12th, 2021'));

    expect(handleChangeDate).toHaveBeenCalled();
  });

  it('should determine selected date by input value', () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <DateRangePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={{
          startDate: new Date('2021/03/12'),
          endDate: new Date('2021/03/20'),
        }}
        onChange={handleChangeDate}
      />,
    );

    expect(screen.getByDisplayValue('12 Mar, 2021')).toBeInTheDocument();
    expect(screen.getByDisplayValue('20 Mar, 2021')).toBeInTheDocument();
  });

  it('should change the default placeholder', () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <DateRangePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={{ startDate: null, endDate: null }}
        placeholder={{
          startDate: 'Custom placeholder startDate',
          endDate: 'Custom placeholder endDate',
        }}
        onChange={handleChangeDate}
      />,
    );

    expect(
      screen.getByPlaceholderText('Custom placeholder startDate'),
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText('Custom placeholder endDate'),
    ).toBeInTheDocument();
  });

  it('should disable the dates outside the range', async () => {
    const handleChangeDate = vi.fn();

    renderWithProviders(
      <DateRangePicker
        maxDate={new Date('2021/03/20')}
        minDate={new Date('2021/03/10')}
        value={{
          startDate: new Date('2021/03/12'),
          endDate: new Date('2021/03/20'),
        }}
        onChange={handleChangeDate}
      />,
    );

    // test a date outside the range

    await userEvent.click(screen.getByPlaceholderText('Start date'));

    await waitFor(() => {
      const disabledButton = screen.getByLabelText(
        'Not available Wednesday, March 3rd, 2021',
      );
      expect(disabledButton).toBeInTheDocument();
    });
  });
});
