import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import PageButtons, { calculatePagePositions } from './PageButtons';

describe('calculatePageButtons', () => {
  it('should correctly calculate page positions', () => {
    expect(calculatePagePositions(1, 15, 8)).toMatchObject({
      pages: [2, 3, 4, 5, 6],
      showRightEllipsis: true,
      showLeftEllipsis: false,
    });
    expect(calculatePagePositions(15, 15, 8)).toMatchObject({
      pages: [10, 11, 12, 13, 14],
      showRightEllipsis: false,
      showLeftEllipsis: true,
    });
    expect(calculatePagePositions(8, 15, 6)).toMatchObject({
      pages: [7, 8],
      showRightEllipsis: true,
      showLeftEllipsis: true,
    });
    expect(calculatePagePositions(4, 5, 6)).toMatchObject({
      pages: [2, 3, 4],
      showRightEllipsis: false,
      showLeftEllipsis: false,
    });
  });
});

describe('Pagination/PageButtons', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('should show all page buttons when page count is less than number of positions', () => {
    const pageCount = 3;
    renderWithProviders(
      <PageButtons
        currentPage={1}
        pageCount={pageCount}
        onChange={() => {
          vi.fn();
        }}
        positions={8}
      />,
    );

    expect(screen.getAllByRole('button')).toHaveLength(pageCount);
  });

  it('should show all page buttons when page count is equal to number of positions', () => {
    const pageCount = 8;
    renderWithProviders(
      <PageButtons
        currentPage={1}
        pageCount={pageCount}
        onChange={() => {
          vi.fn();
        }}
        positions={8}
      />,
    );

    expect(screen.getAllByRole('button')).toHaveLength(pageCount);
  });

  it('should call onChange handler with correct parameters', () => {
    const changeMock = vi.fn();
    renderWithProviders(
      <PageButtons
        currentPage={5}
        pageCount={10}
        onChange={changeMock}
        positions={6}
      />,
    );
    const pageButtons = screen.getAllByRole('button');

    userEvent.click(pageButtons[0]);
    expect(changeMock).toHaveBeenCalledWith(1);

    userEvent.click(pageButtons[1]);
    expect(changeMock).toHaveBeenCalledWith(4);

    userEvent.click(pageButtons[3]);
    expect(changeMock).toHaveBeenCalledWith(10);
  });
});
