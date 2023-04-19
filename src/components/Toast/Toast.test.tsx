import { fireEvent, render, screen } from '@testing-library/react';

import { DSProvider } from '../../theme';
import Toast from './Toast';

describe('Toast', () => {
  const onCloseHandler = jest.fn();

  afterEach(() => jest.resetAllMocks());

  describe('when close button is clicked', () => {
    it('should call onClose handler', () => {
      render(
        <DSProvider>
          <Toast onClose={onCloseHandler}>Toast notification</Toast>
        </DSProvider>,
      );
      const closeButton = screen.getByRole('button');

      fireEvent.click(closeButton);

      expect(onCloseHandler).toBeCalledTimes(1);
    });
  });
});
