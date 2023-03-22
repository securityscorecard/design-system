import type { Meta, Story } from '@storybook/react/types-6-0';

import Label from './Label';

export default {
  title: 'components/forms/Label',
  component: Label,
} as Meta;

export const Default: Story = () => <Label>First name</Label>;
