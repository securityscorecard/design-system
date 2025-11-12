import { screen } from '@testing-library/react';

import { setup } from '../../utils/tests/setup';
import TrendIcon from './TrendIcon';

describe('TrendIcon', () => {
  describe('Basic rendering', () => {
    it('should render positive trend icon', () => {
      setup(<TrendIcon trend="positive" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render negative trend icon', () => {
      setup(<TrendIcon trend="negative" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render stable trend icon', () => {
      setup(<TrendIcon trend="stable" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should support deprecated type prop', () => {
      setup(<TrendIcon type="positive" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Icon rendering', () => {
    it('should render icon for positive trend', () => {
      setup(<TrendIcon trend="positive" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render icon for negative trend', () => {
      setup(<TrendIcon trend="negative" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render icon for stable trend', () => {
      setup(<TrendIcon trend="stable" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });
  });

  describe('invertedPositive prop', () => {
    it('should render positive trend when invertedPositive is true', () => {
      setup(<TrendIcon trend="positive" invertedPositive />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render negative trend when invertedPositive is true', () => {
      setup(<TrendIcon trend="negative" invertedPositive />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render stable trend when invertedPositive is true', () => {
      setup(<TrendIcon trend="stable" invertedPositive />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });

    it('should render without errors when invertedPositive is not provided', () => {
      setup(<TrendIcon trend="positive" />);
      const icon = screen.getByRole('img', { hidden: true });
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to the wrapper element', () => {
      const ref = { current: null };
      setup(<TrendIcon trend="positive" ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });
});
