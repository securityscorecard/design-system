import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import Collapsible from './Collapsible';
import { Button } from '../Button';
import { Snippet } from '../Snippet';
import { Stack } from '../layout';

export default {
  component: Collapsible,
  title: 'components/Collapsible',
} as Meta<typeof Collapsible>;

type Story = StoryFn<typeof Collapsible>;

export const Playground: Story = (args) => <Collapsible {...args} />;
Playground.args = {
  title: 'playground',
  subject: 'Collapsible',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus',
};
Playground.parameters = { screenshot: { skip: true } };

export const DefaultCollapsible: Story = (args) => <Collapsible {...args} />;
DefaultCollapsible.args = {
  subject: 'Website does not implement X-XSS-Protection Best Practices',
  title: 'Resolve or Comment',
  onOpen: action('onOpen'),
  children:
    'You have 256 findings related to Website does not implement X-XSS-Protection Best Practices',
};

export const OpenedCollapsible: Story = (args) => <Collapsible {...args} />;
OpenedCollapsible.args = {
  ...DefaultCollapsible.args,
  defaultIsOpen: true,
};

export const ControlledCollapsible: Story = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Stack gap="md">
      <Collapsible
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        {...args}
      />

      <Button
        variant="outline"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Toggle
      </Button>
      <Snippet>
        {`{
          isOpen: ${isOpen},
        }`}
      </Snippet>
    </Stack>
  );
};
ControlledCollapsible.args = DefaultCollapsible.args;
ControlledCollapsible.parameters = { screenshot: { skip: true } };
