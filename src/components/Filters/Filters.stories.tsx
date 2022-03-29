import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Inline, Padbox } from '../layout';
import Filters from './Filters';
import { fields, state, stateWithUnappliedFilters } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

const Wrapper = styled(Padbox)`
  margin-left: 3rem;
`;

export const Default: Story = () => (
  <Wrapper>
    <Inline>
      <Filters
        fields={fields}
        onApply={action('onApply')}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onClose={action('onClose')}
      />
    </Inline>
  </Wrapper>
);

export const WithState: Story = () => (
  <Wrapper>
    <Inline>
      <Filters
        fields={fields}
        state={state}
        onApply={action('onApply')}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onClose={action('onClose')}
      />
    </Inline>
  </Wrapper>
);

export const UnappliedFilters: Story = () => (
  <Wrapper>
    <Inline>
      <Filters
        fields={fields}
        state={stateWithUnappliedFilters}
        onApply={action('onApply')}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onClose={action('onClose')}
      />
    </Inline>
  </Wrapper>
);

export const FetchingResults: Story = () => (
  <Wrapper>
    <Inline>
      <Filters
        fields={fields}
        state={state}
        isLoading
        onApply={action('onApply')}
        onCancel={action('onCancel')}
        onChange={action('onChange')}
        onClose={action('onClose')}
      />
    </Inline>
  </Wrapper>
);
