import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

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
    size: {
      ...generateControl('select', UserAvatarSizes),
    },
  },
} as Meta;

const UserAvatarTemplate: Story<UserAvatarProps> = (args) => (
  <UserAvatar {...args} />
);

export const Playground = UserAvatarTemplate.bind({});
Playground.args = {
  label: 'AB',
  size: UserAvatarSizes.md,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DifferentSizes: Story<UserAvatarProps> = (args) => (
  <Inline align="center" gap={SpaceSizes.lg}>
    <UserAvatar {...args} size={UserAvatarSizes.sm} />
    <UserAvatar {...args} size={UserAvatarSizes.md} />
  </Inline>
);
DifferentSizes.args = {
  label: Playground.args.label,
};

export const NormalizeText = UserAvatarTemplate.bind({});
NormalizeText.args = {
  label: 'cdab long text with spaces',
};

export const InvertedColors = UserAvatarTemplate.bind({});
InvertedColors.args = {
  ...Playground.args,
  isInverted: true,
  onClick: action('onClick'),
};
InvertedColors.parameters = {
  backgrounds: {
    default: 'primary',
    values: [
      {
        name: 'primary',
        value: '#4d29d4',
      },
    ],
  },
};

export const InteractiveAvatar = UserAvatarTemplate.bind({});
InteractiveAvatar.args = {
  ...Playground.args,
  onClick: action('onClick'),
};
InteractiveAvatar.parameters = {
  screenshot: { skip: true },
};
