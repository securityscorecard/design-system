import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from '../Button';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'components/Card',
  component: Card,
} as Meta;

export const playground: Story<CardProps> = (args) => <Card {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  title: { defaultValue: 'Playground Card' },
  children: {
    control: { type: 'text' },
    table: {
      type: { summary: 'React.node' },
    },
    defaultValue: 'Playground Card content',
  },
  isLoading: { control: 'boolean' },
  margin: { control: { disable: true } },
};

export const DefaultCard: Story = () => (
  <Card subtitle="Card subtitle" title="Main title">
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing.</div>
    <div
      style={{
        width: '100px',
        height: '115px',
        backgroundColor: 'grey',
        margin: '30px auto',
      }}
    />
    <Button>Make action</Button>
  </Card>
);

export const LoadingCard: Story = () => (
  <Card subtitle="Card subtitle" title="Main title" isLoading>
    Content
  </Card>
);
