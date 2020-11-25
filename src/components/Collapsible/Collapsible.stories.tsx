import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import Collapsible from './Collapsible';
import { CollapsibleProps } from './Collapsible.types';

export default {
  component: Collapsible,
  title: 'components/Collapsible',
} as Meta;

export const playground: Story<CollapsibleProps> = (args) => (
  <Collapsible {...args} />
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  title: { control: 'text', defaultValue: 'playground' },
  subject: { control: 'text', defaultValue: 'Collapsible' },
  defaultIsOpened: { control: 'boolean', defaultValue: false },
  children: {
    control: 'text',
    defaultValue:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus',
  },
};

export const DefaultCollapsible: Story = () => (
  <Collapsible
    subject="Website does not implement X-XSS-Protection Best Practices"
    title="Resolve or Comment"
    onOpen={action('onOpen')}
  >
    You have 256 findings related to Website does not implement X-XSS-Protection
    Best Practices
  </Collapsible>
);

export const OpenedCollapsible: Story = () => (
  <Collapsible
    subject="Website does not implement X-XSS-Protection Best Practices"
    title="Resolve or Comment"
    defaultIsOpened
  >
    You have 256 findings related to Website does not implement X-XSS-Protection
    Best Practices
  </Collapsible>
);
