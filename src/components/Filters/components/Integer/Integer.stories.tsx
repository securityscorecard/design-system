import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
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
} as Meta;

const Wrapper = styled(Padbox)`
  margin-left: ${pxToRem(60)};
`;

export const Integer: Story = () => (
  <Wrapper>
    <Filters
      fields={fieldsInteger}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
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
