import { ColorTypes, theme } from '../theme';
import {
  abbreviateNumber,
  getBorderRadius,
  getColor,
  pxToRem,
} from './helpers';

describe('pxToRem', () => {
  it('should not convert 0 value', () => {
    expect(pxToRem(0)).toBe('0rem');
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
    expect(pxToRem(16, 0, 8, 'auto')).toBe('1rem 0rem 0.5rem auto');
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

describe('getColor', () => {
  it('should return correct color for legacy keys', () => {
    expect(getColor(ColorTypes.kiwi, { theme })).toBe('#4aba00');
    expect(getColor(ColorTypes.banana, { theme })).toBe('#e5bd00');
    expect(getColor(ColorTypes.pumpkin, { theme })).toBe('#f08f00');
    expect(getColor(ColorTypes.pumpkin0, { theme })).toBe('#fef9f2');
    expect(getColor(ColorTypes.strawberry, { theme })).toBe('#f1431c');
    expect(getColor(ColorTypes.strawberry0, { theme })).toBe('#fef6f4');
    expect(getColor(ColorTypes.cherry, { theme })).toBe('#b40000');
    expect(getColor(ColorTypes.blueberryClassic, { theme })).toBe('#0275d8');
    expect(getColor(ColorTypes.radiantBlueberry, { theme })).toBe('#1e88e5');
    expect(getColor(ColorTypes.dietBlueberry, { theme })).toBe('#80baeb');
    expect(getColor(ColorTypes.blueberry0, { theme })).toBe('#ebf4fc');
    expect(getColor(ColorTypes.eucalyptusClassic, { theme })).toBe('#579aa0');
    expect(getColor(ColorTypes.radiantEucalyptus, { theme })).toBe('#65b6bd');
    expect(getColor(ColorTypes.dietEucalyptus, { theme })).toBe('#abcccf');
    expect(getColor(ColorTypes.eucalyptus0, { theme })).toBe('#eef5f6');
    expect(getColor(ColorTypes.graphite5B, { theme })).toBe('#000');
    expect(getColor(ColorTypes.graphite4B, { theme })).toBe('#2a2a2a');
    expect(getColor(ColorTypes.graphite3B, { theme })).toBe('#5d5d5d');
    expect(getColor(ColorTypes.graphite2B, { theme })).toBe('#727272');
    expect(getColor(ColorTypes.graphiteB, { theme })).toBe('#b4b4b4');
    expect(getColor(ColorTypes.graphiteHB, { theme })).toBe('#d1d1d1');
    expect(getColor(ColorTypes.graphiteH, { theme })).toBe('#dadada');
    expect(getColor(ColorTypes.graphite2H, { theme })).toBe('#eee');
    expect(getColor(ColorTypes.graphite3H, { theme })).toBe('#f3f3f3');
    expect(getColor(ColorTypes.graphite4H, { theme })).toBe('#f9f9f9');
    expect(getColor(ColorTypes.graphite5H, { theme })).toBe('#fff');
  });
});

describe('getBorderRadius', () => {
  it('should return correct value', () => {
    expect(getBorderRadius({ theme })).toBe('4px');
  });
});
