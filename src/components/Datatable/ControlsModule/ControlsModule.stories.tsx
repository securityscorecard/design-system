import { Meta, StoryFn } from '@storybook/react';
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
        defaultValue: { summary: defaultControlsConfig.hasSearch.toString() },
      },
    },
    hasFiltering: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.hasFiltering.toString(),
        },
      },
    },
    defaultIsFilteringOpen: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.defaultIsFilteringOpen.toString(),
        },
      },
    },
    defaultIsFilteringApplied: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.defaultIsFilteringApplied.toString(),
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
          summary: '() => {}',
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

type Story = StoryFn<ControlsModuleProps<Data>>;

export const Playground: Story = (args) => <ControlsModuleTemplate {...args} />;

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

export const WithDisabledFiltering: Story = ControlsModuleTemplate.bind({});

WithDisabledFiltering.args = {
  ...Playground.args,
  hasFiltering: false,
};

export const WithOpenFiltering: Story = ControlsModuleTemplate.bind({});

WithOpenFiltering.args = {
  ...Playground.args,
  defaultIsFilteringOpen: true,
};

export const WithAppliedFiltering: Story = ControlsModuleTemplate.bind({});

WithAppliedFiltering.args = {
  ...Playground.args,
  defaultIsFilteringApplied: true,
};

export const WithDisabledColumns: Story = ControlsModuleTemplate.bind({});

WithDisabledColumns.args = {
  ...Playground.args,
  hasColumnsControls: false,
};

export const WithOpenColumns: Story = ControlsModuleTemplate.bind({});

WithOpenColumns.args = {
  ...Playground.args,
  defaultIsColumnsControlsOpen: true,
};

export const WithAppliedColumns: Story = ControlsModuleTemplate.bind({});

WithAppliedColumns.args = {
  ...Playground.args,
  defaultIsColumnsControlsApplied: true,
};

export const WithDisabledSearch: Story = ControlsModuleTemplate.bind({});

WithDisabledSearch.args = {
  ...Playground.args,
  hasSearch: false,
};
