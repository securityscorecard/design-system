import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router-dom';

import { actionsMock } from '../mocks/actions';
import DatatableContext from '../DatatableContext';
import ControlModule from './ControlModule';
import { BatchModule } from '../BatchModule';
import { mockToolsTabItems } from '../mocks/toolsTabItems';
import { SearchBar } from '../../forms/SearchBar';
import { ToolsTabItem } from '../ToolsTabItem';
import { ControlModuleProps } from './ControlModule.types';
import { createMockOnSearch } from '../../forms/SearchBar/mocks';

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
};

export const playground: Story<ControlModuleProps> = (args) => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <ControlModule {...args} {...mockArgs} />
  </DatatableContext.Provider>
);
playground.args = {
  actions: [true, false],
};
playground.argTypes = {
  actions: {
    table: {
      type: {
        summary: 'Action[]',
        detail: `
| {
    label: string;
    name: string;
    onClick: () => void;
  }
| {
    label: string;
    name: string;
    to: To;
    onClick?: () => void;
    href?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    href: string;
    onClick?: () => void;
    to?: never;
    subActions?: never;
  }
| {
    label: string;
    name: string;
    subActions: ActionKinds[];
    onClick?: () => void;
    href?: never;
    to?: never;
  }
        `,
      },
    },
  },
};

export const Default: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 1070000 }}>
    <ControlModule
      actions={actionsMock}
      toolsTabItems={mockToolsTabItems}
      {...mockArgs}
    />
  </DatatableContext.Provider>
);

// export const Filtered: Story = () => (
//   <DatatableContext.Provider value={{ totalLength: 1070000 }}>
//     <ControlModule actions={actionsMock} filteredLength={52813} />
//   </DatatableContext.Provider>
// );

// export const Selected: Story = () => (
//   <DatatableContext.Provider
//     value={{ totalLength: 1070000, selectedLength: 31 }}
//   >
//     <ControlModule actions={actionsMock} filteredLength={52813} />
//   </DatatableContext.Provider>
// );
