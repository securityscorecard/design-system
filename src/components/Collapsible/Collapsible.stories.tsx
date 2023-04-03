import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';

import Collapsible from './Collapsible';
import { CollapsibleProps } from './Collapsible.types';
import { CollapsibleVariants } from './Collapsible.enums';

export default {
  component: Collapsible,
  title: 'components/Collapsible',
} as Meta;

export const Playground: Story<
  CollapsibleProps & { children: React.ReactChild }
> = (args) => <Collapsible {...args} />;
Playground.args = {
  title: 'Title',
  subject: 'Collapsible',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Inline: Story = () => (
  <Collapsible
    subtitle="Subtitle"
    title="Title"
    variant={CollapsibleVariants.inline}
  >
    Content placeholder: Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry&apos;s standard
    dummy text ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it to make a type specimen book. It has survived not only
    five centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with
    desktop publishing software like Aldus PageMaker including versions of Lorem
    Ipsum.
  </Collapsible>
);

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
