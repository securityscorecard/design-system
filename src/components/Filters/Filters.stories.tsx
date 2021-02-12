import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../FlexContainer';
import Filters from './Filters';
import { fieldsMock, stateMock } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

// TODO cover other stories
export const DefaultFilters: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsMock}
      state={stateMock}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
