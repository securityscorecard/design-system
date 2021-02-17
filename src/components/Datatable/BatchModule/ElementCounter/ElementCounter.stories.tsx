import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import ElementCounter from './ElementCounter';
import DatatableContext from '../../DatatableContext';

export default {
  title: 'components/Datatable/components/ElementCounter',
  component: ElementCounter,
} as Meta;

export const Default: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 120 }}>
    <ElementCounter />
  </DatatableContext.Provider>
);

export const Selected: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 120, selectedLength: 80 }}>
    <ElementCounter />
  </DatatableContext.Provider>
);

export const NoData: Story = () => (
  <DatatableContext.Provider value={{ totalLength: 0 }}>
    <ElementCounter />
  </DatatableContext.Provider>
);

export const AbbreviatedCounts: Story = () => (
  <>
    <DatatableContext.Provider value={{ totalLength: 1000 }}>
      <ElementCounter />
    </DatatableContext.Provider>
    <DatatableContext.Provider value={{ totalLength: 1050000 }}>
      <ElementCounter />
    </DatatableContext.Provider>
    <DatatableContext.Provider value={{ totalLength: 1500000000 }}>
      <ElementCounter />
    </DatatableContext.Provider>
  </>
);
