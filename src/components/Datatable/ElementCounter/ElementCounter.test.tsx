import React from 'react';
import { render, screen } from '@testing-library/react';

import ElementCounter from './ElementCounter';

describe('ElementCounter', () => {
  describe('when there are some selected rows', () => {
    const renderComponent = (filteredLength = undefined) =>
      render(
        <ElementCounter
          filteredLength={filteredLength}
          selectedLength={20}
          totalLength={1000}
        />,
      );
    it('should use total length if there are no filters', () => {
      renderComponent();

      expect(screen.getByRole('heading')).toHaveTextContent(
        '20 of 1K selected',
      );
    });
    it('should use filtered length if there are filters', () => {
      renderComponent(500);
      expect(screen.getByRole('heading')).toHaveTextContent(
        '20 of 500 selected',
      );
    });
  });
});
