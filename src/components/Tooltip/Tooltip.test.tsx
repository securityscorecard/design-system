import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';

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
      await waitFor(() => {
        expect(screen.getByTestId('ssc-tooltip')).toBeInTheDocument();
      });
    });
  });
  describe('when popup is not defined', () => {
    it('should display children', () => {
      renderWithProviders(<Tooltip>{childrenText}</Tooltip>);

      expect(screen.getByText(childrenText)).toBeInTheDocument();
    });
  });
});
