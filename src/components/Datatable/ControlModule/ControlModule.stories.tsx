import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { mergeRight } from 'ramda';

import { Container } from '../../layout';
import ControlModule from './ControlModule';
import { ControlsConfig } from '../Datatable.types';
import { mockControlModuleProps } from '../mocks/controlModule';

export default {
  title: 'components/Datatable/components/ControlModule',
  component: ControlModule,
};

export const playground: Story<ControlsConfig<Record<'string', unknown>>> = (
  args,
) => (
  <Container>
    <ControlModule {...mergeRight(mockControlModuleProps, args)} />
  </Container>
);

playground.args = {
  hasSearch: true,
  defaultIsFilteringOpen: false,
  hasFiltering: true,
  hasColumnVisibility: true,
  hasColumnOrdering: false,
  hasGrouping: true,
  hasCustomViews: true,
};

playground.argTypes = {
  hasSearch: {
    control: 'boolean',
    defaultValue: true,
  },
  hasFiltering: {
    control: 'boolean',
    defaultValue: true,
  },
  defaultIsFilteringOpen: {
    control: 'boolean',
    defaultValue: false,
  },
  hasColumnVisibility: {
    control: 'boolean',
    defaultValue: true,
  },
  hasColumnOrdering: {
    control: 'boolean',
    defaultValue: false,
  },
  hasGrouping: {
    control: 'boolean',
    defaultValue: true,
  },
  hasCustomViews: {
    control: 'boolean',
    defaultValue: true,
  },
};

export const Default: Story = () => (
  <Container>
    <ControlModule {...mockControlModuleProps} />
  </Container>
);

export const OpenFilters: Story = () => (
  <Container>
    <ControlModule {...mockControlModuleProps} defaultIsFilteringOpen />
  </Container>
);

export const WithoutSearch: Story = () => (
  <Container>
    <ControlModule {...mockControlModuleProps} hasSearch={false} />
  </Container>
);

export const WithoutFiltering: Story = () => (
  <Container>
    <ControlModule
      {...mergeRight(mockControlModuleProps, { hasFiltering: false })}
    />
  </Container>
);

export const WithAllTools: Story = () => (
  <Container>
    <ControlModule
      {...mockControlModuleProps}
      hasColumnVisibility
      hasCustomViews
      hasGrouping
    />
  </Container>
);
