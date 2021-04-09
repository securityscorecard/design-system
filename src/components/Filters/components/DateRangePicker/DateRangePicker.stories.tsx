import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import {
  fieldsDateRange,
  fieldsDateRangePlaceholderUnits,
  fieldsDateRangeValidation,
} from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/DateRangePicker',
} as Meta;

export const DateRange: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsDateRange}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const DateRangeValidation: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsDateRangeValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const DateRangePlaceholderUnits: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsDateRangePlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
