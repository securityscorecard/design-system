import { Color } from '../../../theme';

export type Trend = 'positive' | 'negative' | 'stable';

export const IconBackgroundColor: Record<Trend, Color> = {
  positive: 'success.50',
  negative: 'error.50',
  stable: 'neutral.200',
};

export const FontColor: Record<Trend, Color> = {
  positive: 'success.700',
  negative: 'error.700',
  stable: 'neutral.700',
};
