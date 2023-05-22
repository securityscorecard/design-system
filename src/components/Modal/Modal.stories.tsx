import type { Meta, Story } from '@storybook/react';
import type { ModalProps } from './Modal.types';

import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Modal from './Modal';
import { ModalSizes } from './Modal.enums';
import { H5, Paragraph } from '../typographyLegacy';
import { Inline, Padbox } from '../layout';
import { Button } from '../Button';
import { generateControl } from '../../utils/tests/storybook';
import { SpaceSizes } from '../../index';

export default {
  title: 'components/modals/Modal',
  component: Modal,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
      source: { type: 'code' },
    },
  },
  argTypes: {
    size: {
      ...generateControl('select', ModalSizes),
    },
    footer: {
      control: { disable: true },
    },
  },
} as Meta;

function Footer() {
  return (
    <Inline gap={SpaceSizes.md} justify="flex-end">
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </Inline>
  );
}

export const Playground: Story<ModalProps> = (args) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Padbox paddingSize={SpaceSizes.xxl}>
      <Inline justify="center">
        <Button onClick={() => setIsShown(!isShown)}>Open modal</Button>
        {isShown && (
          <Modal
            footer={<Footer />}
            title="Title"
            onClose={() => setIsShown(false)}
            {...args}
          >
            <H5 style={{ margin: 0 }}>This is a placeholder</H5>
            <Paragraph size="md" style={{ marginBottom: 0 }}>
              You can replace this with a local component. You can also just
              override the text, but keep in mind that you might lose content
              that way in case we happend to change the underlying component.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </Modal>
        )}
      </Inline>
    </Padbox>
  );
};

Playground.parameters = {
  screenshot: { skip: true },
};

export const WithTitle: Story = () => (
  <Modal footer={<Footer />} title="Title" onClose={action('close-modal')}>
    <H5 style={{ margin: 0 }}>This is a placeholder</H5>
    <Paragraph size="md" style={{ marginBottom: 0 }}>
      You can replace this with a local component. You can also just override
      the text, but keep in mind that you might lose content that way in case we
      happend to change the underlying component. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Paragraph>
  </Modal>
);

export const WithLongContent: Story = () => (
  <Modal footer={<Footer />} title="Title" onClose={action('close-modal')}>
    <H5 style={{ margin: 0 }}>This is a placeholder</H5>
    <Paragraph size="md" style={{ marginBottom: 0 }}>
      You can replace this with a local component. You can also just override
      the text, but keep in mind that you might lose content that way in case we
      happend to change the underlying component. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </Paragraph>
  </Modal>
);

export const WithoutTitle: Story = () => (
  <Modal footer={<Footer />} onClose={action('close-modal')}>
    <H5 style={{ margin: 0 }}>This is a placeholder</H5>
    <Paragraph size="md" style={{ marginBottom: 0 }}>
      You can replace this with a local component. You can also just override
      the text, but keep in mind that you might lose content that way in case we
      happend to change the underlying component. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Paragraph>
  </Modal>
);

export const WithoutFooter: Story = () => (
  <Modal title="Simple modal" onClose={action('close-modal')}>
    <H5 style={{ margin: 0 }}>This is a placeholder</H5>
    <Paragraph size="md" style={{ marginBottom: 0 }}>
      You can replace this with a local component. You can also just override
      the text, but keep in mind that you might lose content that way in case we
      happend to change the underlying component. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Paragraph>
  </Modal>
);
