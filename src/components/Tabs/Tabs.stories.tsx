import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route, Switch } from 'react-router-dom';

import Tabs from './Tabs';
import Tab from './Tab';
import { ColorTypes } from '../../theme/colors.enums';

export default {
  title: 'components/Tabs',
  component: Tabs,
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

export const OnlyTabs: Story = () => (
  <Tabs selectedValue="overview" onSelectTab={action('Select Tab')}>
    <Tab value="inventory">Inventory</Tab>
    <Tab color={ColorTypes.cherry} value="overview">
      Overview
    </Tab>
  </Tabs>
);

export const StatefulTabs: Story = () => {
  const [selected, setSelected] = useState('inventory');
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
