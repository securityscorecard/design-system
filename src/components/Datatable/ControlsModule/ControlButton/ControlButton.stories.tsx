import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../../../FlexContainer';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import ControlButton from './ControlButton';
import { ControlButtonProps } from './ControlButton.types';

export default {
  title: 'components/Datatable/internalComponents/ControlsModule/ControlButton',
  component: ControlButton,
  parameters: {
    viewMode: 'story',
    docs: { disable: true },
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

export const Default: Story<ControlButtonProps> = (args) => (
  <>
    <FlexContainer alignItems="center" flexWrap="wrap" margin={{ bottom: 1 }}>
      <ControlButton {...args} />
      <ControlButton {...args} isActive />
      <ControlButton {...args} isApplied />
    </FlexContainer>
    <FlexContainer alignItems="center" flexWrap="wrap" margin={{ bottom: 1 }}>
      <ControlButton {...args} className="hover" />
      <ControlButton {...args} className="hover" isActive />
      <ControlButton {...args} className="hover" isApplied />
    </FlexContainer>
  </>
);

Default.args = {
  iconName: SSCIconNames.cog,
  label: 'Toolname',
  onClick: action('ControlButton click'),
};

Default.argTypes = {
  isActive: {
    control: { type: 'boolean' },
  },
  isApplied: {
    control: { type: 'boolean' },
  },
};
