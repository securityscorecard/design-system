import {
  createMarginSpacing,
  createPaddingSpacing,
  createSpacing,
} from './space';

describe('createSpacing', () => {
  it('should return correct kind spacing', () => {
    expect(createSpacing('margin', 'none')).toBe('margin: 0;');
    expect(createSpacing('padding', 'none')).toBe('padding: 0;');
  });

  describe('given margin is provided kind', () => {
    it('should return undefined if no or empty value is provided', () => {
      expect(createMarginSpacing(undefined)).toBe(undefined);
      expect(createMarginSpacing({})).toBe(undefined);
      expect(createMarginSpacing([])).toBe(undefined);
      expect(createMarginSpacing('')).toBe(undefined);
    });

    it('should return zero-value if "none" value is provided', () => {
      expect(createMarginSpacing('none')).toBe('margin: 0;');
    });

    it('should return correct value is number value is provided', () => {
      expect(createMarginSpacing(1)).toBe('margin: 1.25rem;');
    });

    it('should return correct values when "vertical" property is provided', () => {
      const result = createMarginSpacing({ vertical: 1 });
      expect(result).toHaveLength(2);
      expect(result[0]).toBe('margin-top: 1.25rem;');
      expect(result[1]).toBe('margin-bottom: 1.25rem;');
    });

    it('should return correct values when "horizontal" property is provided', () => {
      const result = createMarginSpacing({ horizontal: 1 });
      expect(result).toHaveLength(2);
      expect(result[0]).toBe('margin-left: 1.25rem;');
      expect(result[1]).toBe('margin-right: 1.25rem;');
    });

    it('should return correct values when "top" property is provided', () => {
      const result = createMarginSpacing({ top: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('margin-top: 1.25rem;');
    });

    it('should return correct values when "bottom" property is provided', () => {
      const result = createMarginSpacing({ bottom: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('margin-bottom: 1.25rem;');
    });

    it('should return correct values when "left" property is provided', () => {
      const result = createMarginSpacing({ left: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('margin-left: 1.25rem;');
    });

    it('should return correct values when "right" property is provided', () => {
      const result = createMarginSpacing({ right: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('margin-right: 1.25rem;');
    });

    it('should return correct values when "vertical" and "horizontal" properties are provided', () => {
      const result = createMarginSpacing({ vertical: 1, horizontal: 1 });
      expect(result).toHaveLength(4);
      expect(result[0]).toBe('margin-top: 1.25rem;');
      expect(result[1]).toBe('margin-bottom: 1.25rem;');
      expect(result[2]).toBe('margin-left: 1.25rem;');
      expect(result[3]).toBe('margin-right: 1.25rem;');
    });

    it('should return correct values when all directional properties are provided', () => {
      const result = createMarginSpacing({
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
      });
      expect(result).toHaveLength(4);
      expect(result[0]).toBe('margin-top: 1.25rem;');
      expect(result[1]).toBe('margin-bottom: 1.25rem;');
      expect(result[2]).toBe('margin-left: 1.25rem;');
      expect(result[3]).toBe('margin-right: 1.25rem;');
    });

    describe('when properties are mixed together', () => {
      it('directional values should take precedence', () => {
        const result = createMarginSpacing({
          vertical: 2,
          horizontal: 2,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        });

        expect(result).toHaveLength(4);
        expect(result[0]).toBe('margin-top: 0rem;');
        expect(result[1]).toBe('margin-bottom: 0rem;');
        expect(result[2]).toBe('margin-left: 0rem;');
        expect(result[3]).toBe('margin-right: 0rem;');
      });

      it('should return correct values', () => {
        const result = createMarginSpacing({
          horizontal: 2,
          top: 1,
        });

        expect(result).toHaveLength(3);
        expect(result[0]).toBe('margin-top: 1.25rem;');
        expect(result[1]).toBe('margin-left: 2.5rem;');
        expect(result[2]).toBe('margin-right: 2.5rem;');
      });
    });
  });

  describe('given padding is provided kind', () => {
    it('should return undefined if no or empty value is provided', () => {
      expect(createPaddingSpacing(undefined)).toBe(undefined);
      expect(createPaddingSpacing({})).toBe(undefined);
      expect(createPaddingSpacing([])).toBe(undefined);
      expect(createPaddingSpacing('')).toBe(undefined);
    });

    it('should return zero-value if "none" value is provided', () => {
      expect(createPaddingSpacing('none')).toBe('padding: 0;');
    });

    it('should return correct value is number value is provided', () => {
      expect(createPaddingSpacing(1)).toBe('padding: 1.25rem;');
    });

    it('should return correct values when "vertical" property is provided', () => {
      const result = createPaddingSpacing({ vertical: 1 });
      expect(result).toHaveLength(2);
      expect(result[0]).toBe('padding-top: 1.25rem;');
      expect(result[1]).toBe('padding-bottom: 1.25rem;');
    });

    it('should return correct values when "horizontal" property is provided', () => {
      const result = createPaddingSpacing({ horizontal: 1 });
      expect(result).toHaveLength(2);
      expect(result[0]).toBe('padding-left: 1.25rem;');
      expect(result[1]).toBe('padding-right: 1.25rem;');
    });

    it('should return correct values when "top" property is provided', () => {
      const result = createPaddingSpacing({ top: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('padding-top: 1.25rem;');
    });

    it('should return correct values when "bottom" property is provided', () => {
      const result = createPaddingSpacing({ bottom: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('padding-bottom: 1.25rem;');
    });

    it('should return correct values when "left" property is provided', () => {
      const result = createPaddingSpacing({ left: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('padding-left: 1.25rem;');
    });

    it('should return correct values when "right" property is provided', () => {
      const result = createPaddingSpacing({ right: 1 });
      expect(result).toHaveLength(1);
      expect(result[0]).toBe('padding-right: 1.25rem;');
    });

    it('should return correct values when "vertical" and "horizontal" properties are provided', () => {
      const result = createPaddingSpacing({ vertical: 1, horizontal: 1 });
      expect(result).toHaveLength(4);
      expect(result[0]).toBe('padding-top: 1.25rem;');
      expect(result[1]).toBe('padding-bottom: 1.25rem;');
      expect(result[2]).toBe('padding-left: 1.25rem;');
      expect(result[3]).toBe('padding-right: 1.25rem;');
    });

    it('should return correct values when all directional properties are provided', () => {
      const result = createPaddingSpacing({
        top: 1,
        bottom: 1,
        left: 1,
        right: 1,
      });
      expect(result).toHaveLength(4);
      expect(result[0]).toBe('padding-top: 1.25rem;');
      expect(result[1]).toBe('padding-bottom: 1.25rem;');
      expect(result[2]).toBe('padding-left: 1.25rem;');
      expect(result[3]).toBe('padding-right: 1.25rem;');
    });

    describe('when properties are mixed together', () => {
      it('directional values should take precedence', () => {
        const result = createPaddingSpacing({
          vertical: 2,
          horizontal: 2,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        });

        expect(result).toHaveLength(4);
        expect(result[0]).toBe('padding-top: 0rem;');
        expect(result[1]).toBe('padding-bottom: 0rem;');
        expect(result[2]).toBe('padding-left: 0rem;');
        expect(result[3]).toBe('padding-right: 0rem;');
      });

      it('should return correct values', () => {
        const result = createPaddingSpacing({
          horizontal: 2,
          top: 1,
        });

        expect(result).toHaveLength(3);
        expect(result[0]).toBe('padding-top: 1.25rem;');
        expect(result[1]).toBe('padding-left: 2.5rem;');
        expect(result[2]).toBe('padding-right: 2.5rem;');
      });
    });
  });
});
