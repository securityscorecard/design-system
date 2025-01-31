import { Meta, StoryFn } from '@storybook/react';
import { omit } from 'ramda';

import { PortalPlacements } from './Tooltip.enums';
import { Inline, Padbox, Stack } from '../layout';
import { Button } from '../Button';
import Paragraph from '../Paragraph/Paragraph';
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

export const Playground: StoryFn<TooltipProps> = (args) => (
  <Tooltip {...args} />
);
Playground.args = {
  children: <Button>Button with tooltip</Button>,
  popup,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const Placements: StoryFn = () => (
  <Stack gap={SpaceSizes.md}>
    <Tooltip
      placement={PortalPlacements.top}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button isExpanded>Top tooltip</Button>
    </Tooltip>
    <Tooltip
      placement={PortalPlacements.right}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button isExpanded>Right tooltip</Button>
    </Tooltip>
    <Tooltip
      placement={PortalPlacements.left}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button isExpanded>Left tooltip</Button>
    </Tooltip>
    <Tooltip
      placement={PortalPlacements.bottom}
      popup={popup}
      defaultIsPopupDisplayed
    >
      <Button isExpanded>Bottom tooltip</Button>
    </Tooltip>
  </Stack>
);

export const Width: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

Width.args = {
  ...Playground.args,
  width: 400,
  defaultIsPopupDisplayed: true,
};

export const WithDelay: StoryFn<TooltipProps> = (args) => <Tooltip {...args} />;

WithDelay.args = {
  ...Playground.args,
  enterDelay: 1000,
};

WithDelay.parameters = {
  screenshot: { skip: true },
};
