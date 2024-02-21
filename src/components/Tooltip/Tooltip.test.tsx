import { act, fireEvent, screen } from '@testing-library/react';

import Tooltip from './Tooltip';
import { renderWithProviders } from '../../utils/tests/renderWithProviders';

const popupText = 'Popup';
const childrenText = 'Tooltip';

describe('Tooltip', () => {
  describe('when popup is defined', () => {
    it('should appear on pointermove event', async () => {
      renderWithProviders(
        <Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>,
      );
      const tooltipParent = screen.getByText(childrenText);
      fireEvent.pointerMove(tooltipParent);
      expect(tooltipParent).toBeInTheDocument();
      expect(await screen.findByTestId('ssc-tooltip')).toBeInTheDocument();
    });
  });
  describe('when popup is not defined', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should display children', async () => {
      renderWithProviders(<Tooltip>{childrenText}</Tooltip>);
      const tooltipParent = screen.getByText(childrenText);
      fireEvent.pointerMove(tooltipParent);
      act(() => {
        jest.advanceTimersByTime(5000);
      });

      expect(screen.getByText(childrenText)).toBeInTheDocument();
      expect(screen.queryByTestId('ssc-tooltip')).not.toBeInTheDocument();
    });
  });
});
