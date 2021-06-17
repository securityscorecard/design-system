import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { omit } from 'ramda';

import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';
import { FlexContainer } from '../FlexContainer';
import { Button } from '../Button';
import { Paragraph } from '../typography';
import Tooltip from './Tooltip';
import { TooltipProps } from './Tooltip.types';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
  argTypes: {
    popup: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
    placement: {
      ...generateControl(
        'select',
        omit(['bottomLeft', 'bottomRight'], PortalPlacements),
      ),
    },
  },
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

export const playground: Story<
  TooltipProps & { children: React.ReactChild }
> = (args) => <Tooltip {...args} />;
playground.parameters = {
  chromatic: { disable: true },
};
playground.args = {
  children: <Button size="lg">Button with tooltip</Button>,
  popup,
};

export const Placements: Story = () => (
  <>
    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        placement={PortalPlacements.top}
        popup={popup}
        defaultIsPopupDisplayed
      >
        <Button size="md">Top tooltip</Button>
      </Tooltip>
    </FlexContainer>
    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        placement={PortalPlacements.right}
        popup={popup}
        defaultIsPopupDisplayed
      >
        <Button size="md">Right tooltip</Button>
      </Tooltip>
    </FlexContainer>

    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        placement={PortalPlacements.left}
        popup={popup}
        defaultIsPopupDisplayed
      >
        <Button size="md">Left tooltip</Button>
      </Tooltip>
    </FlexContainer>
    <FlexContainer padding={{ vertical: 0.5 }}>
      <Tooltip
        placement={PortalPlacements.bottom}
        popup={popup}
        defaultIsPopupDisplayed
      >
        <Button size="md">Bottom tooltip</Button>
      </Tooltip>
    </FlexContainer>
  </>
);
