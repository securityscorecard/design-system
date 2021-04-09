import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import {
  fieldsNumber,
  fieldsNumberPlaceholderUnits,
  fieldsNumberValidation,
} from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/Number',
} as Meta;

export const Number: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsNumber}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const NumberValidation: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsNumberValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const NumberPlaceholderUnits: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsNumberPlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
