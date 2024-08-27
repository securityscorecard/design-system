import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Inline } from '../../../layout';
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

export const Default: StoryFn<ControlButtonProps> = (args) => (
  <Inline align="center" gap="sm">
    <ControlButton {...args} />
    <ControlButton {...args} hiddenColumns={4} />
    <ControlButton {...args} appliedFilters={4} />
  </Inline>
);

Default.args = {
  iconName: SSCIconNames.cog,
  label: 'Toolname',
  onClick: action('ControlButton click'),
};

Default.argTypes = {
  appliedFilters: {
    control: { type: 'number' },
  },
};
