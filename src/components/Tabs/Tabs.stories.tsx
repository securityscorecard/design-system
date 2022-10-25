import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import { Inline, Stack } from '../layout';
import { Tab, Tabs } from '.';
import { TabsProps } from './Tabs.types';
import { generateControl } from '../../utils/tests/storybook';
import { TabVariants } from './Tabs.enums';
import { Icon } from '../Icon';
import { Badge } from '../Badge';
import { Heading, Paragraph } from '../typographyLegacy';

export default {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      ...generateControl('select', TabVariants),
    },
    margin: { control: { disable: true } },
  },
} as Meta;

const TabPanel = ({ title }) => (
  <Stack gap="md">
    <Heading size="h3">{title}</Heading>
    <Paragraph>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque
      nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam
      perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga
      numquam? Unde, facilis facere.
    </Paragraph>
  </Stack>
);

const TabsTemplate: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tab value="overview">Overview</Tab>
    <Tab value="inventory">
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="reorder" style={{ fontSize: '1rem' }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="profile">Profile</Tab>
  </Tabs>
);

export const Playground: Story<TabsProps> = TabsTemplate.bind({});
Playground.args = {
  selectedValue: 'overview',
  onSelectTab: action('onSelectTab'),
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const UnderlineTabs = TabsTemplate.bind({});
UnderlineTabs.args = { ...Playground.args, variant: 'underline' };

export const UnderlineTabsWithCustomColor: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tab color="error.700" value="overview">
      Overview
    </Tab>
    <Tab value="inventory">
      <Inline align="center" gap="sm">
        <Icon color="primary.500" name="reorder" style={{ fontSize: '1rem' }} />
        <span>Inventory</span>
        <Badge count={3} variant="neutral" />
      </Inline>
    </Tab>
    <Tab value="Profile">Profile</Tab>
  </Tabs>
);
UnderlineTabsWithCustomColor.args = Playground.args;

export const TextTabs = TabsTemplate.bind({});
TextTabs.args = { ...Playground.args, variant: 'text' };

export const SegmentedTabs = TabsTemplate.bind({});
SegmentedTabs.args = { ...Playground.args, variant: 'segmented' };

export const SegmentedExpandedTabs = TabsTemplate.bind({});
SegmentedExpandedTabs.args = { ...SegmentedTabs.args, isExpanded: true };

export const StatefulTabs: Story<TabsProps> = (args) => {
  const { selectedValue } = args;
  const [currentTab, setCurrentTab] = useState(selectedValue);

  return (
    <Stack gap="lg">
      <TabsTemplate
        {...args}
        selectedValue={currentTab}
        onSelectTab={setCurrentTab}
      />
      <main>
        <TabPanel title={currentTab} />
      </main>
    </Stack>
  );
};
StatefulTabs.args = Playground.args;
StatefulTabs.parameters = {
  screenshot: { skip: true },
};

export const RoutableTabs: Story<TabsProps> = (args) => {
  return (
    <MemoryRouter initialEntries={['/overview']}>
      <Stack gap="lg">
        <Route
          component={({ match }) => (
            <Tabs {...args} selectedValue={match.url}>
              <Tab value="/overview">Overview</Tab>
              <Tab value="/inventory">Inventory</Tab>
            </Tabs>
          )}
          path="*"
        />

        <Switch>
          <Route
            path="/inventory"
            render={() => <TabPanel title="inventory" />}
          />
          <Route
            path="/overview"
            render={() => <TabPanel title="overview" />}
          />
        </Switch>
      </Stack>
    </MemoryRouter>
  );
};
RoutableTabs.parameters = {
  screenshot: { skip: true },
};
