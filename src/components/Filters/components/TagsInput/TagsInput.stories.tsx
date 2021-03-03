import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Filters from '../../Filters';
import { FlexContainer } from '../../../FlexContainer';
import {
  fieldsTagsInput,
  fieldsTagsInputValidation,
} from '../../mocks/options';

export default {
  component: Filters,
  title: 'components/Filters/components/TagsInput',
} as Meta;

export const TagsInput: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsTagsInput}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);

export const TagsInputValidation: Story = () => (
  <FlexContainer margin={{ left: 3 }}>
    <Filters
      fields={fieldsTagsInputValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </FlexContainer>
);
