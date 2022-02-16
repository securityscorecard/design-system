import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import Button from '../Button/Button';
import { Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import Toast from './Toast';
import { ToastVariants } from './Toast.enums';

export default {
  title: 'components/Toast',
  component: Toast,
  parameters: {
    docs: { inlineStories: false, iframeHeight: 200, source: { type: 'code' } },
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

export const InfoToastNoAction: Story = () => (
  <Toast variant={ToastVariants.info} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);
InfoToastNoAction.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const SuccessToastNoAction: Story = () => (
  <Toast variant={ToastVariants.success} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);
SuccessToastNoAction.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const WarnToastNoAction: Story = () => (
  <Toast variant={ToastVariants.warn} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);
WarnToastNoAction.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const ErrorToastNoAction: Story = () => (
  <Toast variant={ToastVariants.error} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);
ErrorToastNoAction.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};

export const InfoToastWithActions: Story = () => (
  <Toast variant={ToastVariants.info} onClose={action('close-toast')}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa
        a lacus posuere.
      </p>
      <Inline gap={SpaceSizes.mdPlus}>
        <Button variant="text">Action A</Button>
        <Button variant="text">Action B</Button>
      </Inline>
    </Stack>
  </Toast>
);
InfoToastWithActions.parameters = {
  chromatic: { pauseAnimationAtEnd: true },
};
