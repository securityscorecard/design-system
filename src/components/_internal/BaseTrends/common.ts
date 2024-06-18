import { Color } from '../../../theme';

export type Trend = 'positive' | 'negative' | 'stable';

export const IconBackgroundColor: Record<Trend, Color> = {
  positive: 'success.100',
  negative: 'error.100',
  stable: 'neutral.200',
};

export const FontColor: Record<Trend, Color> = {
  positive: 'success.900',
  negative: 'error.900',
  stable: 'neutral.800',
};
