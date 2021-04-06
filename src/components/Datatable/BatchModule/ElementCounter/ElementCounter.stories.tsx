import React, { useEffect } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

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
      table: { defaultValue: { summary: defaultTableConfig.hasSelection } },
    },
  },
} as Meta;

export const Default: Story<ElementCounterProps> = (args) => (
  <ElementCounter {...args} />
);
Default.args = { dataSize: 120, shouldShowSelectionDropdown: true };

export const WithoutSelectionDropdown: Story<ElementCounterProps> = (args) => (
  <ElementCounter {...args} />
);
WithoutSelectionDropdown.args = {
  ...Default.args,
  shouldShowSelectionDropdown: false,
};

export const WithSelectedRows: Story<ElementCounterProps> = (args) => {
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

export const NoDataAvailable: Story<ElementCounterProps> = (args) => (
  <ElementCounter {...args} />
);
NoDataAvailable.args = { ...Default.args, dataSize: 0 };

export const AbbreviatedCounts: Story<ElementCounterProps> = (args) => (
  <>
    <ElementCounter dataSize={1000} {...args} />
    <ElementCounter dataSize={1050000} {...args} />
    <ElementCounter dataSize={1500000000} {...args} />
  </>
);

AbbreviatedCounts.args = { shouldShowSelectionDropdown: false };
