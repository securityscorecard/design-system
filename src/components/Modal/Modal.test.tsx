import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { renderWithProviders } from '../../utils/tests/renderWithProviders';
import Modal from './Modal';

describe('Modal', () => {
  it('should should trigger the onClose when clicking on overlay', async () => {
    const onCloseMock = vi.fn();
    renderWithProviders(
      <Modal data-testid="drawer" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    await userEvent.click(screen.getByTestId('dialog-overlay'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
