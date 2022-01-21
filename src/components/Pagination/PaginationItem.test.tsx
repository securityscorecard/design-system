import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PaginationItem } from './PaginationItem';
import { renderWithProviders } from '../../utils/tests/renderWithProviders';

describe('Pagination/PaginationItem', () => {
  it('should not call onClick handler for current page', () => {
    const clickMock = jest.fn();
    renderWithProviders(<PaginationItem onClick={clickMock} isCurrent />);

    userEvent.click(screen.getByRole('button'));
    expect(clickMock).not.toHaveBeenCalled();
  });
});
