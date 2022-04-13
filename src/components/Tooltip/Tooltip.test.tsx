import React from 'react';
import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import Tooltip from './Tooltip';
import { renderWithProviders } from '../../utils/tests/renderWithProviders';

const popupText = 'Popup';
const childrenText = 'Tooltip';

describe('Tooltip', () => {
  describe('when popup is defined', () => {
    it('should appear on mouseEnter event', () => {
      renderWithProviders(
        <Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>,
      );
      const tooltipParent = screen.getByText(childrenText);
      expect(tooltipParent).toBeInTheDocument();
      fireEvent.mouseEnter(tooltipParent);
      expect(screen.getByText(popupText)).toBeInTheDocument();
    });

    it('should dissappear on mouseLeave event', async () => {
      renderWithProviders(
        <Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>,
      );
      const tooltipParent = screen.getByText(childrenText);

      expect(tooltipParent).toBeInTheDocument();

      fireEvent.mouseEnter(tooltipParent);
      expect(screen.getByText(popupText)).toBeInTheDocument();

      fireEvent.mouseLeave(tooltipParent);
      await waitForElementToBeRemoved(() => screen.queryByText(popupText));
      expect(screen.queryByText(popupText)).not.toBeInTheDocument();
    });
  });
  describe('when popup is not defined', () => {
    it('should display children', () => {
      renderWithProviders(<Tooltip>{childrenText}</Tooltip>);

      expect(screen.getByText(childrenText)).toBeInTheDocument();
    });
  });
});
