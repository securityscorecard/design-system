import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { vi } from 'vitest';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import Drawer from './Drawer';
import Button from '../ButtonV2/Button';
import { Icon } from '../Icon';
import { Paragraph } from '../Paragraph';
import { DropdownMenu } from '../DropdownMenu';
import { Inline, Stack } from '../layout';

function Footer() {
  return (
    <Inline>
      <Button>Submit</Button>
    </Inline>
  );
}
function Adornment() {
  return (
    <div data-testid="adornment">
      <Icon name="cog" color="info.500" />
    </div>
  );
}

describe('Drawer', () => {
  it('should show footer if footer is defined', () => {
    renderWithProviders(
      <Drawer
        size="md"
        onClose={() => null}
        title="Test drawer"
        footer={<Footer />}
      >
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );

    const footerButton = screen.getByRole('button', { name: /Submit/i });
    expect(footerButton).toBeInTheDocument();
  });

  it('should display adornment if adornment is defined', () => {
    renderWithProviders(
      <Drawer
        size="md"
        onClose={() => null}
        title="Test drawer"
        adornment={<Adornment />}
      >
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );

    const adornment = screen.getByTestId('adornment');
    expect(adornment).toBeVisible();
  });

  it('should have the correct width', () => {
    renderWithProviders(
      <Drawer size="md" onClose={() => null} title="Test drawer">
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );
    const maxWidthValue = '480px';
    const drawer = screen.getByRole('dialog');
    expect(drawer).toHaveStyle(`max-width: ${maxWidthValue}`);
  });

  it('should display the title', () => {
    renderWithProviders(
      <Drawer size="md" onClose={() => null} title="Test drawer">
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );

    const drawerTitle = screen.getByText('Test drawer');
    expect(drawerTitle).toBeInTheDocument();
  });

  it('should display the content', () => {
    renderWithProviders(
      <Drawer
        size="md"
        onClose={() => null}
        title="Test drawer"
        data-testid="drawer"
      >
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );

    const content = screen.getByText('Whatever happens, happens here');
    expect(content).toBeInTheDocument();
  });

  it('should allow clicking on interactive elements in dropdown', async () => {
    const dropdownClickMock = vi.fn();
    renderWithProviders(
      <Drawer
        size="md"
        onClose={() => null}
        title="Test drawer"
        data-testid="drawer"
      >
        <DropdownMenu
          actions={[
            {
              label: 'OnClick',
              name: 'onClick',
              onClick: dropdownClickMock,
            },
          ]}
        >
          <button type="button">Trigger</button>
        </DropdownMenu>
      </Drawer>,
    );
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: /Trigger/i }));
    });

    const dropdownItem = screen.getByRole('button', { name: /OnClick/i });
    expect(dropdownItem).toBeInTheDocument();

    await userEvent.click(dropdownItem);

    expect(dropdownClickMock).toHaveBeenCalled();
  });

  it('should should trigger the onClose when clicking on overlay', async () => {
    const onCloseMock = vi.fn();
    renderWithProviders(
      <Drawer
        size="md"
        onClose={onCloseMock}
        title="Test drawer"
        data-testid="drawer"
      >
        Content
      </Drawer>,
    );

    await userEvent.click(screen.getByTestId('dialog-overlay'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
