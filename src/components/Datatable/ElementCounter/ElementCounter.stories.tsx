import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import ElementCounter from './ElementCounter';

export default {
  title: 'components/Datatable/components/ElementCounter',
  component: ElementCounter,
} as Meta;

export const Default: Story = () => <ElementCounter totalLength={120} />;

export const Filtered: Story = () => (
  <ElementCounter filteredLength={80} totalLength={120} />
);

export const Selected: Story = () => (
  <ElementCounter selectedLength={80} totalLength={120} />
);

export const AbbreviatedCounts: Story = () => (
  <>
    <ElementCounter totalLength={1000} />
    <ElementCounter totalLength={1050000} />
    <ElementCounter totalLength={1500000000} />
  </>
);
