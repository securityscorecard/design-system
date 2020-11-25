import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Label } from '../Label';
import { Input } from '../Input';
import FormFieldWrapper from './FormFieldWrapper';

export default {
  title: 'components/forms/FormFieldWrapper',
  component: FormFieldWrapper,
} as Meta;

export const Example: Story = () => (
  <>
    <FormFieldWrapper>
      <Label id="email">Email</Label>
      <Input
        aria-labelledby="email"
        placeholder="john.doe@example.com"
        type="email"
      />
    </FormFieldWrapper>
    <FormFieldWrapper>
      <Label id="name">Name</Label>
      <Input aria-labelledby="name" />
    </FormFieldWrapper>
  </>
);
