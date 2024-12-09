import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../../utils/tests/setup';
import GoToPage from './GoToPage';

const pageChangeMock = vi.fn();

describe('Datatable/GoToPage', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('should call onPageChange handler with "1" when value is less than or equal to 0', async () => {
    const { user } = setup(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    await user.click(screen.getByRole('spinbutton', { name: /Go to page:/i }));
    await user.keyboard('-5{Enter}');

    expect(pageChangeMock).toHaveBeenCalledWith(1);
  });
  it('should call onPageChange handler with actual value when value is in page count interval', async () => {
    const page = 4;
    const { user } = setup(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    await user.click(screen.getByRole('spinbutton', { name: /Go to page:/i }));
    await user.keyboard(`${page}{Enter}`);

    expect(pageChangeMock).toHaveBeenCalledWith(page);
  });
  it('should call onPageChange handler with highest page number value when value is greater than page count', async () => {
    const pageCount = 8;
    const { user } = setup(
      <GoToPage pageCount={pageCount} onPageChange={pageChangeMock} />,
    );

    await user.click(screen.getByRole('spinbutton', { name: /Go to page:/i }));
    await user.keyboard('15{Enter}');

    expect(pageChangeMock).toHaveBeenCalledWith(pageCount);
  });
  it('should display "1" when provided value is less than or equal to 0', async () => {
    const { user } = setup(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    const input = screen.getByRole('spinbutton', {
      name: /Go to page:/i,
    }) as HTMLInputElement;
    await user.click(input);
    await user.keyboard('-5{Enter}');

    expect(input.value).toBe('1');
  });
  it('should display actual provided value when is in page count interval', async () => {
    const page = 4;
    const { user } = setup(
      <GoToPage pageCount={8} onPageChange={pageChangeMock} />,
    );

    const input = screen.getByRole('spinbutton', {
      name: /Go to page:/i,
    }) as HTMLInputElement;
    await user.click(input);
    await user.keyboard(`${page}{Enter}`);

    expect(input.value).toBe(`${page}`);
  });
  it('should display highest page number value when provided value is greater than page count', async () => {
    const pageCount = 8;
    const { user } = setup(
      <GoToPage pageCount={pageCount} onPageChange={pageChangeMock} />,
    );

    const input = screen.getByRole('spinbutton', {
      name: /Go to page:/i,
    }) as HTMLInputElement;
    await user.click(input);
    await user.keyboard('15{Enter}');

    expect(input.value).toBe(`${pageCount}`);
  });
});
