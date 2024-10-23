import { Story, useOf } from '@storybook/blocks';

import {
  ButtonV2,
  ElementLabel,
  Inline,
  Padbox,
  Stack,
  Surface,
} from '../../src';
import { FullWidthStory } from './components';

export function OverviewCard({ title, of, centerStory = true }) {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  if (resolvedOf.type === 'meta') return null;

  const componentTitle = title ?? resolvedOf.story.title.split('/').at(-1);

  return (
    <Surface
      background="dynamic"
      elevation={1}
      id={resolvedOf.story.componentId}
      radius="md"
      hasBorder
    >
      <Padbox paddingSize="md" style={{ height: '100%' }}>
        <Stack align="space-between" gap="md" splitAt={2}>
          <Inline align="center" gap="sm">
            <ElementLabel size="md" isStrong>
              {componentTitle}
            </ElementLabel>
          </Inline>
          {centerStory ? (
            <Inline align="center" justify="center" style={{ flex: 1 }}>
              <Story of={of} />
            </Inline>
          ) : (
            <FullWidthStory>
              <Story of={of} />
            </FullWidthStory>
          )}
          <Inline justify="flex-end">
            <ButtonV2
              as="a"
              href={`./?path=/docs/${resolvedOf.story.componentId}--documentation`}
              iconEnd={{ name: 'angle-right' }}
              size="sm"
              variant="ghost"
            >
              See documentation
            </ButtonV2>
          </Inline>
        </Stack>
      </Padbox>
    </Surface>
  );
}
