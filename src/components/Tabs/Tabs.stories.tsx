import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Tabs from './Tabs';

const contentStyle = {
  width: '400px',
  height: '300px',
  border: '1px red dashed',
};

export default {
  title: 'components/Tabs',
  component: Tabs,
} as Meta;

type PropsWithTitle = {
  title: string;
};

const tabs = [
  {
    title: 'SecurityScorecard',
    color: '#0275D8',
    Component: ({ title }: PropsWithTitle) => (
      <div style={contentStyle}>
        Title: {title}
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    ),
  },
  {
    title: 'IHS Markit',
    color: '#00AB4E',
    Component: ({ title }: PropsWithTitle) => (
      <div style={contentStyle}>
        Title: {title}
        <br />
        Nunc congue nisi vitae suscipit. Interdum velit laoreet id donec
        ultrices tincidunt arcu non sodales. Sed adipiscing diam donec
        adipiscing tristique. Ut aliquam purus sit amet luctus venenatis lectus
        magna fringilla. At ultrices mi tempus imperdiet nulla malesuada
        pellentesque elit. Congue quisque egestas diam in arcu cursus euismod.
        Amet volutpat consequat mauris nunc congue. Rhoncus dolor purus non enim
        praesent elementum facilisis leo vel. Eleifend mi in nulla posuere
        sollicitudin aliquam. Lectus magna fringilla urna porttitor rhoncus
        dolor. Quis vel eros donec ac odio tempor orci dapibus ultrices.
      </div>
    ),
  },
];

export const FirstTabSelected: Story = () => (
  <Tabs
    activeTabTitle="SecurityScorecard"
    componentProps={{
      title: 'im title for securityscorecard',
    }}
    tabs={tabs}
    onSelectTab={action('NavItem-click')}
  />
);

export const SecondTabSelected: Story = () => (
  <Tabs
    activeTabTitle="IHS Markit"
    componentProps={{
      title: 'im title for ihs markit',
    }}
    tabs={tabs}
    onSelectTab={action('NavItem-click')}
  />
);

export const InvalidTabSelected: Story = () => (
  <Tabs
    activeTabTitle="asdfasdfasdfasdf"
    componentProps={{
      title: 'im title for unknown tab',
    }}
    tabs={tabs}
    onSelectTab={action('NavItem-click')}
  />
);
