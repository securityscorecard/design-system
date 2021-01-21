import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../FlexContainer';
import Filters from './Filters';
import { dataPointsMock, valueMock } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

export const DefaultFilters: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      dataPoints={dataPointsMock}
      value={valueMock}
      onApply={action('onApply')}
    />
  </FlexContainer>
);
