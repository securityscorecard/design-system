import type { Meta, Story } from '@storybook/react';
import type { ControlButtonProps } from './ControlButton.types';

import { action } from '@storybook/addon-actions';

import { Inline, Padbox } from '../../../layout';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import ControlButton from './ControlButton';

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
    <Padbox paddingSize="sm">
      <Inline align="center" gap="mdPlus">
        <ControlButton {...args} />
        <ControlButton {...args} hiddenColumns={4} />
      </Inline>
    </Padbox>
    <Padbox paddingSize="sm">
      <Inline align="center" gap="mdPlus">
        <ControlButton {...args} className="hover" />
        <ControlButton {...args} appliedFilters={4} className="hover" />
      </Inline>
    </Padbox>
  </>
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
