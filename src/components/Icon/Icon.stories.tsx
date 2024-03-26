import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from './Icon';
import { SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';
import { Inline, Stack } from '../layout';

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    name: {
      ...generateControl('select', SSCIconNames),
    },
  },
} as ComponentMeta<typeof Icon>;

type Story = ComponentStory<typeof Icon>;

export const Playground: Story = (args) => <Icon {...args} />;
Playground.args = {
  name: 'wrench',
  color: 'neutral.900',
  size: 'xl',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Color: Story = (args) => <Icon {...args} />;
Color.args = {
  name: 'error-circle',
  color: 'error.500',
  size: 'xl',
};

export const Size: Story = (args) => (
  <Inline gap="md">
    <Icon size="sm" {...args} />
    <Icon size="md" {...args} />
    <Icon size="lg" {...args} />
    <Icon size="xl" {...args} />
  </Inline>
);
Size.args = {
  name: 'eye',
};

export const Rotation: Story = (args) => (
  <Inline gap="md">
    <Icon {...args} />
    <Icon rotation={90} {...args} />
    <Icon rotation={180} {...args} />
    <Icon rotation={270} {...args} />
  </Inline>
);
Rotation.args = {
  name: 'long-arrow-left',
  size: 'xl',
};

export const Flip: Story = (args) => (
  <Inline gap="md">
    <Icon {...args} />
    <Icon flip="horizontal" {...args} />
    <Icon flip="vertical" {...args} />
    <Icon flip="both" {...args} />
  </Inline>
);
Flip.args = {
  name: 'wrench',
  size: 'xl',
};

export const FreeTransform: Story = (args) => (
  <Stack gap="lg">
    <Inline gap="lg">
      <Icon transform="shrink-8" {...args} />
      <Icon {...args} />
      <Icon transform="grow-8" {...args} />
    </Inline>

    <Inline gap="lg">
      <Icon transform="shrink-8" {...args} />
      <Icon transform="shrink-8 up-6" {...args} />
      <Icon transform="shrink-8 up-6 right-6" {...args} />
      <Icon transform="shrink-8 right-6" {...args} />
      <Icon transform="shrink-8 down-6 right-6" {...args} />
      <Icon transform="shrink-8 down-6" {...args} />
      <Icon transform="shrink-8 down-6 left-6" {...args} />
      <Icon transform="shrink-8 left-6" {...args} />
      <Icon transform="shrink-8 up-6 left-6" {...args} />
    </Inline>

    <Inline gap="lg">
      <Icon {...args} />
      <Icon transform="rotate-45" {...args} />
      <Icon transform="rotate-90" {...args} />
      <Icon transform="rotate-135" {...args} />
      <Icon transform="rotate-180" {...args} />
      <Icon transform="rotate--135" {...args} />
      <Icon transform="rotate--90" {...args} />
      <Icon transform="rotate--45" {...args} />
    </Inline>

    <Inline gap="lg">
      <Icon {...args} />
      <Icon transform="flip-v" {...args} />
      <Icon transform="flip-h" {...args} />
      <Icon transform="flip-v flip-h" {...args} />
    </Inline>
  </Stack>
);
FreeTransform.args = {
  name: 'filter',
  size: 'xl',
  style: { background: 'mistyrose' },
};

export const UnorderedList: Story = (args) => (
  <Stack as="ul" className="fa-ul" gap="sm">
    <li>
      <Icon {...args} /> list item
    </li>
    <li>
      <Icon {...args} /> list item
    </li>
    <li>
      <Icon {...args} /> list item
    </li>
    <li>
      <Icon {...args} /> list item
    </li>
  </Stack>
);
UnorderedList.args = {
  name: 'check',
  listItem: true,
  color: 'success.500',
};
