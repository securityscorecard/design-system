import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { mergeDeepRight } from 'ramda';
import { action } from '@storybook/addon-actions';

import { fields } from '../../Filters/mocks/options';
import { defaultControlsConfig } from '../defaultConfigs';
import ControlsModule from './ControlsModule';
import { ControlsModuleProps } from './ControlsModule.types';
import { useColumnsControls } from '../hooks/useColumnsControls';
import { simpleColumns } from '../../_internal/BaseTable/mocks/columns';
import { Data } from '../../_internal/BaseTable/mocks/types';

export default {
  title: 'components/Datatable/internalComponents/ControlsModule',
  component: ControlsModule,
  parameters: {
    viewMode: 'story',
  },
  argTypes: {
    hasSearch: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: defaultControlsConfig.hasSearch },
      },
    },
    hasFiltering: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: defaultControlsConfig.hasFiltering } },
    },
    defaultIsFilteringOpen: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: defaultControlsConfig.defaultIsFilteringOpen },
      },
    },
    defaultIsFilteringApplied: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.defaultIsFilteringApplied,
        },
      },
    },
    searchConfig: {
      control: { type: 'object' },
      table: {
        defaultValue: {
          summary: 'SearchConfig',
          detail: `{
    placeholder: 'Search',
    onSearch: noop,
    onClear: noop,
  }`,
        },
      },
    },
    filteringConfig: {
      control: { type: 'object' },
      table: {
        defaultValue: {
          summary: 'FilteringConfig',
          detail: `{
    onChange: noop,
    onApply: noop,
    onClose: noop,
    onCancel: noop,
    state: [],
    fields: [],
    isCancelEnabled: true,
  }`,
        },
      },
    },
    onControlToggle: {
      control: { disabled: true },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.onControlToggle,
        },
      },
    },
  },
} as Meta;

function ControlsModuleTemplate(args) {
  useColumnsControls(
    action('onColumnOrderChange'),
    action('onColumnVisibilityChange'),
    simpleColumns,
    ['country', 'source', 'findingsCount'],
  );
  return <ControlsModule {...args} />;
}

export const Playground: Story<ControlsModuleProps<Data>> = (args) => (
  <ControlsModuleTemplate {...args} />
);

Playground.args = mergeDeepRight(defaultControlsConfig, {
  searchConfig: {
    onSearch: action('SearchOnSearch'),
    onClear: action('SearchOnClear'),
  },
  filteringConfig: {
    fields,
    onChange: action('FilterOnChange'),
    onApply: action('FilterOnApply'),
    onClose: action('FilterOnClose'),
    onCancel: action('FilterOnCancel'),
  },
  onControlToggle: action('ControlToggleClick'),
});
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithDisabledFiltering: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithDisabledFiltering.args = {
  ...Playground.args,
  hasFiltering: false,
};

export const WithOpenFiltering: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithOpenFiltering.args = {
  ...Playground.args,
  defaultIsFilteringOpen: true,
};

export const WithAppliedFiltering: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithAppliedFiltering.args = {
  ...Playground.args,
  defaultIsFilteringApplied: true,
};

export const WithDisabledColumns: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithDisabledColumns.args = {
  ...Playground.args,
  hasColumnsControls: false,
};

export const WithOpenColumns: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithOpenColumns.args = {
  ...Playground.args,
  defaultIsColumnsControlsOpen: true,
};

export const WithAppliedColumns: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithAppliedColumns.args = {
  ...Playground.args,
  defaultIsColumnsControlsApplied: true,
};

export const WithDisabledSearch: Story<ControlsModuleProps<Data>> =
  ControlsModuleTemplate.bind({});

WithDisabledSearch.args = {
  ...Playground.args,
  hasSearch: false,
};
