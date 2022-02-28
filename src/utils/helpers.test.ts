import { getRadii } from '.';
import { ColorTypes, RadiusTypes, theme } from '../theme';
import { abbreviateNumber, getColor, pxToRem } from './helpers';

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
  it('should return correct color for current keys', () => {
    expect(getColor(ColorTypes.primary500, { theme })).toBe('#0275d8');
    expect(getColor(ColorTypes.primary400, { theme })).toBe('#1e88e5');
    expect(getColor(ColorTypes.primary200, { theme })).toBe('#80baeb');
    expect(getColor(ColorTypes.primary50, { theme })).toBe('#ebf4fc');
    expect(getColor(ColorTypes.neutral1000, { theme })).toBe('#000');
    expect(getColor(ColorTypes.neutral900, { theme })).toBe('#2a2a2a');
    expect(getColor(ColorTypes.neutral800, { theme })).toBe('#5d5d5d');
    expect(getColor(ColorTypes.neutral700, { theme })).toBe('#727272');
    expect(getColor(ColorTypes.neutral600, { theme })).toBe('#b4b4b4');
    expect(getColor(ColorTypes.neutral500, { theme })).toBe('#d1d1d1');
    expect(getColor(ColorTypes.neutral400, { theme })).toBe('#dadada');
    expect(getColor(ColorTypes.neutral300, { theme })).toBe('#eee');
    expect(getColor(ColorTypes.neutral200, { theme })).toBe('#f3f3f3');
    expect(getColor(ColorTypes.neutral100, { theme })).toBe('#f9f9f9');
    expect(getColor(ColorTypes.neutral0, { theme })).toBe('#fff');
    expect(getColor(ColorTypes.info50, { theme })).toBe('#f2f8fd');
    expect(getColor(ColorTypes.info500, { theme })).toBe('#1e88e5');
    expect(getColor(ColorTypes.success50, { theme })).toBe('#edf6ef');
    expect(getColor(ColorTypes.success100, { theme })).toBe('#d3e9d7');
    expect(getColor(ColorTypes.success500, { theme })).toBe('#49a25a');
    expect(getColor(ColorTypes.success600, { theme })).toBe('#3e8a4d');
    expect(getColor(ColorTypes.success700, { theme })).toBe('#347340');
    expect(getColor(ColorTypes.warning50, { theme })).toBe('#fcf3ec');
    expect(getColor(ColorTypes.warning100, { theme })).toBe('#f9e2d0');
    expect(getColor(ColorTypes.warning500, { theme })).toBe('#e5883c');
    expect(getColor(ColorTypes.error50, { theme })).toBe('#f7e9e9');
    expect(getColor(ColorTypes.error100, { theme })).toBe('#edc9ca');
    expect(getColor(ColorTypes.error500, { theme })).toBe('#b21f24');
    expect(getColor(ColorTypes.error600, { theme })).toBe('#971a1f');
    expect(getColor(ColorTypes.error700, { theme })).toBe('#7e161a');
    expect(getColor(ColorTypes.gradeA, { theme })).toBe('#4aba00');
    expect(getColor(ColorTypes.gradeB, { theme })).toBe('#e5bd00');
    expect(getColor(ColorTypes.gradeC, { theme })).toBe('#f08f00');
    expect(getColor(ColorTypes.gradeD, { theme })).toBe('#f1431c');
    expect(getColor(ColorTypes.gradeF, { theme })).toBe('#b40000');
    expect(getColor(ColorTypes.severityInformational, { theme })).toBe(
      '#0275D8',
    );
    expect(getColor(ColorTypes.severityPositive, { theme })).toBe('#49A25A');
    expect(getColor(ColorTypes.severityLow, { theme })).toBe('#E4BE00');
    expect(getColor(ColorTypes.severityMedium, { theme })).toBe('#E5883C');
    expect(getColor(ColorTypes.severityHigh, { theme })).toBe('#B21F24');
  });
});

describe('getRadii', () => {
  it('should return correct value', () => {
    expect(getRadii(RadiusTypes.default, { theme })).toBe('4px');
    expect(getRadii(RadiusTypes.circle, { theme })).toBe('100%');
    expect(getRadii(RadiusTypes.half, { theme })).toBe('2px');
    expect(getRadii(RadiusTypes.round, { theme })).toBe('50em');
  });
});
