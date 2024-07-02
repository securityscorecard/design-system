import React, { useState } from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TreeView from './TreeView';
import { Inline, Stack } from '../layout';
import { Text } from '../Text';
import { HexGrade } from '../HexGrade';
import { DataSource, makeData } from './mocks/data';

export default {
  title: 'components/TreeView',
  component: TreeView,
} as ComponentMeta<typeof TreeView<DataSource>>;

type Story = ComponentStoryObj<typeof TreeView<DataSource>>;

export const Playground: Story = {
  args: {
    data: makeData(2, 2, 2),
    renderPrimaryContent: ({ name, industry }) => (
      <Stack>
        <Text isBold>{name}</Text>
        <Text variant="secondary">{industry}</Text>
      </Stack>
    ),
    renderSecondaryContent: ({ domain, grade }) => (
      <Inline stretch="start" style={{ width: '30ch' }}>
        <Text variant="secondary">{domain}</Text>
        <Inline align="center" gap="sm">
          <HexGrade grade={grade} size={24} />
        </Inline>
      </Inline>
    ),
    onDragEnd: action('onDragEnd'),
    onRowClick: action('onRowClick'),
  },
  render: function Render(args) {
    const [activeRow, setActiveRow] = useState('');

    return (
      <TreeView
        activeRowId={activeRow}
        onActiveRowIdChange={setActiveRow}
        {...args}
      />
    );
  },
  parameters: {
    screenshot: { skip: true },
  },
};
