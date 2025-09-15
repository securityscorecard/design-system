import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { generateControl } from '../../utils/tests/storybook';
import { Button } from '../Button';
import { Drawer } from '../Drawer';
import { Inline, Stack } from '../layout';
import { Modal } from '../Modal';
import { Text } from '../Text';
import FocusTrap, { FocusTrapProps } from './index';
import { DropdownMenu } from '../DropdownMenu';

export default {
  title: 'components/FocusTrap',
  component: FocusTrap,
  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    isActive: {
      ...generateControl('boolean', {}),
      description: 'Whether the focus trap is active',
    },
    onDeactivate: {
      control: { disable: true },
      description: 'Callback when focus trap is deactivated',
    },
    restoreFocus: {
      ...generateControl('boolean', {}),
      description:
        'Whether to restore focus to the previously focused element when deactivating',
    },
    allowEscapeKey: {
      ...generateControl('boolean', {}),
      description: 'Whether to allow deactivation via Escape key',
    },
    allowClickOutside: {
      ...generateControl('boolean', {}),
      description: 'Whether to allow deactivation via clicking outside',
    },
    allowTabOutside: {
      ...generateControl('boolean', {}),
      description:
        'Whether to allow deactivation via Tab key on the last focusable element',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS class name for the container',
    },
    as: {
      ...generateControl('select', {
        div: 'div',
        section: 'section',
        article: 'article',
        main: 'main',
      }),
      description: 'Custom element type for the container',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `FocusTrap component for constraining keyboard navigation within modals, drawers, and overlays. This component automatically manages focus trapping when active and provides accessible behavior following WCAG guidelines for modal dialogs.`,
      },
    },
  },
} as Meta;

export const Playground: StoryFn<FocusTrapProps> = (args) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(true)}>Open Focus Trap</Button>
      <FocusTrap {...args} isActive={isActive}>
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
          }}
        >
          <Text>Focus Trap Content</Text>
          <Inline gap="md" style={{ marginTop: '16px' }}>
            <Button onClick={() => setIsActive(false)}>Close</Button>
            <Button variant="outline">Action</Button>
          </Inline>
        </div>
      </FocusTrap>
    </div>
  );
};
Playground.args = {
  isActive: false,
  restoreFocus: true,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const ModalExample: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen && (
        <Modal
          size="md"
          title="Modal with Focus Trap"
          onClose={() => setIsOpen(false)}
        >
          <Stack gap="md">
            <Text>
              This modal uses FocusTrap internally to constrain keyboard
              navigation. You can navigate with Tab/Shift+Tab, close with
              Escape, or click outside to close.
            </Text>
            <Inline gap="md">
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="solid" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </Inline>
          </Stack>
        </Modal>
      )}
    </div>
  );
};

export const DrawerExample: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      {isOpen && (
        <Drawer
          size="md"
          title="Drawer with Focus Trap"
          focusTrap
          onClose={() => setIsOpen(false)}
        >
          <Stack gap="md" style={{ flex: 1 }}>
            <Text>
              This drawer uses FocusTrap internally to constrain keyboard
              navigation. Focus is constrained within this drawer.
            </Text>
            <div style={{ flex: 1 }}>
              <Stack gap="sm">
                <Button variant="outline" isExpanded>
                  Menu Item 1
                </Button>
                <Button variant="outline" isExpanded>
                  Menu Item 2
                </Button>
                <Button variant="outline" isExpanded>
                  Menu Item 3
                </Button>
                <div>
                  <DropdownMenu
                    actions={[
                      {
                        label: 'More Actions',
                        name: 'moreActions',
                        onClick: () => console.log('More Actions clicked'),
                      },
                    ]}
                  >
                    <Button variant="outline">More Actions</Button>
                  </DropdownMenu>
                </div>
              </Stack>
            </div>

            <Inline gap="md">
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="solid" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </Inline>
          </Stack>
        </Drawer>
      )}
    </div>
  );
};

export const FormExample: StoryFn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Form</Button>
      <FocusTrap
        as="button"
        containerProps={{
          'aria-labelledby': 'form-title',
          'aria-modal': 'true',
          role: 'button',
          onClick: () => setIsOpen(true),
          tabIndex: 0,
          style: {
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            padding: '24px',
            width: '90%',
          },
        }}
        isActive={isOpen}
      >
        <Stack gap="md">
          <Text as="h2" id="form-title" size="lg">
            User Information
          </Text>
          <form>
            <Stack gap="md">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                  type="email"
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    resize: 'vertical',
                  }}
                />
              </div>
            </Stack>
          </form>
          <Inline gap="md" style={{ marginTop: '16px' }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="solid" onClick={handleClose}>
              Submit
            </Button>
          </Inline>
        </Stack>
      </FocusTrap>
    </div>
  );
};

export const CustomElement: StoryFn = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(true)}>Open Custom Element</Button>
      <FocusTrap
        as="section"
        containerProps={{
          tabIndex: 0,
          'aria-labelledby': 'custom-title',
          style: {
            background: 'white',
            border: '2px solid #007bff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            left: '50%',
            padding: '20px',
            position: 'fixed',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          },
        }}
        isActive={isActive}
        restoreFocus
      >
        <Stack gap="md">
          <Text as="h2" id="custom-title" size="lg">
            Custom Section Element
          </Text>
          <Text>This focus trap uses a section element instead of a div.</Text>
          <Inline gap="md">
            <Button onClick={() => setIsActive(false)}>Close</Button>
            <Button variant="outline">Action</Button>
          </Inline>
        </Stack>
      </FocusTrap>
    </div>
  );
};

export const NoEscapeKey: StoryFn = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(true)}>Open (No Escape)</Button>
      <FocusTrap
        containerProps={{
          style: {
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            left: '50%',
            padding: '20px',
            position: 'fixed',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          },
        }}
        isActive={isActive}
      >
        <Stack gap="md">
          <Text as="h2" size="lg">
            No Escape Key
          </Text>
          <Text>
            This focus trap doesn&apos;t allow closing with the Escape key. You
            must use the close button or click outside.
          </Text>
          <Button onClick={() => setIsActive(false)}>Close</Button>
        </Stack>
      </FocusTrap>
    </div>
  );
};

export const TabOutsideAllowed: StoryFn = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsActive(true)}>
        Open (Tab Outside Allowed)
      </Button>
      <FocusTrap
        containerProps={{
          style: {
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            left: '50%',
            padding: '20px',
            position: 'fixed',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          },
        }}
        isActive={isActive}
      >
        <Stack gap="md">
          <Text as="h2" size="lg">
            Tab Outside Allowed
          </Text>
          <Text>
            This focus trap allows Tab key to escape when you reach the last
            focusable element. Clicking outside won&apos;t close it.
          </Text>
          <Inline gap="md">
            <Button onClick={() => setIsActive(false)}>Close</Button>
            <Button variant="outline">Action</Button>
          </Inline>
        </Stack>
      </FocusTrap>
    </div>
  );
};
