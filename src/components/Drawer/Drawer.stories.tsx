import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Drawer from './Drawer';
import { DrawerProps } from './Drawer.types';
import { DrawerSizes } from './Drawer.enums';
import { SemanticModal } from '../SemanticModal';
import { H2, Paragraph } from '../typography';
import { Inline, Padbox, Stack } from '../layout';
import { Button, ButtonEnums } from '../Button';
import { Icon } from '../Icon';
import { generateControl } from '../../utils/tests/storybook';
import { SpaceSizes } from '../../index';

export default {
  title: 'components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      source: { type: 'code' },
    },
  },
  argTypes: {
    size: {
      ...generateControl('select', DrawerSizes),
    },
    footer: {
      control: { disable: true },
    },
    adornment: {
      control: { disable: true },
    },
  },
} as Meta;

function Footer() {
  return (
    <Inline gap={SpaceSizes.md} justify="flex-end">
      <Button size={SpaceSizes.lg} variant="outline">
        Cancel
      </Button>
      <Button size={SpaceSizes.lg}>Confirm</Button>
    </Inline>
  );
}

function Adornment() {
  return <Icon color="neutral.900" name="long-arrow-left" type="ssc" />;
}

function Content() {
  return (
    <Stack>
      <H2>This is a placeholder</H2>
      <Paragraph style={{ marginBottom: 0 }}>
        You can replace this with a local component. You can also just override
        the text, but keep in mind that you might lose content that way in case
        we happend to change the underlying component. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
    </Stack>
  );
}
export const Playground: Story<DrawerProps> = (args) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Padbox paddingSize={SpaceSizes.xxl}>
      <Inline justify="center">
        <Button
          size={ButtonEnums.ButtonSizes.lg}
          onClick={() => setIsShown(!isShown)}
        >
          Open drawer
        </Button>
        {isShown && (
          <Drawer
            footer={<Footer />}
            title="Title"
            onClose={() => setIsShown(false)}
            {...args}
          >
            <Content />
          </Drawer>
        )}
      </Inline>
    </Padbox>
  );
};

export const WithTitleAndAdornment: Story = () => (
  <Drawer
    adornment={<Adornment />}
    footer={<Footer />}
    size="lg"
    title="Large size drawer with title and adornment"
    onClose={action('close-modal')}
  >
    <Content />
  </Drawer>
);

export const WithOverflowingTitle: Story = () => (
  <Drawer
    footer={<Footer />}
    size="md"
    title="This is a title that has no end, therefore it goes on and on until it fills all the space of its container and wants to go even further."
    onClose={action('close-modal')}
  >
    <Content />
  </Drawer>
);

export const WithoutBackdrop: Story = () => {
  const [displaySomething, setDisplaySomething] = useState(false);

  return (
    <Padbox>
      <Stack align="center" gap={SpaceSizes.md} justify="center">
        <Paragraph>
          Talent she for lively eat led sister. Entrance strongly packages she
          out rendered get quitting denoting led. Dwelling confined improved it
          he no doubtful raptures. Several carried through an of up attempt
          gravity. Situation to be at offending elsewhere distrusts if.
          Particular use for considered projection cultivated. Worth of do doubt
          shall it their. Extensive existence up me contained he pronounce do.
          Excellence inquietude assistance precaution any impression man
          sufficient.
        </Paragraph>
        <Button onClick={() => setDisplaySomething(!displaySomething)}>
          Random button
        </Button>
        {!displaySomething || <Icon color="success.500" name="check-circle" />}
        {Array.from(Array(3).keys()).map(() => (
          <Paragraph>
            Was justice improve age article between. No projection as up
            preference reasonably delightful celebrated. Preserved and abilities
            assurance tolerably breakfast use saw. And painted letters forming
            far village elderly compact. Her rest west each spot his and you
            knew. Estate gay wooded depart six far her. Of we be have it lose
            gate bred. Do separate removing or expenses in. Had covered but
            evident chapter matters anxious.
          </Paragraph>
        ))}
      </Stack>
      <Drawer
        footer={<Footer />}
        hasBackdrop={false}
        size="sm"
        title="Small size drawer without backdrop"
        onClose={action('close-modal')}
      >
        <Content />
      </Drawer>
    </Padbox>
  );
};

export const WithSemanticModal: Story = () => {
  const [displaySemanticModal, setDisplaySemanticModal] = useState(false);

  const close = (): void => {
    setDisplaySemanticModal(false);
  };

  return (
    <Drawer
      footer={<Footer />}
      size="sm"
      title="With semantic modal"
      onClose={action('close-modal')}
    >
      <>
        <Button onClick={() => setDisplaySemanticModal(!displaySemanticModal)}>
          Jump out modal now!
        </Button>
        {!displaySemanticModal || (
          <SemanticModal
            actions={[
              {
                label: 'Cancel',
                name: 'Cancel',
                onClick: close,
              },
              {
                label: 'Destroy',
                name: 'Destroy',
                onClick: close,
              },
            ]}
            message="Something bad is about to happen"
            primaryButtonColor={ButtonEnums.ButtonColors.danger}
            title="Attention!"
            variant="error"
            onClose={() => setDisplaySemanticModal(false)}
          />
        )}
      </>
    </Drawer>
  );
};
