import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import CloseButton from './CloseButton';

export default {
  title: 'components/CloseButton',
  component: CloseButton,
} as Meta;

export const Default: Story = () => <CloseButton onClose={action('onClose')} />;
