import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsSelect,
  fieldsSelectMultiValue,
  fieldsSelectPlaceholder,
  fieldsSelectWithDefaultValue,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/Select',
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
    <Filters fields={fieldsSelect} onApply={action('onApply')} {...args} />
  </Wrapper>
);

export const SelectWithDefaultValue: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsSelectWithDefaultValue}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const SelectMultiValue: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsSelectMultiValue}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const SelectPlaceholder: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsSelectPlaceholder}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);
