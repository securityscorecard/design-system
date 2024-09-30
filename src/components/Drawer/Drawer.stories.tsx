import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Drawer from './Drawer';
import { DrawerProps } from './Drawer.types';
import { DrawerSizes } from './Drawer.enums';
import { SemanticModal } from '../SemanticModal';
import { H2 } from '../Heading';
import { Paragraph } from '../Paragraph';
import { Text } from '../Text';
import { Link } from '../Link';
import { Inline, Padbox, Stack } from '../layout';
import { Button, ButtonEnums } from '../Button';
import { Icon } from '../Icon';
import { generateControl } from '../../utils/tests/storybook';
import { Modal, SpaceSizes } from '../../index';
import { Tooltip } from '../Tooltip';

export default {
  title: 'components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      story: { inline: false, height: 800 },
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
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
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
        the text, but <Tooltip popup="I'm tooltip">keep in mind</Tooltip> that
        you might lose content that way in case we happend to change the
        underlying component. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Paragraph>
    </Stack>
  );
}
export const Playground: StoryFn<DrawerProps> = (args) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Padbox paddingSize={SpaceSizes.xxl}>
      <Inline justify="center">
        <Button onClick={() => setIsShown(!isShown)}>Open drawer</Button>
        {isShown && (
          <Drawer
            {...args}
            footer={<Footer />}
            title="Title"
            onClose={() => setIsShown(false)}
          >
            <Content />
          </Drawer>
        )}
      </Inline>
    </Padbox>
  );
};

Playground.parameters = {
  screenshot: { skip: true },
};

export const WithTitleAndAdornment: StoryFn = () => (
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

export const WithOverflowingTitle: StoryFn = () => (
  <Drawer
    footer={<Footer />}
    size="md"
    title="This is a title that has no end, therefore it goes on and on until it fills all the space of its container and wants to go even further."
    onClose={action('close-modal')}
  >
    <Content />
  </Drawer>
);

export const WithoutBackdrop: StoryFn = () => {
  const [displaySomething, setDisplaySomething] = useState(false);
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [displaySemanticModal, setDisplaySemanticModal] = useState(false);
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
        <Button onClick={() => setDisplayDrawer(!displayDrawer)}>
          Toggle drawer button
        </Button>
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
      {displayDrawer && (
        <Drawer
          footer={<Footer />}
          hasBackdrop={false}
          size="md"
          title="Small size drawer without backdrop"
          onClose={() => setDisplayDrawer(false)}
        >
          {/* <Content /> */}
          <Button
            onClick={() => setDisplaySemanticModal(!displaySemanticModal)}
          >
            Jump out modal now!
          </Button>
          {!displaySemanticModal || (
            <SemanticModal
              actions={[
                {
                  label: 'Cancel',
                  name: 'Cancel',
                  onClick: () => setDisplaySemanticModal(false),
                },
                {
                  label: 'Destroy',
                  name: 'Destroy',
                  onClick: () => setDisplaySemanticModal(false),
                },
              ]}
              message="Something bad is about to happen"
              primaryButtonColor={ButtonEnums.ButtonColors.danger}
              title="Attention!"
              variant="error"
              onClose={() => setDisplaySemanticModal(false)}
            />
          )}
        </Drawer>
      )}
    </Padbox>
  );
};

export const WithSemanticModal: StoryFn = () => {
  const [displaySemanticModal, setDisplaySemanticModal] = useState(false);

  const close = (): void => {
    setDisplaySemanticModal(false);
  };

  return (
    <Drawer
      footer={<Footer />}
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

const alphabet = Array.from(Array(26))
  .map((_, i) => i + 65)
  .map((x) => String.fromCharCode(x));

const Subheader = styled(Padbox)`
  position: sticky;
  top: calc(var(--sscds-space-dialog-content-padding) * -1);
  margin-top: calc(var(--sscds-space-dialog-content-padding) * -1) !important;
  margin-left: calc(var(--sscds-space-dialog-content-padding) * -1);
  margin-right: calc(var(--sscds-space-dialog-content-padding) * -1);

  background: white;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const WithSubheader: StoryFn = () => (
  <Drawer
    footer={<Footer />}
    size="lg"
    title="Product categories"
    onClose={action('close-modal')}
  >
    <Stack gap="lg">
      <Subheader paddingSize={SpaceSizes.mdPlus} paddingType="squish">
        <Stack gap="lg">
          <Inline gap="lg" justify="space-between">
            <Text isBold>Company name</Text>
            <Text>1821 entries</Text>
          </Inline>
          <Inline gap="sm">
            {alphabet.map((char) => (
              <Link href="#">{char}</Link>
            ))}
          </Inline>
        </Stack>
      </Subheader>
      <Stack gap="md">
        {Array.from(Array(10)).map(() => (
          <Paragraph>
            Talent she for lively eat led sister. Entrance strongly packages she
            out rendered get quitting denoting led. Dwelling confined improved
            it he no doubtful raptures. Several carried through an of up attempt
            gravity. Situation to be at offending elsewhere distrusts if.
            Particular use for considered projection cultivated. Worth of do
            doubt shall it their. Extensive existence up me contained he
            pronounce do. Excellence inquietude assistance precaution any
            impression man sufficient.
          </Paragraph>
        ))}
      </Stack>
    </Stack>
  </Drawer>
);

export const ModalNested: StoryFn = () => {
  const [drawerVisible, setDrawerVisibility] = useState(false);
  const [modalVisible, setModalVisibility] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Button onClick={() => setDrawerVisibility(true)}>Open drawer</Button>
      {Array.from(Array(10)).map(() => (
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
      ))}
      {modalVisible ? (
        <Modal
          onClose={() => {
            setModalVisibility(false);
            setCounter(counter + 1);
          }}
        >
          <Paragraph>
            Talent she for lively eat led sister. Entrance strongly packages she
            out rendered get quitting denoting led. Dwelling confined improved
            it he no doubtful raptures. Several carried through an of up attempt
            gravity. Situation to be at offending elsewhere distrusts if.
            Particular use for considered projection cultivated. Worth of do
            doubt shall it their. Extensive existence up me contained he
            pronounce do. Excellence inquietude assistance precaution any
            impression man sufficient.
          </Paragraph>
        </Modal>
      ) : null}
      {drawerVisible ? (
        <Drawer onClose={() => setDrawerVisibility(false)}>
          <Button onClick={() => setModalVisibility(true)}>Open Modal</Button>
        </Drawer>
      ) : null}
    </div>
  );
};

ModalNested.parameters = {
  screenshot: { skip: true },
};

const codeExample = `
const Subheader = styled(Padbox)\`
  /* make subheader stick bellow the header */
  position: sticky;
  top: calc($\{getSpace(SpaceSizes.lg)} / -2);

  /* compensate drawer content padding */
  margin-top: calc(\${getSpace(SpaceSizes.lg)} / -2) !important;
  margin-left: calc($\{getSpace(SpaceSizes.lg)} * -1);
  margin-right: calc($\{getSpace(SpaceSizes.lg)} * -1);

  /* visual styles */
  background: white;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.1);
\`;

export const WithSubheader: StoryFn = () => (
  <Drawer>
    <Stack gap={SpaceSizes.lg}>
      <Subheader paddingSize={SpaceSizes.lg} paddingType="squish">
        /* content of Subheader */
      </Subheader>
      /* Drawer content */
    </Stack>
  </Drawer>
);
`;

WithSubheader.parameters = {
  screenshot: { skip: true },
  docs: {
    source: {
      code: codeExample,
    },
  },
};
