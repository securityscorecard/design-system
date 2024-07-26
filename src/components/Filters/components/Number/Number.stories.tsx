import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsNumber,
  fieldsNumberPlaceholderUnits,
  fieldsNumberValidation,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/Number',
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
    <Filters fields={fieldsNumber} onApply={action('onApply')} {...args} />
  </Wrapper>
);

export const NumberValidation: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsNumberValidation}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const NumberPlaceholderUnits: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsNumberPlaceholderUnits}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);
