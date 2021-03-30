import React from 'react';
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
  describe('DatatableStore actions', () => {
    it('should set "hasExclusiveSelection" to "true" on Select All click', () => {
      renderWithProviders(
        <ElementCounter dataSize={1000} shouldShowSelectionDropdown />,
      );

      fireEvent.click(screen.getByTestId('selection-dropdown'));
      fireEvent.click(screen.getByRole('button', { name: /Select All/i }));

      expect(DatatableStore.getRawState().hasExclusiveSelection).toBe(true);
    });
    it('should set "hasExclusiveSelection" to "false" on Select None click', () => {
      renderWithProviders(
        <ElementCounter dataSize={1000} shouldShowSelectionDropdown />,
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
        <ElementCounter dataSize={1000} shouldShowSelectionDropdown />,
      );

      fireEvent.click(screen.getByTestId('selection-dropdown'));
      fireEvent.click(screen.getByRole('button', { name: /Select All/i }));

      expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
    });
    it('should set "shouldResetSelectedRows" to "true" on Select None click', () => {
      renderWithProviders(
        <ElementCounter dataSize={1000} shouldShowSelectionDropdown />,
      );

      fireEvent.click(screen.getByTestId('selection-dropdown'));
      fireEvent.click(screen.getByRole('button', { name: /Select None/i }));

      expect(DatatableStore.getRawState().shouldResetSelectedRows).toBe(true);
    });
    it('should react on "selectedIds" change', () => {
      renderWithProviders(
        <ElementCounter dataSize={1000} shouldShowSelectionDropdown />,
      );
      const counter = screen.getByRole('heading');

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
        <ElementCounter dataSize={1000} shouldShowSelectionDropdown />,
      );
      const counter = screen.getByRole('heading');

      expect(counter).toHaveTextContent('1K');

      act(() =>
        DatatableStore.update((s) => {
          s.hasExclusiveSelection = true;
        }),
      );

      expect(counter).toHaveTextContent('1K of 1K selected');
    });
  });
});
