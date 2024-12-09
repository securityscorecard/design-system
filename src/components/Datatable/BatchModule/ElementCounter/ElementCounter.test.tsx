import { act, screen } from '@testing-library/react';

import ElementCounter, { getCounterContent } from './ElementCounter';
import { setup } from '../../../../utils/tests/setup';
import { DatatableStore, datatableInitialState } from '../../Datatable.store';

describe('getCounterContent', () => {
  it('should return No Data when "totalLength" is 0', () => {
    setup(getCounterContent(0));
    expect(screen.getByTestId('counter-content')).toHaveTextContent('No data');
  });
  it('should return No Data when "totalLength" is 0 and "selectedLength" is greater than 0', () => {
    setup(getCounterContent(0, 500));
    expect(screen.getByTestId('counter-content')).toHaveTextContent('No data');
  });

  it('should return correct count when "totalLength" is greater than 0', () => {
    setup(getCounterContent(1000));
    expect(screen.getByTestId('counter-content')).toHaveTextContent('1K');
  });

  it('should return correct count when "totalLength" and "selectedLength" are greater than 0', () => {
    setup(getCounterContent(1000, 500));
    expect(screen.getByTestId('counter-content')).toHaveTextContent(
      '500 of 1K selected',
    );
  });
});

describe('Datatable/ElementCounter', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });

  it('should show Select None button when there are selected rows', () => {
    setup(
      <ElementCounter dataSize={1000} hasOnlyPerPageSelection hasSelection />,
    );

    expect(
      screen.queryByRole('button', { name: /Select None/i }),
    ).not.toBeInTheDocument();

    act(() =>
      DatatableStore.update((s) => {
        s.selectedIds = ['a', 'b', 'c'];
      }),
    );

    expect(
      screen.getByRole('button', { name: /Select None/i }),
    ).toBeInTheDocument();
  });

  describe('DatatableStore actions', () => {
    describe('given selection dropdown is visible', () => {
      it('should set "hasExclusiveSelection" to "true" on Select All click', async () => {
        const { user } = setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        await user.click(screen.getByTestId('selection-dropdown'));
        await user.click(screen.getByRole('button', { name: /Select All/i }));

        expect(DatatableStore.getRawState().hasExclusiveSelection).toBe(true);
      });
      it('should set "hasExclusiveSelection" to "false" on Select None click', async () => {
        const { user } = setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        act(() =>
          DatatableStore.update((s) => {
            s.hasExclusiveSelection = true;
          }),
        );

        await user.click(screen.getByTestId('selection-dropdown'));
        await user.click(screen.getByRole('button', { name: /Select None/i }));

        expect(DatatableStore.getRawState().hasExclusiveSelection).toBe(false);
      });
      it('should set "shouldResetSelectedRows" to "true" on Select All click', async () => {
        const { user } = setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        await user.click(screen.getByTestId('selection-dropdown'));
        await user.click(screen.getByRole('button', { name: /Select All/i }));

        expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
      });
      it('should set "shouldResetSelectedRows" to "true" on Select None click', async () => {
        const { user } = setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        await user.click(screen.getByTestId('selection-dropdown'));
        await user.click(screen.getByRole('button', { name: /Select None/i }));

        expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
      });
      it('should react on "selectedIds" change', async () => {
        setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );
        const counter = screen.getByTestId('counter-content');

        expect(counter).toHaveTextContent('1K');

        act(() =>
          DatatableStore.update((s) => {
            s.selectedIds = ['a', 'b', 'c'];
          }),
        );
        expect(counter).toHaveTextContent('3 of 1K selected');
      });
      it('should react on "hasExclusiveSelection" change', () => {
        setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );
        const counter = screen.getByTestId('counter-content');

        expect(counter).toHaveTextContent('1K');

        act(() =>
          DatatableStore.update((s) => {
            s.hasExclusiveSelection = true;
          }),
        );

        expect(counter).toHaveTextContent('1K of 1K selected');
      });
    });
    describe('given selection dropdown is hidden', () => {
      it('should set "shouldResetSelectedRows" to "true" on Select None click', async () => {
        const { user } = setup(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection
          />,
        );

        act(() =>
          DatatableStore.update((s) => {
            s.selectedIds = ['a', 'b', 'c'];
          }),
        );

        await user.click(screen.getByRole('button', { name: /Select None/i }));

        expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
      });
    });
  });
});
