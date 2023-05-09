import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { generateControl } from '../../utils/tests/storybook';
import { Cluster, Inline, Stack } from '../layout';
import { H4 } from '../typographyLegacy';
import { Icon } from '../Icon';
import Pill from './Pill';
import { PillProps } from './Pill.types';
import { PillColorsEnums } from './Pill.enums';
import { capitalize, getRadii } from '../../utils';
import { RadiusTypes } from '../../theme/radii.enums';

export default {
  title: 'components/Pill',
  component: Pill,
  argTypes: {
    color: {
      ...generateControl('select', PillColorsEnums),
    },
  },
} as Meta;

const PillTemplate: Story<PillProps> = (args) => (
  <Inline gap="md">
    <Pill {...args} />
  </Inline>
);

export const Playground: Story<PillProps> = (args) => <Pill {...args} />;
Playground.args = {
  label: 'Pill label',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Colors: Story<PillProps> = () => (
  <Inline gap="md">
    {Object.values(PillColorsEnums).map((color) => (
      <Pill color={color} label={capitalize(color)} />
    ))}
  </Inline>
);

export const Removable = PillTemplate.bind({});
Removable.args = {
  ...Playground.args,
  onRemove: action('OnRemove'),
  size: 'sm',
};

export const Clickable: Story<PillProps> = (args) => (
  <Inline gap="md">
    {Object.values(PillColorsEnums).map((color) => (
      <Pill key={color} {...args} color={color} label={capitalize(color)} />
    ))}
  </Inline>
);

Clickable.args = {
  ...Playground.args,
  onClick: action('OnRemove'),
};

export const ClickableAndDeletable = PillTemplate.bind({});
ClickableAndDeletable.args = {
  ...Removable.args,
  ...Clickable.args,
};

const Bullet = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: #4aba00;
  border-radius: ${getRadii(RadiusTypes.circle)};
`;

export const WithAdornment: Story<PillProps> = (args) => (
  <Inline gap="md">
    <Pill
      {...args}
      adornment={<Icon name="wrench" style={{ fontSize: '0.75rem' }} />}
    />
    <Pill {...args} adornment={<Bullet />} />
    <Pill
      {...args}
      adornment={
        <img
          alt=""
          height="16"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNjUK/9sAQwALCAgKCAcLCgkKDQwLDREcEhEPDxEiGRoUHCkkKyooJCcnLTJANy0wPTAnJzhMOT1DRUhJSCs2T1VORlRAR0hF/9sAQwEMDQ0RDxEhEhIhRS4nLkVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVF/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8Ak8cWf2u1EO9EDdXc4Arz27sZdNkjiNuEBGRIrBw34/lXpvjO3M1gxQgMg3DPcjtXGT6nFf6UElngRlQDsu05yBjjnigDL0eO71C6it4iI95+dwoJUD0rW8T24t7ExBXBTht7Ekn3/wDrVdsdMfRIrW9uODcgrGoGeh6k9u/6VZ17R77U/Dk2qpA3kAbu24D3AoA2fF0M0ixSxncighk/rWDoGhtJqUV4NPN1CTlkY4Vv1xXS+IJP9BPrV/wqG+xxjoF6CgDVsopbi2Frd6akFuQYkbgsintxn0H5VQ+Il4mh+BpobcKgkAhUex611EYV4WRxkMMEHvXj/wAXbpluLSzE0jRqm8KzZA5P/wBegD//2Q=="
          style={{ borderRadius: '100%' }}
          width="16"
        />
      }
    />
  </Inline>
);
WithAdornment.args = Playground.args;

export const Truncation: Story<PillProps> = (args) => (
  <Stack gap="lg">
    <Stack gap="sm" justify="flex-start">
      <H4>Default (maxLabelLength = 16)</H4>
      <Pill {...args} />
    </Stack>
    <Stack gap="sm" justify="flex-start">
      <H4>Disabled truncation (maxLabelLength = 0)</H4>
      <Pill {...args} maxLabelLength={0} />
    </Stack>
  </Stack>
);
Truncation.args = {
  label: 'Very long label that needs truncation',
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

export const PillArray: Story<PillProps> = (args) => (
  <div style={{ width: '250px' }}>
    <Cluster gap="sm">
      {days.map((day) => (
        <Pill key={day} {...args} label={day} />
      ))}
    </Cluster>
  </div>
);

export const WithAnchorElement = PillTemplate.bind({});
WithAnchorElement.args = {
  ...Playground.args,
  as: 'a',
  href: '#',
  isClickable: true,
};
