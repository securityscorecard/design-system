import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import MockDate from 'mockdate';

import Datatable from './Datatable';
import {
  fields as filtersFields,
  state as filtersState,
} from '../Filters/mocks/options';
import { Data } from '../_internal/BaseTable/mocks/types';
import assets from '../_internal/BaseTable/mocks/ipAssets.json';
import { simpleColumns } from '../_internal/BaseTable/mocks/columns';
import { DatatableProps } from './Datatable.types';
import { DatatableStore, datatableInitialState } from './Datatable.store';
import { tableActionsMock } from './mocks/actions';
import { Text } from '../typographyLegacy';
import { Stack } from '../layout';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/Datatable/internalComponents/Datatable',
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
  data: assets.slice(0, 5),
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
    defaultSelectedRowIds: [1, 3],
  },
};

export const WithSelectedRowsAndExclusionLogic = DatatableTemplate.bind({});
WithSelectedRowsAndExclusionLogic.args = {
  ...MinimalConfig.args,
  tableConfig: {
    defaultSelectedRowIds: [1, 3],
    hasOnlyPerPageSelection: false,
  },
};

export const WithSingleSelection = DatatableTemplate.bind({});
WithSingleSelection.args = {
  ...MinimalConfig.args,
  tableConfig: {
    isMultiSelect: false,
  },
};

export const WithSingleSelectionAndSelectedRow = DatatableTemplate.bind({});
WithSingleSelectionAndSelectedRow.args = {
  ...MinimalConfig.args,
  tableConfig: {
    isMultiSelect: false,
    defaultSelectedRowIds: [1],
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

export const WithDisabledBatchModule = DatatableTemplate.bind({});
WithDisabledBatchModule.args = {
  ...MinimalConfig.args,
  isBatchModuleEnabled: false,
};

export const WithDisabledControls = DatatableTemplate.bind({});
WithDisabledControls.args = {
  ...MinimalConfig.args,
  isControlsEnabled: false,
};

export const WithDisabledControlsAndActiveColumns = DatatableTemplate.bind({});
WithDisabledControlsAndActiveColumns.args = {
  ...MinimalConfig.args,
  isControlsEnabled: false,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsColumnsControlsOpen: true,
  },
};

export const WithDisabledControlsAndAppliedColumns = DatatableTemplate.bind({});
WithDisabledControlsAndAppliedColumns.args = {
  ...MinimalConfig.args,
  isControlsEnabled: false,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsColumnsControlsApplied: true,
  },
};

export const WithDisabledControlsAndColumns = DatatableTemplate.bind({});
WithDisabledControlsAndColumns.args = {
  ...MinimalConfig.args,
  isControlsEnabled: false,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    hasColumnsControls: false,
  },
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

export const WithOpenColumns = DatatableTemplate.bind({});
WithOpenColumns.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsColumnsControlsOpen: true,
  },
};
WithOpenColumns.parameters = {
  screenshot: {
    delay: 1000,
  },
};

export const WithAppliedColumns = DatatableTemplate.bind({});
WithAppliedColumns.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsColumnsControlsApplied: true,
  },
};

export const WithOpenAndAppliedColumns = DatatableTemplate.bind({});
WithOpenAndAppliedColumns.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsColumnsControlsOpen: true,
    defaultIsColumnsControlsApplied: true,
  },
};
WithOpenAndAppliedColumns.parameters = {
  screenshot: {
    delay: 1000,
  },
};

export const WithDisabledColumns = DatatableTemplate.bind({});
WithDisabledColumns.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    hasColumnsControls: false,
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

export const WithSinglePage = DatatableTemplate.bind({});
WithSinglePage.args = {
  ...MinimalConfig.args,
  dataSize: 50,
};

export const WithAllColumnsHidden = DatatableTemplate.bind({});
WithAllColumnsHidden.args = {
  ...MinimalConfig.args,
  controlsConfig: {
    ...MinimalConfig.args.controlsConfig,
    defaultIsColumnsControlsApplied: true,
  },
  tableConfig: {
    defaultHiddenColumns: [
      'status',
      'detectionMethod',
      'country',
      'findingsCount',
      'ipAddress',
      'domainsCount',
      'source',
      'issuesCount',
      'observationDate',
      'lastObservationDate',
      'observedFor',
    ],
  },
};

export const WithPersistedState = DatatableTemplate.bind({});
WithPersistedState.args = {
  ...MinimalConfig.args,
  id: 'persisted_state',
};
WithPersistedState.parameters = {
  screenshot: { skip: true },
};
WithPersistedState.decorators = [
  (storyFn) => (
    <Stack gap="md">
      <Text>
        An id must be provided to the Datatable in order to persists the table
        configuration.
      </Text>
      {storyFn()}
    </Stack>
  ),
];
