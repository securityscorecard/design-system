import type { Meta, Story } from '@storybook/react';
import type { SkeletonProps } from './Skeleton.types';

import Skeleton from './Skeleton';
import { Inline, Padbox, Stack, Surface } from '../layout';
import { Text } from '../typographyLegacy/Text';
import { Heading } from '../typographyLegacy/Heading';

export default {
  title: 'components/Skeleton',
  component: Skeleton,
} as Meta;

export const Playground: Story<SkeletonProps> = (args) => (
  <Skeleton {...args} />
);
Playground.parameters = {
  chromatic: { disable: true },
  screenshot: { skip: true },
};

export const Default: Story = () => {
  return (
    <Stack gap="lg">
      <Surface radius="md" hasBorder>
        <Padbox paddingSize="md">
          <Inline align="center" gap="md">
            <Skeleton height={100} variant="circular" width={100} />
            <Stack gap="sm" style={{ width: 100, flex: 1 }}>
              <Text size="h1">
                <Skeleton />
              </Text>
              <Text size="sm">
                <Skeleton />
              </Text>
              <Text size="sm">
                <Skeleton />
              </Text>
            </Stack>
          </Inline>
        </Padbox>
      </Surface>
      <Surface radius="md" hasBorder>
        <Padbox paddingSize="md">
          <Stack gap="sm">
            <Heading size="h1">
              <Skeleton />
            </Heading>
            {Array(5)
              .fill(null)
              .map(() => (
                <Text size="sm">
                  <Skeleton />
                </Text>
              ))}
          </Stack>
        </Padbox>
      </Surface>
    </Stack>
  );
};
