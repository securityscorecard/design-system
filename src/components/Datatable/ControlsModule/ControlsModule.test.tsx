import { screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../../utils/tests/setup';
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
    it('should not display filters if no fields definition is provided', async () => {
      setup(
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
      await waitFor(() => {
        expect(screen.queryByTestId('filters')).not.toBeInTheDocument();
      });

      expect(
        screen.queryByRole('button', { name: /Filters/i }),
      ).not.toBeInTheDocument();
    });
    it('should open Filters component on Filters button click', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
        />,
      );

      await user.click(screen.getByRole('button', { name: /Filters/i }));

      await waitFor(() => {
        expect(screen.getByTestId('filters')).toBeInTheDocument();
      });

      expect(screen.getByPlaceholderText('String')).toBeInTheDocument();
    });
    it('should close Filters component on Filters button click when Filters are open', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      await user.click(screen.getByRole('button', { name: /Filters/i }));
      await waitFor(() => {
        expect(screen.queryByTestId('filters')).not.toBeInTheDocument();
      });

      expect(screen.queryByPlaceholderText('String')).not.toBeInTheDocument();
    });
    it('should close Filters component on Column button click when Filters are open', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      await user.click(screen.getByRole('button', { name: /Columns/i }));
      await waitFor(() => {
        expect(screen.queryByTestId('filters')).not.toBeInTheDocument();
      });

      expect(screen.queryByPlaceholderText('String')).not.toBeInTheDocument();
    });
  });

  describe('given column ordering is enabled', () => {
    it('should open ColumnsControls component on Columns button click', async () => {
      const { user } = setup(<ControlsModule {...defaultControlsConfig} />);

      await user.click(screen.getByRole('button', { name: /Columns/i }));

      await waitFor(() => {
        expect(screen.getByTestId('dropdown-pane')).toBeInTheDocument();
      });
      expect(
        screen.getByRole('heading', { name: /Columns/i }),
      ).toBeInTheDocument();
    });
    it('should close ColumnsControls component on Columns button click when ColumnsControls are open', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          defaultIsColumnsControlsOpen
        />,
      );

      await user.click(screen.getByRole('button', { name: /Columns/i }));

      await waitFor(() => {
        expect(screen.queryByTestId('filters')).not.toBeInTheDocument();
      });
      expect(
        screen.queryByRole('heading', { name: /Columns/i }),
      ).not.toBeInTheDocument();
    });
    it('should close ColumnsControls component on Filters button click when ColumnsControls are open', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsColumnsControlsOpen
        />,
      );

      await user.click(screen.getByRole('button', { name: /Filters/i }));

      await waitFor(() => {
        expect(screen.queryByTestId('dropdown-pane')).not.toBeInTheDocument();
      });
      expect(
        screen.queryByRole('heading', { name: /Columns/i }),
      ).not.toBeInTheDocument();
    });
  });

  describe('given search is enabled', () => {
    it('should perform search on mount when defaultValue is provided', async () => {
      const onSearchMock = vi.fn();
      setup(
        <ControlsModule
          {...defaultControlsConfig}
          hasFiltering={false}
          // Test related properties
          hasSearch
          searchConfig={{
            onSearch: onSearchMock,
            onClear: defaultControlsConfig.searchConfig.onClear,
            defaultValue: 'query',
          }}
        />,
      );

      await waitFor(() => {
        expect(onSearchMock).toBeCalledWith('query');
      });
    });
    it('should not perform search when no defaultValue is provided', async () => {
      const onSearchMock = vi.fn();
      setup(
        <ControlsModule
          {...defaultControlsConfig}
          hasFiltering={false}
          // Test related properties
          hasSearch
          searchConfig={{
            onSearch: onSearchMock,
            onClear: defaultControlsConfig.searchConfig.onClear,
          }}
        />,
      );

      expect(onSearchMock).not.toBeCalled();
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
          isCanceled: false,
        },
      ];
      setup(
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
    it('should store filtering state when on filter Apply button', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      await user.type(screen.getByPlaceholderText('String'), 'text');
      await user.click(screen.getByRole('button', { name: /Apply/i }));

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
    it('should clear filtering state when on filter Clear all button', async () => {
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
          defaultIsFilteringOpen
        />,
      );

      await user.type(screen.getByPlaceholderText('String'), 'text');
      await user.click(screen.getByRole('button', { name: /Apply/i }));
      await user.click(screen.getByRole('button', { name: /Clear all/i }));

      expect(DatatableStore.getRawState().filters).toEqual([]);
      expect(DatatableStore.getRawState().hasAppliedFilters).toBe(false);
    });
    it('should store search query when perform search', async () => {
      const query = 'Search query';
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
        />,
      );

      await user.click(screen.getByPlaceholderText('Search'));
      await user.keyboard(`${query}{enter}`);

      await waitFor(() =>
        expect(DatatableStore.getRawState().query).toBe(query),
      );
    });
    it('should clear search query on Clear button click', async () => {
      const query = 'Search query';
      const { user } = setup(
        <ControlsModule
          {...defaultControlsConfig}
          filteringConfig={{
            ...defaultControlsConfig.filteringConfig,
            fields: filterFields,
          }}
        />,
      );

      await user.click(screen.getByRole('searchbox'));
      await user.keyboard(`${query}{enter}`);
      await user.click(
        screen.getByRole('button', { name: /Clear search value/i }),
      );

      await waitFor(() => DatatableStore.getRawState().query === query);
      expect(DatatableStore.getRawState().query).toBe('');
    });
  });
});
