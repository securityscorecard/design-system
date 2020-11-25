import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { FlexContainer } from '../FlexContainer';
import { Button } from '../Button';
import { Paragraph } from '../typography';
import Tooltip from './Tooltip';
import { TooltipProps } from './Tooltip.types';
import { TooltipPlacements } from './Tooltip.enums';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  decorators: [
    (storyFn) => (
      <FlexContainer
        alignItems="center"
        flexDirection="column"
        padding={{ vertical: 3 }}
      >
        {storyFn()}
      </FlexContainer>
    ),
  ],
} as Meta;

const popup = (
  <Paragraph margin={{ bottom: 0 }} size="md">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Paragraph>
);

export const playground: Story<TooltipProps> = (args) => <Tooltip {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.argTypes = {
  popup: {
    control: { disable: true },
    defaultValue: popup,
  },
  children: {
    control: { disable: true },
    defaultValue: <Button size="lg">Button with tooltip</Button>,
  },
  placement: { control: 'select', defaultValue: TooltipPlacements.bottom },
};

export const Placements: Story = () => (
  <>
    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        className="hover"
        placement={TooltipPlacements.top}
        popup={popup}
      >
        <Button size="md">Top tooltip</Button>
      </Tooltip>
    </FlexContainer>
    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        className="hover"
        placement={TooltipPlacements.right}
        popup={popup}
      >
        <Button size="md">Right tooltip</Button>
      </Tooltip>
    </FlexContainer>

    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        className="hover"
        placement={TooltipPlacements.left}
        popup={popup}
      >
        <Button size="md">Left tooltip</Button>
      </Tooltip>
    </FlexContainer>
    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        className="hover"
        placement={TooltipPlacements.bottom}
        popup={popup}
      >
        <Button size="md">Bottom tooltip</Button>
      </Tooltip>
    </FlexContainer>
  </>
);
