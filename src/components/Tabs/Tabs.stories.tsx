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
import { SpaceSizes } from '../../theme';

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

function ContentA() {
  return (
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
}
function ContentB() {
  return (
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
}

export const Playground: Story<TabsProps> = (args) => {
  const { selectedValue } = args;
  return (
    <Stack gap={SpaceSizes.lg}>
      <Tabs {...args}>
        <Tab value="inventory">Inventory</Tab>
        <Tab value="overview">Overview</Tab>
      </Tabs>

      <main>
        {selectedValue === 'inventory' && <ContentA />}
        {selectedValue === 'overview' && <ContentB />}
      </main>
    </Stack>
  );
};
Playground.argTypes = {
  selectedValue: {
    control: { type: 'select' },
    options: ['inventory', 'overview'],
  },
};
Playground.args = { selectedValue: 'inventory' };
Playground.parameters = {
  screenshot: { skip: true },
};

export const OnlyTabs: Story = () => (
  <Tabs selectedValue="overview" onSelectTab={action('Select Tab')}>
    <Tab value="inventory">Inventory</Tab>
    <Tab color={ColorTypes.error700} value="overview">
      Overview
    </Tab>
  </Tabs>
);

export const StatefulTabs: Story = () => {
  const [selected, setSelected] = useState<string | number>('inventory');
  return (
    <Stack gap={SpaceSizes.lg}>
      <Tabs selectedValue={selected} onSelectTab={setSelected}>
        <Tab value="inventory">Inventory</Tab>
        <Tab value="overview">Overview</Tab>
      </Tabs>

      <main>
        {selected === 'inventory' && <ContentA />}
        {selected === 'overview' && <ContentB />}
      </main>
    </Stack>
  );
};

export const RoutableTabs: Story = () => {
  return (
    <MemoryRouter>
      <Route
        component={({ match }) => (
          <Tabs selectedValue={match.url}>
            <Tab value="/inventory">Inventory</Tab>
            <Tab value="/overview">Overview</Tab>
          </Tabs>
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
  <Stack gap={SpaceSizes.lg}>
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
  </Stack>
);

export const TextTabs: Story = () => (
  <Stack gap={SpaceSizes.lg}>
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
  </Stack>
);

export const SegmentedTabs: Story = () => (
  <Stack gap={SpaceSizes.lg}>
    <Inline gap={SpaceSizes.md}>
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
