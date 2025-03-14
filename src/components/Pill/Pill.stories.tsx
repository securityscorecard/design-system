import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { Cluster, Inline, Stack } from '../layout';
import { H4 } from '../Heading';
import { Icon } from '../Icon';
import Pill from './Pill';
import { PillColorsEnums } from './Pill.enums';
import { capitalize } from '../../utils';

const ImageAdornment = () => (
  <img
    alt=""
    height="16"
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNjUK/9sAQwALCAgKCAcLCgkKDQwLDREcEhEPDxEiGRoUHCkkKyooJCcnLTJANy0wPTAnJzhMOT1DRUhJSCs2T1VORlRAR0hF/9sAQwEMDQ0RDxEhEhIhRS4nLkVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVF/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Ak8cWf2u1EO9EDdXc4Arz27sZdNkjiNuEBGRIrBw34/lXpvjO3M1gxQgMg3DPcjtXGT6nFf6UElngRlQDsu05yBjjnigDL0eO71C6it4iI95+dwoJUD0rW8T24t7ExBXBTht7Ekn3/wDrVdsdMfRIrW9uODcgrGoGeh6k9u/6VZ17R77U/Dk2qpA3kAbu24D3AoA2fF0M0ixSxncighk/rWDoGhtJqUV4NPN1CTlkY4Vv1xXS+IJP9BPrV/wqG+xxjoF6CgDVsopbi2Frd6akFuQYkbgsintxn0H5VQ+Il4mh+BpobcKgkAhUex611EYV4WRxkMMEHvXj/wAXbpluLSzE0jRqm8KzZA5P/wBegD//2Q=="
    style={{ borderRadius: '100%' }}
    width="16"
  />
);
const BulletAdornment = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: var(--severity-green-40);
  border-radius: 100%;
`;

const meta = {
  title: 'components/Pill',
  component: Pill,
  decorators: [(storyFn) => <Inline gap="md">{storyFn()}</Inline>],
  args: {
    label: 'Pill label',
  },
} satisfies Meta<typeof Pill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

export const Colors: Story = {
  render: (args) => (
    <Stack gap="md">
      <Inline gap="md">
        {Object.values(PillColorsEnums).map((color) => (
          <Pill key={color} {...args} color={color} label={capitalize(color)} />
        ))}
      </Inline>
      <Inline gap="md">
        {Object.values(PillColorsEnums).map((color) => (
          <Pill
            key={color}
            {...args}
            color={color}
            label={capitalize(color)}
            onClick={action('OnClick')}
          />
        ))}
      </Inline>
    </Stack>
  ),
};
export const ColorsDark: Story = {
  ...Colors,
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack gap="sm">
      <Pill {...args} size="md" />
      <Pill {...args} size="md" onRemove={action('onRemove')} />
      <Pill {...args} adornment={<ImageAdornment />} size="md" />
      <Pill
        {...args}
        adornment={<ImageAdornment />}
        size="md"
        onRemove={action('onRemove')}
      />
      <Pill {...args} size="sm" />
      <Pill {...args} size="sm" onRemove={action('onRemove')} />
      <Pill {...args} adornment={<ImageAdornment />} size="sm" />
      <Pill
        {...args}
        adornment={<ImageAdornment />}
        size="sm"
        onRemove={action('onRemove')}
      />
    </Stack>
  ),
};

export const Removable = {
  args: {
    onRemove: action('OnRemove'),
  },
};

export const Clickable: Story = {
  args: {
    onClick: action('OnClick'),
  },
};

export const ClickableAndRemovable = {
  args: {
    ...Removable.args,
    ...Clickable.args,
  },
};

export const WithAdornment: Story = {
  render: (args) => (
    <>
      <Pill
        {...args}
        adornment={<Icon name="wrench" style={{ fontSize: '0.75rem' }} />}
      />
      <Pill {...args} adornment={<BulletAdornment />} />
      <Pill {...args} adornment={<ImageAdornment />} />
    </>
  ),
};

export const Truncation: Story = {
  args: {
    label: 'Very long label that needs truncation',
  },
  render: (args) => (
    <Stack gap="lg">
      <Stack gap="sm">
        <H4>Default (maxLabelLength = 16)</H4>
        <Pill {...args} />
      </Stack>
      <Stack gap="sm">
        <H4>Disabled truncation (maxLabelLength = 0)</H4>
        <Pill {...args} maxLabelLength={0} />
      </Stack>
    </Stack>
  ),
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const PillArray: Story = {
  render: (args) => (
    <Cluster gap="sm">
      {days.map((day) => (
        <Pill key={day} {...args} label={day} />
      ))}
    </Cluster>
  ),
  decorators: [(stroyFn) => <div style={{ width: '250px' }}>{stroyFn()}</div>],
};

export const WithAnchorElement = {
  args: {
    as: 'a',
    href: '#',
    isClickable: true,
  },
};
