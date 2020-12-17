import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { HexGradeProps } from './HexGrade.types';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';
import HexGrade from './HexGrade';

export default {
  title: 'components/HexGrade',
  component: HexGrade,
} as Meta;

export const playground: Story<HexGradeProps> = (args) => (
  <div style={{ backgroundColor: args.isInversed ? 'black' : 'transparent' }}>
    <HexGrade {...args} />
  </div>
);
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  variant: {
    control: { type: 'select', options: HexGradeVariants },
    defaultValue: HexGradeVariants.solid,
  },
  grade: {
    control: {
      type: 'select',
      options: { none: undefined, ...HexGradeGrades },
    },
    defaultValue: undefined,
  },
  isInversed: {
    control: 'boolean',
  },
  margin: {
    control: 'object',
  },
};

export const SolidHexGrades: Story = () => (
  <>
    <HexGrade variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.solid} />
    <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.solid} />
    <HexGrade
      grade={HexGradeGrades.nonApplicable}
      variant={HexGradeVariants.solid}
    />
  </>
);
SolidHexGrades.storyName = 'Solid HexGrades';

export const OutlineHexGrades: Story = () => (
  <>
    <HexGrade variant={HexGradeVariants.outline} />
    <HexGrade
      grade={HexGradeGrades.unknown}
      variant={HexGradeVariants.outline}
    />
    <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.outline} />
    <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.outline} />
    <HexGrade
      grade={HexGradeGrades.nonApplicable}
      variant={HexGradeVariants.outline}
    />
  </>
);
OutlineHexGrades.storyName = 'Outline HexGrades';

export const CustomScorecardHexGrades: Story = () => (
  <>
    <HexGrade variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.unknown} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.A} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.B} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.C} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.D} variant={HexGradeVariants.cs} />
    <HexGrade grade={HexGradeGrades.F} variant={HexGradeVariants.cs} />
    <HexGrade
      grade={HexGradeGrades.nonApplicable}
      variant={HexGradeVariants.cs}
    />
  </>
);
CustomScorecardHexGrades.storyName = 'CustomScorecard HexGrades';

export const SizedHexGrades: Story = () => (
  <>
    <HexGrade
      grade={HexGradeGrades.A}
      size={16}
      variant={HexGradeVariants.solid}
    />
    <HexGrade
      grade={HexGradeGrades.B}
      size={32}
      variant={HexGradeVariants.solid}
    />
    <HexGrade
      grade={HexGradeGrades.C}
      size={64}
      variant={HexGradeVariants.solid}
    />
    <HexGrade
      grade={HexGradeGrades.D}
      size={96}
      variant={HexGradeVariants.solid}
    />
    <HexGrade
      grade={HexGradeGrades.F}
      size={128}
      variant={HexGradeVariants.solid}
    />
  </>
);
SizedHexGrades.storyName = 'Sized HexGrades';

export const InversedHexGrades: Story = () => (
  <div style={{ backgroundColor: 'black' }}>
    <div>
      <HexGrade
        grade={HexGradeGrades.unknown}
        variant={HexGradeVariants.solid}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.A}
        variant={HexGradeVariants.solid}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.B}
        variant={HexGradeVariants.solid}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.C}
        variant={HexGradeVariants.solid}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.D}
        variant={HexGradeVariants.solid}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.F}
        variant={HexGradeVariants.solid}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.nonApplicable}
        variant={HexGradeVariants.solid}
        isInversed
      />
    </div>
    <div>
      <HexGrade
        grade={HexGradeGrades.unknown}
        variant={HexGradeVariants.outline}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.A}
        variant={HexGradeVariants.outline}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.B}
        variant={HexGradeVariants.outline}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.C}
        variant={HexGradeVariants.outline}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.D}
        variant={HexGradeVariants.outline}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.F}
        variant={HexGradeVariants.outline}
        isInversed
      />
      <HexGrade
        grade={HexGradeGrades.nonApplicable}
        variant={HexGradeVariants.outline}
        isInversed
      />
    </div>
  </div>
);
InversedHexGrades.storyName = 'Inversed HexGrade';
InversedHexGrades.parameters = {
  backgrounds: {
    default: 'black',
  },
};
