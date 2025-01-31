import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from './Modal';
import { H5 } from '../Heading';
import Paragraph from '../Paragraph/Paragraph';
import { Inline, Padbox } from '../layout';
import { Button } from '../Button';
import { Tooltip } from '../Tooltip';

const meta = {
  title: 'components/modals/Modal',
  component: Modal,
  parameters: {
    docs: {
      story: { inline: false, height: 500 },
      source: { type: 'code' },
    },
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    footer: {
      control: { disable: true },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

function Footer() {
  return (
    <Inline gap="4x" justify="flex-end">
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </Inline>
  );
}

export const Playground: Story = {
  render: function Render(args) {
    const [isShown, setIsShown] = useState(false);

    return (
      <Padbox paddingSize="32x">
        <Inline justify="center">
          <Button onClick={() => setIsShown(!isShown)}>Open modal</Button>
          {isShown && <Modal {...args} onClose={() => setIsShown(false)} />}
        </Inline>
      </Padbox>
    );
  },
  args: {
    footer: <Footer />,
    title: 'Title',
    children: (
      <>
        <H5 style={{ margin: 0 }}>This is a placeholder</H5>
        <Paragraph size="md" style={{ marginBottom: 0 }}>
          You can replace this with a local component. You can also just
          override the text, but{' '}
          <Tooltip popup="I'm tooltip">keep in mind</Tooltip> that you might
          lose content that way in case we happend to change the underlying
          component. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </Paragraph>
      </>
    ),
    onClose: action('close-modal'),
  },
  parameters: {
    screenshot: { skip: true },
  },
};

export const WithTitle: Story = {
  args: Playground.args,
};

export const WithLongContent: Story = {
  args: {
    ...Playground.args,
    children: (
      <>
        <H5 style={{ margin: 0 }}>This is a placeholder</H5>
        <Paragraph size="md" style={{ marginBottom: 0 }}>
          You can replace this with a local component. You can also just
          override the text, but keep in mind that you might lose content that
          way in case we happend to change the underlying component. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    ...Playground.args,
    title: undefined,
  },
};

export const WithoutFooter: Story = {
  args: {
    ...Playground.args,
    footer: undefined,
  },
};

export const SizeXs: Story = {
  args: {
    ...Playground.args,
    size: 'xs',
  },
};
export const SizeSm: Story = {
  args: {
    ...Playground.args,
    size: 'sm',
  },
};
export const SizeMd: Story = {
  args: {
    ...Playground.args,
    size: 'md',
  },
};
export const SizeLg: Story = {
  args: {
    ...Playground.args,
    size: 'lg',
  },
};
export const SizeXL: Story = {
  args: {
    ...Playground.args,
    size: 'xl',
  },
};
