import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../utils/tests/setup';
import Pagination from './Pagination';

describe('Custom renderItem prop', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it('should render custom item function instead of default one', () => {
    const customRenderItem = vi.fn();
    customRenderItem.mockImplementation((props) => (
      <div key={props.key} data-testid="custom-pagination-item" />
    ));

    setup(
      <Pagination
        currentPage={1}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onPageChange={() => {}}
        pageCount={4}
        renderItem={customRenderItem}
      />,
    );

    const numberOfCustomItems = 6;
    expect(customRenderItem).toBeCalledTimes(numberOfCustomItems);
    expect(screen.getAllByTestId('custom-pagination-item')).toHaveLength(
      numberOfCustomItems,
    );
  });

  it('should pass on click events', () => {
    const customRenderItem = vi.fn();
    const onPageChange = vi.fn();
    customRenderItem.mockImplementation((props) => (
      <button
        type="button"
        key={props.key}
        onClick={props.onClick}
        data-testid="custom-pagination-item"
      >
        nothing
      </button>
    ));

    setup(
      <Pagination
        currentPage={1}
        pageCount={4}
        onPageChange={onPageChange}
        renderItem={customRenderItem}
      />,
    );

    const numberOfCustomItems = 6;
    expect(customRenderItem).toBeCalledTimes(numberOfCustomItems);
    screen.getAllByTestId('custom-pagination-item')[0].click();
    expect(onPageChange).toBeCalledWith(0);
  });
});
