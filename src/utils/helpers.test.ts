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
    expect(getColor(ColorTypes.primary900, { theme })).toBe('#1b0471');
    expect(getColor(ColorTypes.primary800, { theme })).toBe('#2c1193');
    expect(getColor(ColorTypes.primary700, { theme })).toBe('#3b1ab7');
    expect(getColor(ColorTypes.primary600, { theme })).toBe('#4d29d4');
    expect(getColor(ColorTypes.primary500, { theme })).toBe('#6641f3');
    expect(getColor(ColorTypes.primary400, { theme })).toBe('#8263f5');
    expect(getColor(ColorTypes.primary300, { theme })).toBe('#a995f4');
    expect(getColor(ColorTypes.primary200, { theme })).toBe('#cabdfb');
    expect(getColor(ColorTypes.primary100, { theme })).toBe('#e5dffd');
    expect(getColor(ColorTypes.primary50, { theme })).toBe('#f0ecfe');
    expect(getColor(ColorTypes.neutral1000, { theme })).toBe('#000');
    expect(getColor(ColorTypes.neutral900, { theme })).toBe('#2a2a2a');
    expect(getColor(ColorTypes.neutral800, { theme })).toBe('#555555');
    expect(getColor(ColorTypes.neutral700, { theme })).toBe('#686868');
    expect(getColor(ColorTypes.neutral600, { theme })).toBe('#888888');
    expect(getColor(ColorTypes.neutral500, { theme })).toBe('#a8a8a8');
    expect(getColor(ColorTypes.neutral400, { theme })).toBe('#d8d8d8');
    expect(getColor(ColorTypes.neutral300, { theme })).toBe('#e8e8e8');
    expect(getColor(ColorTypes.neutral200, { theme })).toBe('#f3f3f3');
    expect(getColor(ColorTypes.neutral100, { theme })).toBe('#f9f9f9');
    expect(getColor(ColorTypes.neutral0, { theme })).toBe('#fff');
    expect(getColor(ColorTypes.info50, { theme })).toBe('#f0ecfe');
    expect(getColor(ColorTypes.info100, { theme })).toBe('#dad1fc');
    expect(getColor(ColorTypes.info500, { theme })).toBe('#6641f3');
    expect(getColor(ColorTypes.info600, { theme })).toBe('#5433d2');
    expect(getColor(ColorTypes.info700, { theme })).toBe('#41299a');
    expect(getColor(ColorTypes.success50, { theme })).toBe('#edf6ef');
    expect(getColor(ColorTypes.success100, { theme })).toBe('#d3e9d7');
    expect(getColor(ColorTypes.success500, { theme })).toBe('#49a25a');
    expect(getColor(ColorTypes.success600, { theme })).toBe('#3e8a4d');
    expect(getColor(ColorTypes.success700, { theme })).toBe('#347340');
    expect(getColor(ColorTypes.warning50, { theme })).toBe('#faf4e1');
    expect(getColor(ColorTypes.warning100, { theme })).toBe('#f4e5af');
    expect(getColor(ColorTypes.warning500, { theme })).toBe('#e1c048');
    expect(getColor(ColorTypes.warning600, { theme })).toBe('#c1a337');
    expect(getColor(ColorTypes.warning700, { theme })).toBe('#9f8321');
    expect(getColor(ColorTypes.error50, { theme })).toBe('#f7e9e9');
    expect(getColor(ColorTypes.error100, { theme })).toBe('#edc9ca');
    expect(getColor(ColorTypes.error500, { theme })).toBe('#b21f24');
    expect(getColor(ColorTypes.error600, { theme })).toBe('#971a1f');
    expect(getColor(ColorTypes.error700, { theme })).toBe('#7e161a');
    expect(getColor(ColorTypes.gradeA, { theme })).toBe('#4BBA76');
    expect(getColor(ColorTypes.gradeB, { theme })).toBe('#FFB147');
    expect(getColor(ColorTypes.gradeC, { theme })).toBe('#FB7A4F');
    expect(getColor(ColorTypes.gradeD, { theme })).toBe('#F32E43');
    expect(getColor(ColorTypes.gradeF, { theme })).toBe('#B81143');
    expect(getColor(ColorTypes.severityInformational, { theme })).toBe(
      '#5580D7',
    );
    expect(getColor(ColorTypes.severityPositive, { theme })).toBe('#4BBA76');
    expect(getColor(ColorTypes.severityLow, { theme })).toBe('#FFB147');
    expect(getColor(ColorTypes.severityMedium, { theme })).toBe('#FB7A4F');
    expect(getColor(ColorTypes.severityHigh, { theme })).toBe('#F32E43');
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
