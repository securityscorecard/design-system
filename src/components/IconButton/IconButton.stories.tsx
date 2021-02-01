import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { SSCIconNames } from '../../theme/icons/icons.enums';
import IconButton from './IconButton';
import { IconButtonProps } from './IconButton.types';

export default {
  title: 'components/IconButton',
  component: IconButton,
} as Meta;

export const DefaultIconButton: Story<IconButtonProps> = () => (
  <IconButton iconName={SSCIconNames.wrench} label="Wrench" />
);
