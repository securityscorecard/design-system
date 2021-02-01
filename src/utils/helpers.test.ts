import {
  abbreviateNumber,
  createMarginSpacing,
  createPaddingSpacing,
  createSpacing,
  pxToRem,
} from './helpers';

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
        expect(result[0]).toBe('margin-top: 0;');
        expect(result[1]).toBe('margin-bottom: 0;');
        expect(result[2]).toBe('margin-left: 0;');
        expect(result[3]).toBe('margin-right: 0;');
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
        expect(result[0]).toBe('padding-top: 0;');
        expect(result[1]).toBe('padding-bottom: 0;');
        expect(result[2]).toBe('padding-left: 0;');
        expect(result[3]).toBe('padding-right: 0;');
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

describe('pxToRem', () => {
  it('should not convert 0 value', () => {
    expect(pxToRem(0)).toBe('0');
  });

  it('should not convert string value', () => {
    expect(pxToRem('auto')).toBe('auto');
  });

  it('should convert any number of arguments', () => {
    expect(pxToRem(16)).toBe('1rem');
    expect(pxToRem(16, 16)).toBe('1rem 1rem');
    expect(pxToRem(16, 16, 16)).toBe('1rem 1rem 1rem');
    expect(pxToRem(16, 16, 16, 16)).toBe('1rem 1rem 1rem 1rem');
  });

  it('should return correct value is arguments are mixed', () => {
    expect(pxToRem(16, 0, 8, 'auto')).toBe('1rem 0 0.5rem auto');
  });
});

describe('abbreviateNumber', () => {
  it('should convert long number to abbreviated format', () => {
    expect(abbreviateNumber(1000)).toBe('1K');
    expect(abbreviateNumber(1000000)).toBe('1M');
    expect(abbreviateNumber(1000000000)).toBe('1B');
  });

  it('should display rounded value with maximum of 2 decimals', () => {
    expect(abbreviateNumber(1000)).toBe('1K');
    expect(abbreviateNumber(1100)).toBe('1.1K');
    expect(abbreviateNumber(1110)).toBe('1.11K');
    expect(abbreviateNumber(1114)).toBe('1.11K');
    expect(abbreviateNumber(1115)).toBe('1.12K');
    expect(abbreviateNumber(1119)).toBe('1.12K');
  });
});
