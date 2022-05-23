import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { generateControl } from '../../utils/tests/storybook';
import UserAvatar from './UserAvatar';
import { UserAvatarProps } from './UserAvatar.types';
import { UserAvatarSizes } from './UserAvatar.enums';
import { Inline } from '../layout';
import { SpaceSizes } from '../../theme';

export default {
  title: 'components/UserAvatar',
  component: UserAvatar,
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      ...generateControl('select', UserAvatarSizes),
    },
  },
} as Meta;

export const Playground: Story<UserAvatarProps> = (args) => (
  <UserAvatar {...args} />
);
Playground.args = {
  label: 'AB',
  size: UserAvatarSizes.md,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DifferentSizes: Story<UserAvatarProps> = () => (
  <Inline align="center" gap={SpaceSizes.lg}>
    <UserAvatar label="AB" size={UserAvatarSizes.sm} />
    <UserAvatar label="AB" size={UserAvatarSizes.md} />
  </Inline>
);

export const NormalizeText: Story<UserAvatarProps> = () => (
  <UserAvatar label="cdab long text with spaces" />
);
