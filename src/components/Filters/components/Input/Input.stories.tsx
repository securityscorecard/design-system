import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Filters from '../../Filters';
import { Padbox } from '../../../layout';
import {
  fieldsInput,
  fieldsInputMaxLength,
  fieldsInputPlaceholderUnits,
  fieldsValidateDomainsExternal,
  fieldsValidateIPsExternal,
} from '../../mocks/options';
import { pxToRem } from '../../../../utils';

export default {
  component: Filters,
  title: 'components/Filters/components/Input',
} as Meta;

const Wrapper = styled(Padbox)`
  margin-left: ${pxToRem(60)};
`;

export const Input: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsInput}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const InputValidationMaxLength: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsInputMaxLength}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const ExternalValidationDomain: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsValidateDomainsExternal}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const ExternalValidationIps: StoryFn = () => (
  <Wrapper>
    <Filters
      fields={fieldsValidateIPsExternal}
      onApply={action('onApply')}
      onCancel={action('onCancel')}
      onChange={action('onChange')}
      onClose={action('onClose')}
    />
  </Wrapper>
);

export const InputPlaceholderUnits: StoryFn = () => (
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
