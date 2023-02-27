import React from 'react';
import { Meta, Story } from '@storybook/react';

import Label from './Label';

export default {
  title: 'components/forms/Label',
  component: Label,
} as Meta;

export const Default: Story = () => <Label>First name</Label>;
