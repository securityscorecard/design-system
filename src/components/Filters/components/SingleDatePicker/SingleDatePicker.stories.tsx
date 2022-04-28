import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
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

export const Playground: Story = (args) => (
  <Wrapper>
    <Filters fields={fieldsSingleDate} onApply={action('onApply')} {...args} />
  </Wrapper>
);

export const SingleDate: Story = () => (
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

export const SingleDatePlaceholderUnits: Story = () => (
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
