import { Meta, StoryObj } from '@storybook/react';

import { Stack } from '../layout';
import Text, { Code, Strong } from './Text';
import { TextSizes, TextVariants } from './Text.enums';
import { generateControl } from '../../utils/tests/storybook';
import Paragraph from '../Paragraph/Paragraph';
import { Heading } from '../Heading';
import { Link } from '../Link';
import Display from '../Display/Display';
import ElementLabel from '../ElementLabel/ElementLabel';

const meta = {
  title: 'typography/Text',
  component: Text,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    size: {
      ...generateControl('select', TextSizes),
      description: 'Size of the text',
      table: {
        defaultValue: { summary: 'md' },
        type: {
          summary: Object.values(TextSizes)
            .map((v) => `'${v}'`)
            .join('|'),
        },
      },
    },
    variant: {
      ...generateControl('select', TextVariants),
      description: 'Color variant of the text',
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: Object.values(TextVariants)
            .map((v) => `'${v}'`)
            .join('|'),
        },
      },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

export const LargeText: Story = {
  args: {
    size: 'lg',
  },
};

export const MediumText: Story = {
  args: {
    size: 'md',
  },
};

export const SmallText: Story = {
  args: {
    size: 'sm',
  },
};
export const TextHeading1: Story = {
  args: {
    size: 'h1',
  },
};
export const TextHeading2: Story = {
  args: {
    size: 'h2',
  },
};
export const TextHeading3: Story = {
  args: {
    size: 'h3',
  },
};
export const TextHeading4: Story = {
  args: {
    size: 'h4',
  },
};
export const TextHeading5: Story = {
  args: {
    size: 'h5',
  },
};

export const DefaultText: Story = {
  args: {
    variant: 'default',
  },
};

export const SubtleText: Story = {
  args: {
    variant: 'subtle',
  },
};

export const MonospaceText: Story = {
  args: {
    variant: 'monospace',
  },
};

export const DangerText: Story = {
  args: {
    variant: 'danger',
  },
};
export const BoldText: Story = {
  args: {
    isBold: true,
  },
};

export const ShorthandComponents: Story = {
  render: () => (
    <>
      <Code>This is shorthand Code component</Code>
      <br />
      <br />
      <Strong>This is shorthand Strong component</Strong>
    </>
  ),
};

export const DarkMode: Story = {
  render: () => {
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
            Morbi auctor consectetur ex ut pellentesque. Vestibulum vitae
            pretium odio, non dignissim dui. Pellentesque congue purus purus,
            ultricies ullamcorper leo finibus quis.
          </Paragraph>
          <Paragraph variant="secondary">
            Morbi auctor consectetur ex ut pellentesque. Vestibulum vitae
            pretium odio, non dignissim dui. Pellentesque congue purus purus,
            ultricies ullamcorper leo finibus quis.
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
  },
  parameters: {
    themes: {
      themeOverride: 'Dark',
    },
  },
};
