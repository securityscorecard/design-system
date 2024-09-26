import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Filters from './Filters';
import { fields, state, stateWithUnappliedFilters } from './mocks/options';

export default {
  component: Filters,
  title: 'components/Filters',
} as Meta;

export const Default: StoryFn = () => (
  <Filters
    fields={fields}
    isCancelEnabled
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const WithState: StoryFn = () => (
  <Filters
    fields={fields}
    state={state}
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const UnappliedFilters: StoryFn = () => (
  <Filters
    fields={fields}
    state={stateWithUnappliedFilters}
    onApply={action('onApply')}
    onCancel={action('onCancel')}
    onChange={action('onChange')}
  />
);

export const FetchingResults: StoryFn = () => (
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

export const WithFixedOperator: StoryFn = () => (
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

export const WithCloseButton: StoryFn = () => (
  <Filters
    fields={fields}
    state={state}
    onApply={action('onApply')}
    onClose={action('onClose')}
  />
);

export const WithoutApplyButton: StoryFn = () => (
  <Filters
    fields={fields}
    state={state}
    onChange={action('onChange')}
    onError={action('onError')}
  />
);
