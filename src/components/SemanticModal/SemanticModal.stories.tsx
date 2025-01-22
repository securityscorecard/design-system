import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Link, MemoryRouter } from 'react-router-dom';
import { useState } from 'react';

import SemanticModal from './SemanticModal';
import { SemanticModalVariants } from './SemanticModal.enums';
import { Inline, Padbox, Stack } from '../layout';
import { Button } from '../Button';
import { SpaceSizes } from '../../theme';

const meta = {
  title: 'components/modals/SemanticModal',
  component: SemanticModal,
  parameters: {
    docs: {
      story: { inline: false, height: 500 },
    },
  },
  args: {
    actions: [
      {
        label: 'Secondary',
        name: 'Secondary',
        onClick: action('click-action-secondary'),
      },
      {
        label: 'Primary',
        name: 'Primary',
        onClick: action('click-action-primary'),
      },
    ],
    message:
      'You can replace this with a local component. You can also just override the text, but keep in mind that you might lose content that way.',
    title: 'This is a placeholder',
    onClose: action('close-modal'),
  },
  argTypes: {
    variant: {
      description: 'Semantic type of modal',
      control: { type: 'select' },
      options: Object.values(SemanticModalVariants),
    },
    message: {
      description: 'Main message text field',
    },
    onClose: {
      description: 'Action executed on CloseButton click',
    },
    title: {
      description: 'Message heading',
    },
    isPrimaryButtonLoading: {
      description:
        'When certain process is still running, you can set the primary button to "loading" state',
    },
    loadingText: { description: 'Loading state text' },
    actions: {
      description: 'An array of action items that are rendered as buttons',
      control: { disable: true },
    },
    primaryButtonColor: {
      description:
        'Changes the colour of the primary button so the priamry action can match the message',
      control: { type: 'select' },
      options: ['primary', 'danger'],
    },
  },
} satisfies Meta<typeof SemanticModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [isShown, setIsShown] = useState(false);

    return (
      <Padbox paddingSize={SpaceSizes.xxl}>
        <Inline justify="center">
          <Button onClick={() => setIsShown(!isShown)}>
            Open semantic modal
          </Button>
        </Inline>
        {isShown && (
          <SemanticModal {...args} onClose={() => setIsShown(false)} />
        )}
      </Padbox>
    );
  },
  parameters: {
    screenshot: { skip: true },
    docs: {
      source: { type: 'code' },
    },
  },
};

export const Success: Story = {
  args: {
    variant: SemanticModalVariants.success,
  },
};

export const Warn: Story = {
  args: {
    variant: SemanticModalVariants.warn,
  },
};

export const Error: Story = {
  args: {
    variant: SemanticModalVariants.error,
  },
};

export const Ban: Story = {
  args: {
    variant: SemanticModalVariants.ban,
    primaryButtonColor: 'danger',
  },
};

export const MultiParagraphMessage: Story = {
  args: {
    message: (
      <Stack gap="md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
          dignissim enim. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
        <p>
          Duis sem eros, ultrices eu mi eget, blandit vestibulum mauris.
          Pellentesque at hendrerit orci. Aliquam vel ligula lectus. Curabitur
          varius sed mauris ut aliquam. Integer sed iaculis quam, eget dignissim
          nulla.
        </p>
      </Stack>
    ),
  },
};

export const WithRouting: Story = {
  args: {
    actions: [
      {
        label: '"A" tag with href',
        name: 'Secondary',
        onClick: action('click-action-secondary'),
        as: 'a',
        href: 'https://google.com',
      },
      {
        label: 'React Router Link',
        name: 'Primary',
        onClick: action('click-action-primary'),
        as: Link,
        to: '/abc',
      },
    ],
  },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    screenshot: { skip: true },
  },
};
