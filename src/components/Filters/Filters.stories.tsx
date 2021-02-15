import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../FlexContainer';
import Filters from './Filters';
import { fields, state } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

export const Default: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fields}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const WithState: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fields}
      state={state}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const FetchingResults: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fields}
      state={state}
      isLoading
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
