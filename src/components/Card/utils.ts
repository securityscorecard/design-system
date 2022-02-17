import { negate, path, pipe } from 'ramda';

import { pxToRem } from '../../utils';
import { CardWrapperPropsWithTheme } from './Card.types';

export const getNegativeSpace = ({
  theme,
  paddingSize,
}: Omit<CardWrapperPropsWithTheme, '$direction'>): string =>
  pipe(path(['space', paddingSize]), negate, pxToRem)(theme);

export const getCommonMargin = (props: CardWrapperPropsWithTheme): string => {
  const value = getNegativeSpace(props);

  return `
    margin-${props.$direction === 'vertical' ? 'left' : 'top'}: ${value};
    margin-${props.$direction === 'vertical' ? 'right' : 'bottom'}: ${value};
  `;
};

export const getMarginFrom = (origin: 'start' | 'end') => (
  props: CardWrapperPropsWithTheme,
): string => {
  const value = getNegativeSpace(props);

  if (origin === 'start') {
    return `
      margin-${props.$direction === 'vertical' ? 'top' : 'left'}: ${value};
    `;
  }
  return `
    margin-${props.$direction === 'vertical' ? 'bottom' : 'right'}: ${value};
  `;
};
