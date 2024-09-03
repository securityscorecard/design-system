import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';
import { noop } from 'ramda-adjunct';

import Button from '../Button/Button';
import { Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import Toast from './Toast';
import { ToastVariants } from './Toast.enums';
import { ToastProps } from './Toast.types';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Toast',
  component: Toast,
  argTypes: {
    variant: {
      ...generateControl('select', ToastVariants),
    },
  },
  parameters: {
    docs: {
      story: { inline: false, height: 200 },
    },
  },
} as Meta;

export const Playground: StoryFn<ToastProps> = (args) => (
  <Toast {...args}>
    <Stack gap={SpaceSizes.sm} justify="flex-start">
      <p>This is a notification.</p>
      <Button variant="text">Action</Button>
    </Stack>
  </Toast>
);

Playground.args = {
  onClose: noop,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const LongToast: StoryFn = () => (
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

export const TwoActions: StoryFn = () => (
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

export const CustomWidthToast: StoryFn = () => (
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

export const InfoToastNoAction: StoryFn = () => (
  <Toast variant={ToastVariants.info} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const SuccessToastNoAction: StoryFn = () => (
  <Toast variant={ToastVariants.success} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const WarnToastNoAction: StoryFn = () => (
  <Toast variant={ToastVariants.warn} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const ErrorToastNoAction: StoryFn = () => (
  <Toast variant={ToastVariants.error} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const InfoToastWithActions: StoryFn = () => (
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

export const LoadingToastVariant: StoryFn = () => (
  <Toast variant={ToastVariants.loading} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);
