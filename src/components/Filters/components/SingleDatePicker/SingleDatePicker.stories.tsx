import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import {
  fieldsSingleDate,
  fieldsSingleDatePlaceholderUnits,
} from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/SingleDatePicker',
} as Meta;

export const SingleDate: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsSingleDate}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const SingleDatePlaceholderUnits: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsSingleDatePlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
