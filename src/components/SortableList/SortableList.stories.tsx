import type { Meta, Story } from '@storybook/react/types-6-0';
import type { SortableListProps } from './SortableList.types';

import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { zipObj } from 'ramda';

import SortableList from './SortableList';

export default {
  title: 'components/SortableList',
  component: SortableList,
} as Meta;

const listItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
const listItemsLabels = zipObj(listItems, [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  'Item 6',
]);

const SortableListTemplate: Story<SortableListProps> = ({ items, ...args }) => {
  const [sortedItems, setSortedItems] = useState(items);

  return (
    <SortableList
      {...args}
      items={sortedItems}
      onOrderChange={(keys) => {
        action('onOrderChange')(keys);
        setSortedItems(keys);
      }}
    />
  );
};

export const Playground = SortableListTemplate.bind({});
Playground.args = {
  items: listItems,
  labels: listItemsLabels,
  onDragStart: action('onDragStart'),
  onDragOver: action('onDragOver'),
  onDragEnd: action('onDragEnd'),
  onDragCancel: action('onDragCancel'),
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithoutLabels = SortableListTemplate.bind({});
WithoutLabels.args = {
  ...Playground.args,
  labels: undefined,
};
