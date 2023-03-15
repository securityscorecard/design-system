import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

import { Badges } from '../../../.storybook/storybook.enums';
import Nav from './Nav';
import NavItem from './NavItem';
import { NavItemProps } from './NavItem.types';

export default {
  title: 'components/Nav',
  component: Nav,
  subcomponents: { NavItem },
  decorators: [(storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>],

  parameters: {
    badges: [Badges.deprecated],
    docs: {
      description: {
        component: `<div class="deprecated">Deprecated since v1.0.0-alpha.83}</div>

This component test was deprecated in favor of the **Tabs** component (variant: \`text\`, size: \`large\`).

See docs: [Tabs](https://securityscorecard.github.io/design-system/alpha/?path=/docs/components-tabs--playground#text-tabs)`,
      },
    },
  },
} as Meta;

export const Playground: Story<NavItemProps> = (args) => (
  <Nav {...args}>
    <NavItem to="#" isActive>
      Open
    </NavItem>
    <NavItem to="#">Under Review</NavItem>
    <NavItem to="#">Resolved</NavItem>
    <NavItem to="#">Declined</NavItem>
    <NavItem to="#">Decayed</NavItem>
  </Nav>
);
Playground.parameters = {
  screenshot: { skip: true },
};

export const NavigationWithRelativeLinksDefault: Story = () => (
  <Nav>
    <NavItem to="#" isActive>
      Open
    </NavItem>
    <NavItem to="#">Under Review</NavItem>
    <NavItem to="#">Resolved</NavItem>
    <NavItem to="#">Declined</NavItem>
    <NavItem to="#">Decayed</NavItem>
  </Nav>
);

export const NavigationWithAbsoluteLinks: Story = () => (
  <Nav>
    <NavItem href="#" isActive>
      Open
    </NavItem>
    <NavItem href="#">Under Review</NavItem>
    <NavItem href="#">Resolved</NavItem>
    <NavItem href="#">Declined</NavItem>
    <NavItem href="#">Decayed</NavItem>
  </Nav>
);

export const NavigationWithOnClickHandlers: Story = () => (
  <Nav>
    <NavItem tabIndex={0} isActive onClick={action('NavItem-click')}>
      Overview
    </NavItem>
    <NavItem tabIndex={-1} onClick={action('NavItem-click')}>
      Activity
    </NavItem>
  </Nav>
);
