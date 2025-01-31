import type { Meta, StoryObj } from '@storybook/react';

import { TextSizes, TextVariants } from '../Text/Text.enums';
import Paragraph from './Paragraph';

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra
magna lectus, a congue ex blandit vel. Donec id mi commodo eros porta tempus. Vivamus et elit ut
leo tincidunt vehicula non a dolor. Suspendisse placerat turpis nisl, quis gravida sem semper et.`;

const meta = {
  title: 'typography/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'select' },
      options: Object.values(TextSizes),
      table: {
        type: {
          summary: Object.keys(TextSizes)
            .map((size) => `"${size}"`)
            .join('|'),
        },
        defaultValue: {
          summary: `"${TextSizes.lg}"`,
        },
      },
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(TextVariants),
      table: {
        type: {
          summary: Object.keys(TextVariants)
            .map((variant) => `"${variant}"`)
            .join('|'),
        },
        defaultValue: {
          summary: `"${TextVariants.default}"`,
        },
      },
    },
  },
  args: {
    children: lipsum,
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    screenshot: { skip: true },
  },
};

export const SmallParagraph = { args: { size: 'sm' } };
export const MediumParagraph = { args: { size: 'md' } };
export const LargeParagraph = { args: { size: 'lg' } };

export const DefaultParagraph = { args: { variant: 'default' } };
export const MonospaceParagraph = { args: { variant: 'monospace' } };
export const SubtleParagraph = { args: { variant: 'subtle' } };
export const DangerParagraph = { args: { variant: 'danger' } };
