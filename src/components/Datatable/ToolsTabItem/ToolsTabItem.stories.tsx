import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import { FlexContainer } from '../../FlexContainer';
import { SSCIconNames } from '../../Icon/Icon.enums';
import ToolsTabItem from './ToolsTabItem';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

export default {
  title: 'components/Datatable/components/ToolsTabItem',
  component: ToolsTabItem,
} as Meta;

const toolActions = {
  activateTool: action('ToolBarItem-Activiate-Tool'),
  deactivateTool: action('ToolBarItem-Deactiviate-Tool'),
};

export const ToolsTabBar: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.default}
        {...toolActions}
      >
        Default
      </ToolsTabItem>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.active}
        {...toolActions}
      >
        Active
      </ToolsTabItem>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.applied}
        {...toolActions}
      >
        Applied
      </ToolsTabItem>
    </FlexContainer>
  </>
);

export const ToolsTabItemsDefault: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem iconName={SSCIconNames.wrench} {...toolActions}>
        Filter
      </ToolsTabItem>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        {...toolActions}
        className="hover"
      >
        Filter/Hover
      </ToolsTabItem>
    </FlexContainer>
  </>
);

export const ToolsTabItemsActive: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.active}
        {...toolActions}
        margin={{ right: 0.25 }}
      >
        Filter
      </ToolsTabItem>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.active}
        {...toolActions}
        className="hover"
      >
        Filter/Hover
      </ToolsTabItem>
    </FlexContainer>
  </>
);

export const ToolsTabItemsApplied: Story = () => (
  <>
    <FlexContainer alignItems="center" margin={{ bottom: 1 }}>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.applied}
        {...toolActions}
      >
        Filter
      </ToolsTabItem>
      <ToolsTabItem
        iconName={SSCIconNames.wrench}
        itemState={ToolsTabItemStates.applied}
        {...toolActions}
        className="hover"
      >
        Filter/Hover
      </ToolsTabItem>
    </FlexContainer>
  </>
);
