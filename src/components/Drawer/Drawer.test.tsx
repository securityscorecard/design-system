import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import Drawer from './Drawer';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Paragraph } from '../typography';
import { Inline, Stack } from '../layout';
import { pxToRem } from '../../utils/helpers';

const Footer = () => (
  <Inline>
    <Button data-testid="footer">Submit</Button>
  </Inline>
);
const Adornment = () => (
  <div data-testid="adornment">
    <Icon name="cog" color="info.500" />
  </div>
);

describe('Drawer', () => {
  it('should show footer if footer is defined', () => {
    renderWithProviders(
      <Drawer
        size="sm"
        onClose={() => null}
        title="Test drawer"
        footer={<Footer />}
        dataTestId="drawer"
      >
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );

    const footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('Submit');
  });

  it('should display adornment if adornment is defined', () => {
    renderWithProviders(
      <Drawer
        size="sm"
        onClose={() => null}
        title="Test drawer"
        adornment={<Adornment />}
        dataTestId="drawer"
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
      <Drawer
        size="sm"
        onClose={() => null}
        title="Test drawer"
        dataTestId="drawer"
      >
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );
    const maxWidthValue = pxToRem('360');
    const drawer = screen.getByTestId('drawer');
    expect(drawer).toHaveStyle(`max-width: ${maxWidthValue}`);
  });

  it('should display the title', () => {
    renderWithProviders(
      <Drawer
        size="sm"
        onClose={() => null}
        title="Test drawer"
        dataTestId="drawer"
      >
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
        size="sm"
        onClose={() => null}
        title="Test drawer"
        dataTestId="drawer"
      >
        <Stack>
          <Paragraph>Whatever happens, happens here</Paragraph>
        </Stack>
      </Drawer>,
    );

    const content = screen.getByText('Whatever happens, happens here');
    expect(content).toBeInTheDocument();
  });
});
