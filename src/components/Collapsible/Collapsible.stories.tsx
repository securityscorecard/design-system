import type { Meta, Story } from '@storybook/react';
import type { ReactChild } from 'react';
import type { CollapsibleProps } from './Collapsible.types';

import { action } from '@storybook/addon-actions';

import Collapsible from './Collapsible';

export default {
  component: Collapsible,
  title: 'components/Collapsible',
} as Meta;

export const Playground: Story<CollapsibleProps & { children: ReactChild }> = (
  args,
) => <Collapsible {...args} />;
Playground.args = {
  title: 'playground',
  subject: 'Collapsible',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus',
};
Playground.parameters = {
  screenshot: { skip: true },
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
