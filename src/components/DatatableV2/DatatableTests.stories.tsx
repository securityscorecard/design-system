import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import Datatable from './Datatable';
import {
  fields as filtersFields,
  state as filtersState,
} from '../Filters/mocks/options';
import { Data } from './mocks/types';
import assets from './mocks/ipAssets.json';
import { simpleColumns } from './mocks/columns';
import { DatatableProps } from './Datatable.types';
import { DatatableStore, datatableInitialState } from './Datatable.store';
import { tableActionsMock } from './mocks/actions';

export default {
  title: 'components/DatatableV2/internalComponents/Datatable',
  component: Datatable,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const DatatableTemplate: Story<DatatableProps<Data>> = (args) => (
  <Datatable<Data> {...args} />
);

export const MinimalConfig = DatatableTemplate.bind({});
MinimalConfig.args = {
  data: assets.slice(0, 50),
  columns: simpleColumns,
  dataSize: assets.length,
  controlsConfig: {
    filteringConfig: {
      fields: filtersFields,
    },
  },
};

export const WithDisabledSelection = DatatableTemplate.bind({});
WithDisabledSelection.args = {
  ...MinimalConfig.args,
  tableConfig: {
    hasSelection: false,
  },
};

export const WithSelectedRows = DatatableTemplate.bind({});
WithSelectedRows.args = {
  ...MinimalConfig.args,
  tableConfig: {
    defaultSelectedRowIds: [1, 6, 24],
  },
};

export const WithNoData = DatatableTemplate.bind({});
WithNoData.args = {
  ...MinimalConfig.args,
  data: [],
  dataSize: 0,
};

export const WithNoMatchingData: Story<DatatableProps<Data>> = (args) => {
  useEffect(() => {
    DatatableStore.update((s) => {
      s.hasAppliedFilters = true;
    });

    return () => {
      DatatableStore.replace(datatableInitialState);
    };
  });

  return <Datatable<Data> {...args} />;
};
WithNoMatchingData.args = {
  ...WithNoData.args,
  controlsConfig: {
    ...WithNoData.args.controlsConfig,
    defaultIsFilteringApplied: true,
  },
};

export const WithBatchActions = DatatableTemplate.bind({});
WithBatchActions.args = {
  ...MinimalConfig.args,
  batchActions: tableActionsMock,
};

export const WithDisabledControls = DatatableTemplate.bind({});
WithDisabledControls.args = {
  ...MinimalConfig.args,
  isControlsEnabled: false,
};

export const WithOpenFiltering = DatatableTemplate.bind({});
WithOpenFiltering.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsFilteringOpen: true,
  },
};

export const WithAppliedFiltering = DatatableTemplate.bind({});
WithAppliedFiltering.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsFilteringApplied: true,
  },
};

export const WithOpenAndAppliedFiltering = DatatableTemplate.bind({});
WithOpenAndAppliedFiltering.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    defaultIsFilteringOpen: true,
    filteringConfig: {
      fields: filtersFields,
      state: filtersState,
    },
  },
};

export const WithDisabledFiltering = DatatableTemplate.bind({});
WithDisabledFiltering.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    hasFiltering: false,
  },
};

export const WithCustomPlaceholderForSearch = DatatableTemplate.bind({});
WithCustomPlaceholderForSearch.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    searchConfig: {
      placeholder: 'Search by IP address',
    },
  },
};

export const WithDisabledSearch = DatatableTemplate.bind({});
WithDisabledSearch.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    hasSearch: false,
  },
};
