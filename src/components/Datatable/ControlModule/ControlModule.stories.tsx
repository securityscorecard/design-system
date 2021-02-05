import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';

import { Container } from '../../layout';
import { tableActionsMock } from '../mocks/actions';
import DatatableContext from '../DatatableContext';
import ControlModule from './ControlModule';
import { BatchModule } from '../BatchModule';
import { mockToolsTabItems } from '../mocks/toolsTabItems';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { ControlModuleProps } from './ControlModule.types';
import { createMockOnSearch } from '../../forms/SearchBar/mocks';
import { dataMock, dataPointsMock } from '../../Filters/mocks/options';

export default {
  title: 'components/Datatable/components/ControlModule',
  component: ControlModule,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  subcomponents: { BatchModule, ToolsTabItem, SearchBar },
} as Meta;

const mockArgs = {
  toolsTabItems: mockToolsTabItems,
  placeholder: 'Search for domains or IPs',
  onSearch: createMockOnSearch(action(`click-suggestion`)),
  data: dataMock,
  dataPoints: dataPointsMock,
  onApply: action('onApply'),
  onCancel: action('onCancel'),
  onChange: action('onChange'),
  onClose: action('onClose'),
  actions: tableActionsMock,
};

export const playground: Story<ControlModuleProps> = (args) => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <Container>
      <ControlModule {...args} {...mockArgs} />
    </Container>
  </DatatableContext.Provider>
);
playground.args = {
  isFilterOpen: true,
};
playground.argTypes = {
  isFilterOpen: {
    control: 'boolean',
  },
};

export const Default: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <Container>
      <ControlModule {...mockArgs} />
    </Container>
  </DatatableContext.Provider>
);

export const OpenFilters: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <Container>
      <ControlModule {...mockArgs} isFilterOpen />
    </Container>
  </DatatableContext.Provider>
);
