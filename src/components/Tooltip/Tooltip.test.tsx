import { fireEvent, screen } from '@testing-library/react';

import Tooltip from './Tooltip';
import { setup } from '../../utils/tests/setup';

const popupText = 'Popup';
const childrenText = 'Tooltip';

describe('Tooltip', () => {
  describe('when popup is defined', () => {
    it('should appear on pointermove event', async () => {
      setup(<Tooltip popup={<span>{popupText}</span>}>{childrenText}</Tooltip>);
      const tooltipParent = screen.getByText(childrenText);
      fireEvent.pointerMove(tooltipParent);
      expect(tooltipParent).toBeInTheDocument();
      expect(await screen.findByTestId('ssc-tooltip')).toBeInTheDocument();
    });
  });
  describe('when popup is not defined', () => {
    it('should display children', async () => {
      setup(<Tooltip>{childrenText}</Tooltip>);
      const tooltipParent = screen.getByText(childrenText);
      fireEvent.pointerMove(tooltipParent);

      expect(screen.getByText(childrenText)).toBeInTheDocument();
      expect(screen.queryByTestId('ssc-tooltip')).not.toBeInTheDocument();
    });
  });
});
