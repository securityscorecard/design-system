import { Meta, StoryFn } from '@storybook/react';

import { Stack } from '../layout';
import Text, { Code, Strong } from './Text';
import { TextProps } from './Text.types';
import { TextSizes, TextVariants } from './Text.enums';
import { generateControl } from '../../utils/tests/storybook';
import { Paragraph } from '../Paragraph';
import { Heading } from '../Heading';
import { Link } from '../Link';
import Display from '../Display/Display';
import ElementLabel from '../ElementLabel/ElementLabel';

export default {
  title: 'typography/Text',
  component: Text,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      ...generateControl('select', TextSizes),
    },
    variant: {
      ...generateControl('select', TextVariants),
    },
  },
} as Meta;

const lipsum = `Lorem ipsum dolor sit amet`;

export const Playground: StoryFn<TextProps & { children: React.ReactChild }> = (
  args,
) => <Text {...args} />;
Playground.args = {
  children: 'Playground Text',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const LargeText: StoryFn = () => (
  <Text size={TextSizes.lg}>{lipsum}</Text>
);

export const MediumText: StoryFn = () => (
  <Text size={TextSizes.md}>{lipsum}</Text>
);

export const SmallText: StoryFn = () => (
  <Text size={TextSizes.sm}>{lipsum}</Text>
);
export const TextHeading1: StoryFn = () => (
  <Stack>
    <Text size={TextSizes.h1}>{lipsum}</Text>
    <Text size={TextSizes.h1} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading2: StoryFn = () => (
  <Stack>
    <Text size={TextSizes.h2}>{lipsum}</Text>
    <Text size={TextSizes.h2} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading3: StoryFn = () => (
  <Stack>
    <Text size={TextSizes.h3}>{lipsum}</Text>
    <Text size={TextSizes.h3} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading4: StoryFn = () => (
  <Stack>
    <Text size={TextSizes.h4}>{lipsum}</Text>
    <Text size={TextSizes.h4} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);
export const TextHeading5: StoryFn = () => (
  <Stack>
    <Text size={TextSizes.h5}>{lipsum}</Text>
    <Text size={TextSizes.h5} variant="secondary">
      {lipsum}
    </Text>
  </Stack>
);

export const PrimaryText: StoryFn = () => (
  <>
    <Text>{lipsum}</Text>
    <br />
    <Text isBold>{lipsum}</Text>
  </>
);

export const SecondaryText: StoryFn = () => (
  <>
    <Text variant={TextVariants.secondary}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.secondary} isBold>
      {lipsum}
    </Text>
  </>
);

export const ContextText: StoryFn = () => (
  <>
    <Text variant={TextVariants.context}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.context} isBold>
      {lipsum}
    </Text>
  </>
);

ContextText.storyName = 'Context Text (DEPRECATED)';

export const MonospaceText: StoryFn = () => (
  <>
    <Text variant={TextVariants.monospace}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.monospace} isBold>
      {lipsum}
    </Text>
  </>
);

export const DangerText: StoryFn = () => (
  <>
    <Text variant={TextVariants.danger}>{lipsum}</Text>
    <br />
    <Text variant={TextVariants.danger} isBold>
      {lipsum}
    </Text>
  </>
);

export const ShorthandComponents: StoryFn = () => (
  <>
    <Code>This is shorthand Code component</Code>
    <br />
    <br />
    <Strong>This is shorthand Strong component</Strong>
  </>
);

export const DarkMode: StoryFn = () => {
  return (
    <Stack gap="sm" justify="flex-start">
      <Stack gap="sm">
        <Heading size="h1">Heading 1</Heading>
        <Heading size="h1" variant="secondary">
          Heading 1
        </Heading>
        <Heading size="h2">Heading 2</Heading>
        <Heading size="h2" variant="secondary">
          Heading 2
        </Heading>
        <Heading size="h3">Heading 3</Heading>
        <Heading size="h3" variant="secondary">
          Heading 3
        </Heading>
        <Heading size="h4">Heading 4</Heading>
        <Heading size="h4" variant="secondary">
          Heading 4
        </Heading>
        <Heading size="h5">Heading 5</Heading>
        <Heading size="h5" variant="secondary">
          Heading 5
        </Heading>
        <Paragraph>
          Morbi auctor consectetur ex ut pellentesque. Vestibulum vitae pretium
          odio, non dignissim dui. Pellentesque congue purus purus, ultricies
          ullamcorper leo finibus quis.
        </Paragraph>
        <Paragraph variant="secondary">
          Morbi auctor consectetur ex ut pellentesque. Vestibulum vitae pretium
          odio, non dignissim dui. Pellentesque congue purus purus, ultricies
          ullamcorper leo finibus quis.
        </Paragraph>
        <Text>Morbi auctor consectetur ex ut pellentesque.</Text>
        <Text variant="secondary">
          Morbi auctor consectetur ex ut pellentesque.
        </Text>
        <Text variant="monospace">
          Morbi auctor consectetur ex ut pellentesque.
        </Text>
        <Text variant="danger">
          Morbi auctor consectetur ex ut pellentesque.
        </Text>
        <Display>100 %</Display>
        <Display color="subtle">100 %</Display>
        <Display color="success">100 %</Display>
        <Display color="warning">100 %</Display>
        <Display color="danger">100 %</Display>
        <ElementLabel>Full name</ElementLabel>
        <ElementLabel color="subtle">Full name</ElementLabel>
        <ElementLabel color="disabled">Full name</ElementLabel>
        <ElementLabel color="danger">Full name</ElementLabel>
        <ElementLabel
          color="inverse"
          style={{
            background: 'var(--sscds-color-neutral-12)',
          }}
        >
          Full name
        </ElementLabel>
        <ElementLabel
          color="white"
          style={{ background: 'var(--sscds-color-black)' }}
        >
          Full name
        </ElementLabel>
        <ElementLabel color="link">Full name</ElementLabel>
        <Link href="#">Go to anchor</Link>
        <Link color="secondary" href="#">
          Go to anchor
        </Link>
      </Stack>
    </Stack>
  );
};

DarkMode.parameters = {
  themes: {
    themeOverride: 'Dark',
  },
};
