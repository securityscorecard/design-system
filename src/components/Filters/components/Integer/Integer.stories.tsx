import type { Meta, Story } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsInputPlaceholderUnits,
  fieldsInteger,
  fieldsIntegerValidation,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/Integer',
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

export const Playground: Story = (args) => (
  <Wrapper>
    <Filters fields={fieldsInteger} onApply={action('onApply')} {...args} />
  </Wrapper>
);

export const IntegerValidation: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsIntegerValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const IntegerPlaceholderUnits: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsInputPlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);
