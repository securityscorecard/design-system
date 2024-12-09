import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';

import Toast from './Toast';
import { setup } from '../../utils/tests/setup';

describe('Toast', () => {
  const onCloseHandler = vi.fn();

  afterEach(() => vi.resetAllMocks());

  describe('when close button is clicked', () => {
    it('should call onClose handler', () => {
      setup(<Toast onClose={onCloseHandler}>Toast notification</Toast>);
      const closeButton = screen.getByRole('button');

      fireEvent.click(closeButton);

      expect(onCloseHandler).toBeCalledTimes(1);
    });
  });
});
