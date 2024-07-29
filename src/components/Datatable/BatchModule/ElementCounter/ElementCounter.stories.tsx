import React, { useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react';

import ElementCounter from './ElementCounter';
import { DatatableStore } from '../../Datatable.store';
import { ElementCounterProps } from './ElementCounter.types';
import { defaultTableConfig } from '../../defaultConfigs';

export default {
  title: 'components/Datatable/internalComponents/BatchModule/ElementCounter',
  component: ElementCounter,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    shouldShowSelectionDropdown: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: defaultTableConfig.hasSelection.toString() },
      },
    },
  },
} as Meta;

type Story = StoryFn<ElementCounterProps>;

export const Default: Story = (args) => <ElementCounter {...args} />;
Default.args = {
  dataSize: 120,
  hasSelection: true,
  hasOnlyPerPageSelection: true,
};

export const WithoutSelection: Story = (args) => <ElementCounter {...args} />;
WithoutSelection.args = {
  ...Default.args,
  hasSelection: false,
};

export const WithSelectedRows: Story = (args) => {
  useEffect(() => {
    DatatableStore.update((s) => {
      s.selectedIds = ['a', 'b', 'c', 'd', 'e', 'f'];
    });

    return () => {
      DatatableStore.update((s) => {
        s.selectedIds = [];
      });
    };
  }, []);
  return <ElementCounter {...args} />;
};
WithSelectedRows.args = Default.args;

export const WithSelectedRowsAndExclusionLogic: Story = (args) => {
  useEffect(() => {
    DatatableStore.update((s) => {
      s.selectedIds = ['a', 'b', 'c', 'd', 'e', 'f'];
    });

    return () => {
      DatatableStore.update((s) => {
        s.selectedIds = [];
      });
    };
  }, []);
  return <ElementCounter {...args} />;
};
WithSelectedRowsAndExclusionLogic.args = {
  ...Default.args,
  hasOnlyPerPageSelection: false,
};

export const NoDataAvailable: Story = (args) => <ElementCounter {...args} />;
NoDataAvailable.args = {
  ...Default.args,
  dataSize: 0,
};

export const AbbreviatedCounts: Story = (args) => (
  <>
    <ElementCounter {...args} dataSize={1000} />
    <ElementCounter {...args} dataSize={1050000} />
    <ElementCounter {...args} dataSize={1500000000} />
  </>
);

AbbreviatedCounts.args = Default.args;
