import type { Meta, Story } from '@storybook/react/types-6-0';
import type { WizardModalProps } from './WizardModal.types';

import { action } from '@storybook/addon-actions';

import WizardModal from './WizardModal';
import { Inline, Padbox, Stack } from '../layout';
import { H2, Paragraph } from '../typographyLegacy';
import { Button, ButtonEnums } from '../Button';
import { SpaceSizes } from '../../theme';

export default {
  title: 'components/modals/WizardModal',
  component: WizardModal,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      source: { type: 'code' },
    },
  },
} as Meta;

function Text() {
  return (
    <Paragraph>
      You can replace this with a local component. You can also just override
      the text, but keep in mind that you might lose content that way in case we
      happend to change the underlying component. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </Paragraph>
  );
}

function Heading() {
  return <H2>This is a placeholder</H2>;
}

function Actions() {
  return (
    <Inline gap={SpaceSizes.md} justify="flex-end">
      <Button
        variant={ButtonEnums.ButtonVariants.outline}
        onClick={action('action1')}
      >
        Secondary
      </Button>
      <Button
        variant={ButtonEnums.ButtonVariants.solid}
        onClick={action('action1')}
      >
        Primary
      </Button>
    </Inline>
  );
}

const Content = () => (
  <Padbox paddingSize={SpaceSizes.md}>
    <Stack gap={SpaceSizes.md}>
      <Heading />
      <Text />
      <Actions />
    </Stack>
  </Padbox>
);

export const Playground: Story<WizardModalProps> = (args) => (
  <WizardModal {...args}>
    <Content />
  </WizardModal>
);
