import type { Meta, Story } from '@storybook/react/types-6-0';
import type { ToastProps } from './Toast.types';

import { action } from '@storybook/addon-actions';
import { noop } from 'ramda-adjunct';

import Button from '../Button/Button';
import { Inline, Stack } from '../layout';
import { SpaceSizes } from '../../theme';
import Toast from './Toast';
import { ToastVariants } from './Toast.enums';
import { generateControl } from '../../utils/tests/storybook';

const styles = {
  transform: 'scale(1)',
  height: '200px',
};

export default {
  title: 'components/Toast',
  component: Toast,
  decorators: [(storyFn) => <div style={styles}>{storyFn()}</div>],
  argTypes: {
    variant: {
      ...generateControl('select', ToastVariants),
    },
  },
} as Meta;

export const Playground: Story<ToastProps> = (args) => (
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

export const InfoToastNoAction: Story = () => (
  <Toast variant={ToastVariants.info} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const SuccessToastNoAction: Story = () => (
  <Toast variant={ToastVariants.success} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const WarnToastNoAction: Story = () => (
  <Toast variant={ToastVariants.warn} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

export const ErrorToastNoAction: Story = () => (
  <Toast variant={ToastVariants.error} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);

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

export const LoadingToastVariant: Story = () => (
  <Toast variant={ToastVariants.loading} onClose={action('close-toast')}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non massa a
      lacus posuere.
    </p>
  </Toast>
);
