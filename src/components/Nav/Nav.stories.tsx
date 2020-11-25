import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';
import NavItem from './NavItem';

export default {
  title: 'components/Nav',
  component: Nav,
  subcomponents: { NavItem },
  decorators: [(storyFn) => <BrowserRouter>{storyFn()}</BrowserRouter>],
} as Meta;

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
    <NavItem as="a" href="#" isActive>
      Open
    </NavItem>
    <NavItem as="a" href="#">
      Under Review
    </NavItem>
    <NavItem as="a" href="#">
      Resolved
    </NavItem>
    <NavItem as="a" href="#">
      Declined
    </NavItem>
    <NavItem as="a" href="#">
      Decayed
    </NavItem>
  </Nav>
);

export const NavigationWithOnClickHandlers: Story = () => (
  <Nav>
    <NavItem as="a" tabIndex={0} isActive onClick={action('NavItem-click')}>
      Overview
    </NavItem>
    <NavItem as="a" tabIndex={-1} onClick={action('NavItem-click')}>
      Activity
    </NavItem>
  </Nav>
);
