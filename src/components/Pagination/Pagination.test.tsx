import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import Pagination from './Pagination';

describe('Custom renderItem prop', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should render custom item function instead of default one', () => {
    const customRenderItem = jest.fn();
    customRenderItem.mockImplementation((props) => (
      <div key={props.key} data-testid="custom-pagination-item" />
    ));

    renderWithProviders(
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
    const customRenderItem = jest.fn();
    const onPageChange = jest.fn();
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

    renderWithProviders(
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
