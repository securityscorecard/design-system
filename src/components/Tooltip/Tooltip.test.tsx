import React from 'react';
import { render, screen } from '@testing-library/react';

import Tooltip from './Tooltip';

const popupText = 'Popup';
const childrenText = 'Tooltip';

describe('Tooltip', () => {
  describe('when popup is defined', () => {
    it('should display children and popup', () => {
      render(
        <Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>,
      );

      expect(screen.queryByText(childrenText)).toBeInTheDocument();
      expect(screen.queryByText(popupText)).toBeInTheDocument();
    });
  });
  describe('when popup is not defined', () => {
    it('should display children', () => {
      render(<Tooltip>{childrenText}</Tooltip>);

      expect(screen.queryByText(childrenText)).toBeInTheDocument();
    });
  });
});
