import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { mergeDeepRight } from 'ramda';
import { action } from '@storybook/addon-actions';

import { fields } from '../../Filters/mocks/options';
import { defaultControlsConfig } from '../defaultConfigs';
import ControlsModule from './ControlsModule';
import { ControlsModuleProps } from './ControlsModule.types';

export default {
  title: 'components/DatatableV2/internalComponents/ControlsModule',
  component: ControlsModule,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    hasSearch: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: defaultControlsConfig.hasSearch },
      },
      type: { required: true },
    },
    hasFiltering: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: defaultControlsConfig.hasFiltering } },
      type: { required: true },
    },
    defaultIsFilteringOpen: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: defaultControlsConfig.defaultIsFilteringOpen },
      },
      type: { required: true },
    },
    defaultIsFilteringApplied: {
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.defaultIsFilteringApplied,
        },
      },
      type: { required: true },
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
      type: { required: true },
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
    isCancelDisabled: false,
  }`,
        },
      },
      type: { required: true },
    },
    onControlToggle: {
      control: { disabled: true },
      table: {
        defaultValue: {
          summary: defaultControlsConfig.onControlToggle,
        },
      },
      type: { required: true },
    },
  },
} as Meta;

const ControlsModuleTemplate = (args) => <ControlsModule {...args} />;

export const Default: Story<ControlsModuleProps> = ControlsModuleTemplate.bind(
  {},
);

Default.args = mergeDeepRight(defaultControlsConfig, {
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

export const WithDisabledFiltering: Story<ControlsModuleProps> = ControlsModuleTemplate.bind(
  {},
);

WithDisabledFiltering.args = {
  ...Default.args,
  hasFiltering: false,
};

export const WithOpenFiltering: Story<ControlsModuleProps> = ControlsModuleTemplate.bind(
  {},
);

WithOpenFiltering.args = {
  ...Default.args,
  defaultIsFilteringOpen: true,
};

export const WithAppliedFiltering: Story<ControlsModuleProps> = ControlsModuleTemplate.bind(
  {},
);

WithAppliedFiltering.args = {
  ...Default.args,
  defaultIsFilteringApplied: true,
};

export const WithDisabledSearch: Story<ControlsModuleProps> = ControlsModuleTemplate.bind(
  {},
);

WithDisabledSearch.args = {
  ...Default.args,
  hasSearch: false,
};
