import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import Button from '../Button/Button';
import { Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import Toast from './Toast';

export default {
  title: 'components/Toast',
  component: Toast,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 250, source: { type: 'code' } },
  },
} as Meta;

export const DefaultToast: Story = () => (
  <Toast onClose={action('close-toast')}>This is a notification.</Toast>
);
DefaultToast.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const LongToast: Story = () => (
  <Toast onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
        velit magna, id scelerisque neque tristique sit amet. Nam mollis odio
        enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor.
      </p>
      <Button variant="text">Action</Button>
    </Stack>
  </Toast>
);
LongToast.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const TwoActions: Story = () => (
  <Toast onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
        velit magna, id scelerisque neque tristique sit amet. Nam mollis odio
        enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor.
      </p>
      <Inline gap={SpaceSizes.mdPlus}>
        <Button variant="text">Action A</Button>
        <Button variant="text">Action B</Button>
      </Inline>
    </Stack>
  </Toast>
);
LongToast.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const CustomWidthToast: Story = () => (
  <Toast width={470} onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere
        velit magna, id scelerisque neque tristique sit amet. Nam mollis odio
        enim, sit amet auctor arcu elementum ut. Ut eget iaculis tortor.
      </p>
      <Button variant="text">Action</Button>
    </Stack>
  </Toast>
);
CustomWidthToast.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};
