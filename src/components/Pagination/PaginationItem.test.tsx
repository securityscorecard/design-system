import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PaginationItem } from './PaginationItem';
import { renderWithProviders } from '../../utils/tests/renderWithProviders';

describe('Pagination/PaginationItem', () => {
  it('should not call onClick handler for current page', async () => {
    const clickMock = jest.fn();
    renderWithProviders(
      <PaginationItem onClick={clickMock} isCurrent>
        1
      </PaginationItem>,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(clickMock).not.toHaveBeenCalled();
  });
});
