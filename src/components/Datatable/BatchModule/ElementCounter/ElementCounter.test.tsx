import { act, fireEvent, render, screen } from '@testing-library/react';

import ElementCounter, { getCounterContent } from './ElementCounter';
import { renderWithProviders } from '../../../../utils/tests/renderWithProviders';
import { DatatableStore, datatableInitialState } from '../../Datatable.store';

describe('getCounterContent', () => {
  it('should return No Data when "totalLength" is 0', () => {
    render(getCounterContent(0));
    expect(screen.getByTestId('counter-content')).toHaveTextContent('No data');
  });
  it('should return No Data when "totalLength" is 0 and "selectedLength" is greater than 0', () => {
    render(getCounterContent(0, 500));
    expect(screen.getByTestId('counter-content')).toHaveTextContent('No data');
  });

  it('should return correct count when "totalLength" is greater than 0', () => {
    render(getCounterContent(1000));
    expect(screen.getByTestId('counter-content')).toHaveTextContent('1K');
  });

  it('should return correct count when "totalLength" and "selectedLength" are greater than 0', () => {
    render(getCounterContent(1000, 500));
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
    renderWithProviders(
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
      it('should set "hasExclusiveSelection" to "true" on Select All click', () => {
        renderWithProviders(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        fireEvent.click(screen.getByTestId('selection-dropdown'));
        fireEvent.click(screen.getByRole('button', { name: /Select All/i }));

        expect(DatatableStore.getRawState().hasExclusiveSelection).toBe(true);
      });
      it('should set "hasExclusiveSelection" to "false" on Select None click', () => {
        renderWithProviders(
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

        fireEvent.click(screen.getByTestId('selection-dropdown'));
        fireEvent.click(screen.getByRole('button', { name: /Select None/i }));

        expect(DatatableStore.getRawState().hasExclusiveSelection).toBe(false);
      });
      it('should set "shouldResetSelectedRows" to "true" on Select All click', () => {
        renderWithProviders(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        fireEvent.click(screen.getByTestId('selection-dropdown'));
        fireEvent.click(screen.getByRole('button', { name: /Select All/i }));

        expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
      });
      it('should set "shouldResetSelectedRows" to "true" on Select None click', () => {
        renderWithProviders(
          <ElementCounter
            dataSize={1000}
            hasSelection
            hasOnlyPerPageSelection={false}
          />,
        );

        fireEvent.click(screen.getByTestId('selection-dropdown'));
        fireEvent.click(screen.getByRole('button', { name: /Select None/i }));

        expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
      });
      it('should react on "selectedIds" change', () => {
        renderWithProviders(
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
        renderWithProviders(
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
      it('should set "shouldResetSelectedRows" to "true" on Select None click', () => {
        renderWithProviders(
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

        fireEvent.click(screen.getByRole('button', { name: /Select None/i }));

        expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
      });
    });
  });
});
