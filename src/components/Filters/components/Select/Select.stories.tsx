import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import {
  fieldsSelect,
  fieldsSelectMultiValue,
  fieldsSelectWithDefaultValue,
} from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/Select',
} as Meta;

export const Select: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsSelect}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const SelectWithDefaultValue: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsSelectWithDefaultValue}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const SelectMultiValue: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsSelectMultiValue}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
