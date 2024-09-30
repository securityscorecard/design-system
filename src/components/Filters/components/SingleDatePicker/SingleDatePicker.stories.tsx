import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsSingleDate,
  fieldsSingleDatePlaceholderUnits,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/SingleDatePicker',
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
    <Filters fields={fieldsSingleDate} onApply={action('onApply')} {...args} />
  </Wrapper>
);

export const SingleDate: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsSingleDate}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const SingleDatePlaceholderUnits: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsSingleDatePlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);
