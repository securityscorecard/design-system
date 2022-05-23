import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import IconButton from './IconButton';
import { IconButtonProps } from './IconButton.types';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/IconButton',
  component: IconButton,
  argTypes: {
    iconName: {
      ...generateControl('select', SSCIconNames),
    },
  },
} as Meta;

export const Playground: Story<IconButtonProps> = (args) => (
  <IconButton {...args} />
);
Playground.args = {
  iconName: SSCIconNames.wrench,
  label: 'iconButton',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const DefaultIconButton: Story<IconButtonProps> = () => (
  <IconButton iconName={SSCIconNames.wrench} label="Wrench" />
);
