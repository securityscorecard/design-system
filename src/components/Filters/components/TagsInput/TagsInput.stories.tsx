import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsTagsInput,
  fieldsTagsInputPlaceholderUnits,
  fieldsTagsInputValidation,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/TagsInput',
} as Meta;

const Wrapper = styled(Padbox)`
  margin-left: ${pxToRem(60)};
`;
export const TagsInput: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsTagsInput}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const TagsInputValidation: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsTagsInputValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const TagsInputPlaceholderUnits: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsTagsInputPlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);
