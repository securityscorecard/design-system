import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
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

export const Input: Story = () => (
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

export const InputValidationMaxLength: Story = () => (
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

export const ExternalValidationDomain: Story = () => (
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

export const ExternalValidationIps: Story = () => (
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

export const InputPlaceholderUnits: Story = () => (
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
