import { Meta, StoryFn } from '@storybook/react';

import { HexGradeProps } from './HexGrade.types';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';
import HexGrade from './HexGrade';
import { generateControl } from '../../utils/tests/storybook';
import { DSProvider } from '../../theme';

export default {
  title: 'components/HexGrade/LEGACY',
  component: HexGrade,
  argTypes: {
    variant: {
      ...generateControl('select', HexGradeVariants),
    },
  },
  decorators: [
    (storyFn) => (
      <DSProvider
        config={{ debugMode: true, experimental: { legacyHexgrade: true } }}
      >
        {storyFn()}
      </DSProvider>
    ),
  ],
} as Meta;

export const Playground: StoryFn<HexGradeProps> = (args) => {
  const { isInverted } = args;

  return (
    <div style={{ backgroundColor: isInverted ? 'black' : 'transparent' }}>
      <HexGrade {...args} />
    </div>
  );
};
Playground.args = {
  variant: HexGradeVariants.solid,
  grade: 'A',
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const SolidHexGrades: StoryFn = () => (
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
SolidHexGrades.parameters = {
  design: {
    url: 'https://www.figma.com/file/vnzYfrwIISRYkr2iYE5TcD/Platform-Atoms?node-id=1891%3A0',
  },
};

export const OutlineHexGrades: StoryFn = () => (
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

export const CustomScorecardHexGrades: StoryFn = () => (
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

export const SizedHexGrades: StoryFn = () => (
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

export const InvertedHexGrades: StoryFn = () => (
  <div style={{ backgroundColor: 'black' }}>
    <div>
      <HexGrade
        grade={HexGradeGrades.unknown}
        variant={HexGradeVariants.solid}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.A}
        variant={HexGradeVariants.solid}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.B}
        variant={HexGradeVariants.solid}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.C}
        variant={HexGradeVariants.solid}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.D}
        variant={HexGradeVariants.solid}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.F}
        variant={HexGradeVariants.solid}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.nonApplicable}
        variant={HexGradeVariants.solid}
        isInverted
      />
    </div>
    <div>
      <HexGrade
        grade={HexGradeGrades.unknown}
        variant={HexGradeVariants.outline}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.A}
        variant={HexGradeVariants.outline}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.B}
        variant={HexGradeVariants.outline}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.C}
        variant={HexGradeVariants.outline}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.D}
        variant={HexGradeVariants.outline}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.F}
        variant={HexGradeVariants.outline}
        isInverted
      />
      <HexGrade
        grade={HexGradeGrades.nonApplicable}
        variant={HexGradeVariants.outline}
        isInverted
      />
    </div>
  </div>
);
InvertedHexGrades.storyName = 'Inverted HexGrade';
InvertedHexGrades.parameters = {
  backgrounds: {
    default: 'black',
  },
};
