import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { PaginationItem } from './PaginationItem';
import { setup } from '../../utils/tests/setup';

describe('Pagination/PaginationItem', () => {
  it('should not call onClick handler for current page', async () => {
    const clickMock = vi.fn();
    const { user } = setup(
      <PaginationItem onClick={clickMock} isCurrent>
        1
      </PaginationItem>,
    );

    await user.click(screen.getByRole('button'));
    expect(clickMock).not.toHaveBeenCalled();
  });
});
