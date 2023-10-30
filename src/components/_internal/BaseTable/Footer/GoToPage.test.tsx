import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../../utils/tests/renderWithProviders';
import GoToPage from './GoToPage';

const pageChangeMock = jest.fn();

describe('Datatable/GoToPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should call onPageChange handler with "1" when value is less than or equal to 0', () => {
    renderWithProviders(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    userEvent.type(
      screen.getByRole('spinbutton', { name: /Go to page:/i }),
      '-5{enter}',
    );

    expect(pageChangeMock).toHaveBeenCalledWith(1);
  });
  it('should call onPageChange handler with actual value when value is in page count interval', () => {
    const page = 4;
    renderWithProviders(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    userEvent.type(
      screen.getByRole('spinbutton', { name: /Go to page:/i }),
      `${page}{enter}`,
    );

    expect(pageChangeMock).toHaveBeenCalledWith(page);
  });
  it('should call onPageChange handler with highest page number value when value is greater than page count', () => {
    const pageCount = 8;
    renderWithProviders(
      <GoToPage pageCount={pageCount} onPageChange={pageChangeMock} />,
    );

    userEvent.type(
      screen.getByRole('spinbutton', { name: /Go to page:/i }),
      '15{enter}',
    );

    expect(pageChangeMock).toHaveBeenCalledWith(pageCount);
  });
  it('should display "1" when provided value is less than or equal to 0', () => {
    renderWithProviders(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    const input = screen.getByRole('spinbutton', {
      name: /Go to page:/i,
    }) as HTMLInputElement;
    userEvent.type(input, '-5{enter}');

    expect(input.value).toBe('1');
  });
  it('should display actual provided value when is in page count interval', () => {
    const page = 4;
    renderWithProviders(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    const input = screen.getByRole('spinbutton', {
      name: /Go to page:/i,
    }) as HTMLInputElement;
    userEvent.type(input, `${page}{enter}`);

    expect(input.value).toBe(`${page}`);
  });
  it('should display highest page number value when provided value is greater than page count', () => {
    const pageCount = 8;
    renderWithProviders(
      <GoToPage pageCount={pageCount} onPageChange={pageChangeMock} />,
    );

    const input = screen.getByRole('spinbutton', {
      name: /Go to page:/i,
    }) as HTMLInputElement;
    userEvent.type(input, '15{enter}');

    expect(input.value).toBe(`${pageCount}`);
  });
});
