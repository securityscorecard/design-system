import type { Meta, Story } from '@storybook/react/types-6-0';

import { action } from '@storybook/addon-actions';

import Filters from './Filters';
import { fields, state, stateWithUnappliedFilters } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

export const Default: Story = () => (
  <Filters
    fields={fields}
    isCancelEnabled
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const WithState: Story = () => (
  <Filters
    fields={fields}
    state={state}
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const UnappliedFilters: Story = () => (
  <Filters
    fields={fields}
    state={stateWithUnappliedFilters}
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const FetchingResults: Story = () => (
  <Filters
    fields={fields}
    state={state}
    isLoading
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
    onClose={action('onClose')}
  />
);

export const WithFixedOperator: Story = () => (
  <Filters
    defaultOperator="or"
    fields={fields}
    isOperatorFieldEnabled={false}
    state={state}
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const WithCloseButton: Story = () => (
  <Filters
    fields={fields}
    state={state}
    onApply={action('onApply')}
    onClose={action('onClose')}
  />
);

export const WithoutApplyButton: Story = () => (
  <Filters
    fields={fields}
    state={state}
    onChange={action('onChange')}
    onError={action('onError')}
  />
);
