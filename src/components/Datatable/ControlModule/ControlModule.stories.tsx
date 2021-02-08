import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import { Container } from '../../layout';
import DatatableContext from '../DatatableContext';
import ControlModule from './ControlModule';
import { BatchModule } from '../BatchModule';
import { mockToolsTabItems } from '../mocks/toolsTabItems';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { ControlModuleProps } from './ControlModule.types';
import { mockControlModuleProps } from '../mocks/controlModule';

export default {
  title: 'components/Datatable/components/ControlModule',
  component: ControlModule,
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  subcomponents: { BatchModule, ToolsTabItem, SearchBar },
} as Meta;

export const playground: Story<ControlModuleProps> = (args) => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <Container>
      <ControlModule {...args} {...mockControlModuleProps} />
    </Container>
  </DatatableContext.Provider>
);
playground.args = {
  defaultIsFilterOpen: true,
};
playground.argTypes = {
  defaultIsFilterOpen: {
    control: 'boolean',
  },
};

export const Default: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <Container>
      <ControlModule
        {...mockControlModuleProps}
        defaultIsFilterOpen={false}
        toolsTabItems={mockToolsTabItems}
      />
    </Container>
  </DatatableContext.Provider>
);

export const OpenFilters: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <Container>
      <ControlModule {...mockControlModuleProps} />
    </Container>
  </DatatableContext.Provider>
);
