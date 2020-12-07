import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from '../Button';
import Card from './Card';
import { CardProps } from './Card.types';
import { Paragraph } from '../typography';

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
  <Card title="Main title">
    <div
      style={{
        width: '90px',
        height: '90px',
        backgroundColor: 'grey',
        margin: '0 auto 20px',
      }}
    />
    <Paragraph margin={{ bottom: 1 }} style={{ textAlign: 'center' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      pharetra magna lectus, a congue ex blandit vel. Donec id mi commodo eros
      porta tempus.
    </Paragraph>
    <Button size="lg" variant="outline">
      Make action
    </Button>
  </Card>
);

export const LoadingCard: Story = () => (
  <Card title="Main title" isLoading>
    Content
  </Card>
);
