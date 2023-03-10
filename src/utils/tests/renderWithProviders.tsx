import type { RenderOptions, RenderResult } from '@testing-library/react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { DSProvider } from '../../theme/DSProvider';

export const renderWithProviders = (
  children: JSX.Element,
  options?: RenderOptions,
): RenderResult =>
  render(
    <MemoryRouter>
      <DSProvider>{children}</DSProvider>
    </MemoryRouter>,
    options,
  );
