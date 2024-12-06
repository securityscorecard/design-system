import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { setup } from '../../utils/tests/renderWithProviders';
import Modal from './Modal';

describe('Modal', () => {
  it('should should trigger the onClose when clicking on overlay', async () => {
    const onCloseMock = vi.fn();
    const { user } = setup(
      <Modal data-testid="drawer" onClose={onCloseMock}>
        Content
      </Modal>,
    );

    await user.click(screen.getByTestId('dialog-overlay'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
