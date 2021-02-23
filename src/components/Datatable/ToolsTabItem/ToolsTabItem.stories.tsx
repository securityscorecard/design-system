import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../../FlexContainer';
import { SSCIconNames } from '../../../theme/icons/icons.enums';
import ToolsTabItem from './ToolsTabItem';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

export default {
  title: 'components/Datatable/components/ToolsTabItem',
  component: ToolsTabItem,
} as Meta;

const toolActions = {
  onToolActivate: action('ToolsTabItem-Activate'),
  onToolDeactivate: action('ToolsTabItem-Deactivate'),
};

export const ToolsTabBar: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.reorder}
        label="Default"
        toolState={ToolsTabItemStates.default}
        {...toolActions}
      />
      <ToolsTabItem
        iconName={SSCIconNames.filter}
        label="Active"
        toolState={ToolsTabItemStates.active}
        {...toolActions}
      />
      <ToolsTabItem
        iconName={SSCIconNames.sitemap}
        label="Applied"
        toolState={ToolsTabItemStates.applied}
        {...toolActions}
      />
      <ToolsTabItem
        iconName={SSCIconNames.cog}
        label="Applied"
        toolState={ToolsTabItemStates.default}
        {...toolActions}
      />
    </FlexContainer>
  </>
);

export const ToolsTabItemsDefault: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        label="Filter"
        {...toolActions}
      />
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        label="Filter/Hover"
        {...toolActions}
        className="hover"
      />
    </FlexContainer>
  </>
);

export const ToolsTabItemsActive: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        label="Filter"
        toolState={ToolsTabItemStates.active}
        {...toolActions}
      />
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        label="Filter/Hover"
        toolState={ToolsTabItemStates.active}
        {...toolActions}
        className="hover"
      />
    </FlexContainer>
  </>
);

export const ToolsTabItemsApplied: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        label="Filter"
        toolState={ToolsTabItemStates.applied}
        {...toolActions}
      />
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        label="Filter/Hover"
        toolState={ToolsTabItemStates.applied}
        {...toolActions}
        className="hover"
      />
    </FlexContainer>
  </>
);
