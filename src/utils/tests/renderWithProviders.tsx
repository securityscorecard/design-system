import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { DSProvider } from '../../theme/DSProvider';

export const renderWithProviders = (children: JSX.Element): RenderResult =>
  render(
    <MemoryRouter>
      <DSProvider>{children}</DSProvider>
    </MemoryRouter>,
  );
