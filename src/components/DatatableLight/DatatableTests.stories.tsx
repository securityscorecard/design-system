import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import MockDate from 'mockdate';

import DatatableLight from './DatatableLight';
import { Data } from './mocks/types';
import assets from './mocks/ipAssets.json';
import { columnsForSecondTable } from './mocks/columns';
import { DatatableProps } from './DatatableLight.types';

MockDate.set('2021-03-31T00:00:00Z');

export default {
  title: 'components/DatatableLight/internalComponents/DatatableLight',
  component: DatatableLight,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

const DatatableTemplate: Story<DatatableProps<Data>> = (args) => (
  <DatatableLight<Data> {...args} />
);

export const MinimalConfig = DatatableTemplate.bind({});

MinimalConfig.args = {
  data: assets.slice(0, 50),
  columns: columnsForSecondTable,
  dataSize: assets.length,
};
