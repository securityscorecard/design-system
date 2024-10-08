import { Meta, StoryFn } from '@storybook/react';
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
  argTypes: {
    fields: {
      control: { disable: true },
    },
    state: {
      control: { disable: true },
    },
  },
} as Meta;

const Wrapper = styled(Padbox)`
  margin-left: ${pxToRem(60)};
`;

export const Playground: StoryFn = (args) => (
  <Wrapper>
    <Filters fields={fieldsTagsInput} onApply={action('onApply')} {...args} />
  </Wrapper>
);

export const TagsInput: StoryFn = () => (
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

export const TagsInputValidation: StoryFn = () => (
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

export const TagsInputPlaceholderUnits: StoryFn = () => (
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
