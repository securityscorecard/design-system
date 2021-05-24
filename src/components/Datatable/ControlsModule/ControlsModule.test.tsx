import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../utils/tests/renderWithProviders';
import { InputFilter } from '../../Filters/components';
import { Operators } from '../../Filters/Filters.enums';
import { DatatableStore, datatableInitialState } from '../Datatable.store';
import { defaultControlsConfig } from '../defaultConfigs';
import ControlsModule from './ControlsModule';

const filterFields = [
  {
    conditions: [{ component: InputFilter, value: 'is', label: 'is' }],
    value: 'ip',
    label: 'IP address',
  },
];
describe('Datatable/ControlsModule', () => {
  beforeEach(() => {
    DatatableStore.replace(datatableInitialState);
  });

  describe('given filtering is enabled', () => {
    it('should not display filters if no fields definition is provided', () => {
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          defaultIsFilteringApplied={
            defaultControlsConfig.defaultIsFilteringApplied
          }
          defaultIsFilteringOpen={defaultControlsConfig.defaultIsFilteringOpen}
          hasSearch={defaultControlsConfig.hasSearch}
          searchConfig={defaultControlsConfig.searchConfig}
          onControlToggle={defaultControlsConfig.onControlToggle}
          // Test related properties
          hasFiltering
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: [],
          }}
        />,
      );

      expect(
        screen.queryByRole('button', { name: /Filters/i }),
      ).not.toBeInTheDocument();
    });
    it('should open Filters component on Filters button click', () => {
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
        />,
      );

      fireEvent.click(screen.getByRole('button', { name: /Filters/i }));

      expect(
        screen.getByRole('button', { name: /Apply/i }),
      ).toBeInTheDocument();
    });
    it('should close Filters component on Filters button click when Filters are open', () => {
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      fireEvent.click(screen.getByRole('button', { name: /Filters/i }));

      expect(
        screen.queryByRole('button', { name: /Apply/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('given column ordering is enabled', () => {
    it('should open ColumnsControls component on Columns button click', () => {
      renderWithProviders(<ControlsModule {...defaultControlsConfig} />);

      fireEvent.click(screen.getByRole('button', { name: /Columns/i }));

      expect(
        screen.getByRole('button', { name: /Apply/i }),
      ).toBeInTheDocument();
    });
    it('should close ColumnsControls component on Columns button click when ColumnsControls are open', () => {
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          defaultIsColumnOrderingOpen
        />,
      );

      fireEvent.click(screen.getByRole('button', { name: /Columns/i }));

      expect(
        screen.queryByRole('button', { name: /Apply/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('DatatableStore actions', () => {
    it('should store filtering state in store on mount', () => {
      const filterState = [
        {
          operator: Operators.and,
          field: 'ip',
          condition: 'is',
          value: 'text',
          isApplied: true,
          isLoading: false,
        },
      ];
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
            state: filterState,
          }}
        />,
      );

      expect(DatatableStore.getRawState().filters).toMatchObject(filterState);
      expect(DatatableStore.getRawState().hasAppliedFilters).toBe(true);
    });
    it('should store filtering state when on filter Apply button', () => {
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      userEvent.type(screen.getByPlaceholderText('String'), 'text');
      fireEvent.click(screen.getByRole('button', { name: /Apply/i }));

      expect(DatatableStore.getRawState().filters).toMatchObject([
        {
          operator: Operators.and,
          field: 'ip',
          condition: 'is',
          value: 'text',
          isLoading: true,
          isApplied: false,
        },
      ]);
      expect(DatatableStore.getRawState().hasAppliedFilters).toBe(true);
    });
    it('should clear filtering state when on filter Clear all button', () => {
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      userEvent.type(screen.getByPlaceholderText('String'), 'text');
      fireEvent.click(screen.getByRole('button', { name: /Apply/i }));
      fireEvent.click(screen.getByRole('button', { name: /Clear all/i }));

      expect(DatatableStore.getRawState().filters).toEqual([]);
      expect(DatatableStore.getRawState().hasAppliedFilters).toBe(false);
    });
    it('should store search query when perform search', async () => {
      jest.useFakeTimers();
      const query = 'Search query';
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
        />,
      );

      userEvent.type(screen.getByPlaceholderText('Search'), `${query}{enter}`);

      await waitFor(() =>
        expect(DatatableStore.getRawState().query).toBe(query),
      );
      jest.useRealTimers();
    });
    it('should clear search query on Clear button click', async () => {
      jest.useFakeTimers();
      const query = 'Search query';
      renderWithProviders(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
        />,
      );

      userEvent.type(screen.getByPlaceholderText('Search'), `${query}{enter}`);
      fireEvent.click(screen.getByLabelText('Clear Search'));

      await waitFor(() => DatatableStore.getRawState().query === query);
      expect(DatatableStore.getRawState().query).toBe('');
      jest.useRealTimers();
    });
  });
});
