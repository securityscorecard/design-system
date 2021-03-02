import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import { fieldsInteger } from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/Integer',
} as Meta;

export const Integer: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsInteger}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
