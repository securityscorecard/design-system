import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FlexContainer } from '../FlexContainer';
import Filters from './Filters';
import { optionsMock } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

export const DefaultFilters: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters options={optionsMock} />
  </FlexContainer>
);
