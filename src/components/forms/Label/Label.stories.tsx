import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Label from './Label';

export default {
  title: 'components/forms/Label',
  component: Label,
} as Meta;

export const Default: StoryFn = () => <Label>First name</Label>;
