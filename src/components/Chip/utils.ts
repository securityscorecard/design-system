import { PillColors } from '../Pill';
import { Sizes } from './types';

export const getCommonChipStyles = ({
  size,
  color,
}: {
  size: Sizes;
  color: PillColors;
}) => ({
  '--sscds-chip-size': size === 'md' ? '2rem' : '1.5rem',
  '--sscds-chip-padding-block':
    size === 'md' ? 'var(--sscds-space-1x)' : '0 var(--sscds-space-half-x)',
  '--sscds-chip-radius':
    size === 'md' ? 'var(--sscds-radii-30)' : 'var(--sscds-radii-20)',
  '--sscds-chip-color-background': `var(--sscds-color-background-pill-${color}-default)`,
  '--sscds-chip-color-text': `var(--sscds-color-text-pill-${color})`,
});
