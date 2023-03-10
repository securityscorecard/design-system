import type { Meta, Story } from '@storybook/react/types-6-0';
import type { CenterProps } from './Center';

import { SpaceSizes } from '../../../theme/space.enums';
import { theme } from '../../../theme';
import { Button } from '../../Button';
import { Box } from '../mocks/Box';
import Center from './Center';

export default {
  title: 'layout/primitives/Center',
  component: Center,
  argTypes: {
    maxWidth: {
      defaultValue: theme.layout.containerWidth,
      table: {
        defaultValue: { summary: theme.layout.containerWidth },
      },
    },
  },
} as Meta;

const CenterTemplate: Story<CenterProps> = (args) => (
  <div style={{ backgroundColor: '#dadada' }}>
    <Center style={{ backgroundColor: '#80baeb' }} {...args}>
      <Box />
      <Button color="primary" variant="solid">
        Click me
      </Button>
      <Box />
    </Center>
  </div>
);

export const Playground = CenterTemplate.bind({});
Playground.args = {
  maxWidth: 500,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithCenteredChildren = CenterTemplate.bind({});
WithCenteredChildren.args = {
  ...Playground.args,
  areChildrenCentered: true,
};

export const WithCenteredText = CenterTemplate.bind({});
WithCenteredText.args = {
  ...Playground.args,
  isTextCentered: true,
};

export const WithGutters = CenterTemplate.bind({});
WithGutters.args = {
  ...Playground.args,
  gutters: SpaceSizes.lg,
};

export const WithCustomMaxWidth = CenterTemplate.bind({});
WithCustomMaxWidth.args = {
  maxWidth: 300,
};
