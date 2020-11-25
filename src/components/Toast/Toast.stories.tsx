import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import Toast from './Toast';
import Button from '../Button/Button';

export default {
  title: 'components/Toast',
  component: Toast,
  decorators: [
    (storyFn) => (
      <div style={{ padding: '25px', marginBottom: '25px' }}>{storyFn()}</div>
    ),
  ],
} as Meta;

export const DefaultToast: Story = () => (
  <Toast onClose={action('close-toast')}>This is a notification.</Toast>
);
DefaultToast.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const LongToast: Story = () => (
  <Toast onClose={action('close-toast')}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere velit
    magna, id scelerisque neque tristique sit amet. Nam mollis odio enim, sit
    amet auctor arcu elementum ut. Ut eget iaculis tortor.
    <Button variant="text">Action</Button>
  </Toast>
);
LongToast.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};
