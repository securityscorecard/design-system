import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import Tooltip from './Tooltip';

const popupText = 'Popup';
const childrenText = 'Tooltip';

describe('Tooltip', () => {
  describe('when popup is defined', () => {
    it('should appear on mouseEnter event', () => {
      render(
        <Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>,
      );
      const tooltipParent = screen.queryByText(childrenText);
      expect(tooltipParent).toBeInTheDocument();
      fireEvent.mouseEnter(tooltipParent);
      expect(screen.queryByText(popupText)).toBeInTheDocument();
    });

    it('should dissappear on mouseLeave event', async () => {
      render(
        <Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>,
      );
      const tooltipParent = screen.queryByText(childrenText);

      expect(tooltipParent).toBeInTheDocument();

      fireEvent.mouseEnter(tooltipParent);
      expect(screen.queryByText(popupText)).toBeInTheDocument();

      fireEvent.mouseLeave(tooltipParent);
      await waitForElementToBeRemoved(() => screen.queryByText(popupText));
      expect(screen.queryByText(popupText)).not.toBeInTheDocument();
    });
  });
  describe('when popup is not defined', () => {
    it('should display children', () => {
      render(<Tooltip>{childrenText}</Tooltip>);

      expect(screen.queryByText(childrenText)).toBeInTheDocument();
    });
  });
});
