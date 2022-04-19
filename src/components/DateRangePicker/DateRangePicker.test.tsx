import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import DateRangePicker from './DateRangePicker';

const checkInputClick = (
  inputStartDate: HTMLElement,
  handleChangeDate: jest.Mock,
) => {
  userEvent.click(inputStartDate);

  // Click on a date
  fireEvent.click(screen.getByLabelText('Choose Friday, March 12th, 2021'));

  expect(handleChangeDate).toHaveBeenCalled();
};

describe('DateRangePicker', () => {
  it('should date range picker popping up when user clicks on the input ', () => {
    const handleChangeDate = jest.fn();

    renderWithProviders(
      <DateRangePicker
        maxDate={new Date('2021/03/28')}
        minDate={new Date('2021/03/01')}
        value={{ startDate: null, endDate: null }}
        onChange={handleChangeDate}
      />,
    );

    userEvent.click(screen.getByPlaceholderText('Start date'));

    expect(screen.getAllByText(/March 2021/i)[0]).toBeInTheDocument();

    userEvent.click(screen.getByPlaceholderText('End date'));

    expect(screen.getAllByText(/March 2021/i)[1]).toBeInTheDocument();
  });

  it('should call onchange when a start date or end date is picked', () => {
    const handleChangeDate = jest.fn();

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
    checkInputClick(inputStartDate, handleChangeDate);

    const inputEndDate = screen.getByPlaceholderText('End date');

    // Opens date picker
    checkInputClick(inputEndDate, handleChangeDate);
  });

  it('should determine selected date by input value', () => {
    const handleChangeDate = jest.fn();

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
    const handleChangeDate = jest.fn();

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

  it('should disable the dates outside the range', () => {
    const handleChangeDate = jest.fn();

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

    userEvent.click(screen.getByPlaceholderText('Start date'));

    const disabledButton = screen.getByLabelText(
      'Not available Wednesday, March 3rd, 2021',
    );
    expect(disabledButton).toBeInTheDocument();
  });
});
