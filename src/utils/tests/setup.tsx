import {
  type RenderOptions,
  type RenderResult,
  render,
} from '@testing-library/react';
import userEvent, {
  type UserEvent,
  type Options as UserEventOptions,
} from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { DSProvider } from '../../theme/DSProvider';

export const setup = (
  children: JSX.Element,
  options?: {
    renderOptions?: RenderOptions;
    userEventOptions?: UserEventOptions;
  },
): RenderResult & { user: UserEvent } => ({
  user: userEvent.setup(options?.userEventOptions),
  ...render(
    <MemoryRouter>
      <DSProvider>{children}</DSProvider>
    </MemoryRouter>,
    options?.renderOptions,
  ),
});
