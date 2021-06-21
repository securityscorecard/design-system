import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import { Button } from '../Button';
import { Inline, Stack } from '../layout';
import { Tab, Tabs } from '.';
import { ColorTypes } from '../../theme/colors.enums';
import { TabsProps } from './Tabs.types';
import { generateControl } from '../../utils/tests/storybook';
import { TabSizes, TabVariants } from './Tabs.enums';

export default {
  title: 'components/Tabs',
  component: Tabs,
  argTypes: {
    size: {
      ...generateControl('select', TabSizes),
    },
    variant: {
      ...generateControl('select', TabVariants),
    },
    margin: { control: { disable: true } },
  },
} as Meta;

const ContentA = () => (
  <section>
    <h1>Invent</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque
      nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam
      perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga
      numquam? Unde, facilis facere.
    </p>
  </section>
);
const ContentB = () => (
  <section>
    <h1>Overview</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque
      nostrum, pariatur qui sapiente optio quam tempora distinctio? Ipsam
      perferendis reprehenderit, sequi corrupti pariatur laboriosam fuga
      numquam? Unde, facilis facere.
    </p>
  </section>
);

export const playground: Story<TabsProps> = (args) => {
  return (
    <>
      <Tabs {...args}>
        <Tab value="inventory">Inventory</Tab>
        <Tab value="overview">Overview</Tab>
      </Tabs>

      <main>
        {args.selectedValue === 'inventory' && <ContentA />}
        {args.selectedValue === 'overview' && <ContentB />}
      </main>
    </>
  );
};
playground.argTypes = {
  selectedValue: {
    control: { type: 'select' },
    options: ['inventory', 'overview'],
  },
};
playground.args = { selectedValue: 'inventory' };

export const OnlyTabs: Story = () => (
  <Tabs selectedValue="overview" onSelectTab={action('Select Tab')}>
    <Tab value="inventory">Inventory</Tab>
    <Tab color={ColorTypes.cherry} value="overview">
      Overview
    </Tab>
  </Tabs>
);

export const StatefulTabs: Story = () => {
  const [selected, setSelected] = useState<string | number>('inventory');
  return (
    <>
      <Tabs selectedValue={selected} onSelectTab={setSelected}>
        <Tab value="inventory">Inventory</Tab>
        <Tab value="overview">Overview</Tab>
      </Tabs>

      <main>
        {selected === 'inventory' && <ContentA />}
        {selected === 'overview' && <ContentB />}
      </main>
    </>
  );
};

export const RoutableTabs: Story = () => {
  return (
    <MemoryRouter>
      <Route
        component={({ match }) => (
          <>
            <Tabs selectedValue={match.url}>
              <Tab value="/inventory">Inventory</Tab>
              <Tab value="/overview">Overview</Tab>
            </Tabs>
          </>
        )}
        path="*"
      />

      <Switch>
        <Route component={ContentA} path="/inventory" />
        <Route component={ContentB} path="/overview" />
      </Switch>
    </MemoryRouter>
  );
};

export const UnderlineTabs: Story = () => (
  <>
    <Tabs selectedValue="one" size="lg" onSelectTab={action('Select Tab')}>
      <Tab value="one">One</Tab>
      <Tab value="two">Two</Tab>
      <Tab value="three">Three</Tab>
    </Tabs>
    <Tabs selectedValue="one" size="md" onSelectTab={action('Select Tab')}>
      <Tab value="one">One</Tab>
      <Tab value="two">Two</Tab>
      <Tab value="three">Three</Tab>
    </Tabs>
    <Tabs selectedValue="one" size="sm" onSelectTab={action('Select Tab')}>
      <Tab value="one">One</Tab>
      <Tab value="two">Two</Tab>
      <Tab value="three">Three</Tab>
    </Tabs>
  </>
);

export const TextTabs: Story = () => (
  <>
    <Tabs
      selectedValue="one"
      size="lg"
      variant="text"
      onSelectTab={action('Select Tab')}
    >
      <Tab value="one">One</Tab>
      <Tab value="two">Two</Tab>
      <Tab value="three">Three</Tab>
    </Tabs>
    <Tabs
      selectedValue="one"
      size="md"
      variant="text"
      onSelectTab={action('Select Tab')}
    >
      <Tab value="one">One</Tab>
      <Tab value="two">Two</Tab>
      <Tab value="three">Three</Tab>
    </Tabs>
  </>
);

export const SegmentedTabs: Story = () => (
  <Stack gap="lg">
    <Inline gap="md">
      <Tabs
        margin="none"
        selectedValue="one"
        size="lg"
        variant="segmented"
        onSelectTab={action('Select Tab')}
      >
        <Tab value="one">One</Tab>
        <Tab value="two">Two</Tab>
        <Tab value="three">Three</Tab>
      </Tabs>
      {/* Just to illustrate height match with button size */}
      <Button size="lg">Button</Button>
    </Inline>

    <Inline gap="md">
      <Tabs
        margin="none"
        selectedValue="one"
        size="md"
        variant="segmented"
        onSelectTab={action('Select Tab')}
      >
        <Tab value="one">One</Tab>
        <Tab value="two">Two</Tab>
        <Tab value="three">Three</Tab>
      </Tabs>
      {/* Just to illustrate height match with button size */}
      <Button size="md">Button</Button>
    </Inline>
  </Stack>
);
