import { Meta, StoryFn } from '@storybook/react';

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
} as Meta<typeof Icon>;

type Story = StoryFn<typeof Icon>;

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
    <Icon {...args} size="sm" type="ssc" />
    <Icon {...args} size="md" type="ssc" />
    <Icon {...args} size="lg" type="ssc" />
    <Icon {...args} size="xl" type="ssc" />
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
  name: 'upload',
  size: 'xl',
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
