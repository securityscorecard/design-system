import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { omit } from 'ramda';

import { PortalPlacements } from '../../hooks/useCalculatePortalPlacements.enums';
import { Inline, Padbox, Stack } from '../layout';
import { Button } from '../Button';
import { Paragraph } from '../typography';
import Tooltip from './Tooltip';
import { TooltipProps } from './Tooltip.types';
import { generateControl } from '../../utils/tests/storybook';
import { ButtonVariants } from '../Button/Button.enums';
import { SpaceSizes } from '../../theme';

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
      <Padbox paddingSize={SpaceSizes.xxl}>
        <Inline justify="center">{storyFn()}</Inline>
      </Padbox>
    ),
  ],
} as Meta;

const popup = (
  <>
    <Paragraph margin={{ bottom: 0 }} size="md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Paragraph>
    <Button variant={ButtonVariants.text}>Action</Button>
  </>
);

export const Playground: Story<
  TooltipProps & { children: React.ReactChild }
> = (args) => <Tooltip {...args} />;
Playground.args = {
  children: <Button size="lg">Button with tooltip</Button>,
  popup,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Placements: Story = () => (
  <Stack gap={SpaceSizes.md}>
    <Tooltip
      placement={PortalPlacements.top}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button size="md" isExpanded>
        Top tooltip
      </Button>
    </Tooltip>
    <Tooltip
      placement={PortalPlacements.right}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button size="md" isExpanded>
        Right tooltip
      </Button>
    </Tooltip>
    <Tooltip
      placement={PortalPlacements.left}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button size="md" isExpanded>
        Left tooltip
      </Button>
    </Tooltip>
    <Tooltip
      placement={PortalPlacements.bottom}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button size="md" isExpanded>
        Bottom tooltip
      </Button>
    </Tooltip>
  </Stack>
);

export const Width: Story<TooltipProps & { children: React.ReactChild }> = (
  args,
) => <Tooltip {...args} />;

Width.args = {
  ...Playground.args,
  width: 400,
  defaultIsPopupDisplayed: true,
};
