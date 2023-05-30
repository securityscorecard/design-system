import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import ScoreDelta from './ScoreDelta';
import { Inline } from '../layout';

export default {
  title: 'components/ScoreDelta',
  component: ScoreDelta,
} as Meta;

export const Default: Story = () => (
  <Inline gap="lg">
    <ScoreDelta decimalsCount={2} delta={3.141516} />
    <ScoreDelta decimalsCount={4} delta={3.141516} />
    <ScoreDelta decimalsCount={6} delta={3.141516} />
    <ScoreDelta decimalsCount={2} delta={0.15} />
    <ScoreDelta decimalsCount={2} delta={0} />
    <ScoreDelta delta={0} />
    <ScoreDelta delta={-4} />
    <ScoreDelta delta={-10} />
  </Inline>
);
