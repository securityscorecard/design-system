import { getNegativeSpace } from '../../utils';
import { CardWrapperPropsWithTheme } from './Card.types';

export const getCommonMargin = ({
  $direction,
  paddingSize,
  theme,
}: CardWrapperPropsWithTheme): string => {
  const value = getNegativeSpace(paddingSize, { theme });

  return `
    margin-${$direction === 'vertical' ? 'left' : 'top'}: ${value};
    margin-${$direction === 'vertical' ? 'right' : 'bottom'}: ${value};
  `;
};

export const getMarginFrom = (origin: 'start' | 'end') => ({
  $direction,
  paddingSize,
  theme,
}: CardWrapperPropsWithTheme): string => {
  const value = getNegativeSpace(paddingSize, { theme });

  if (origin === 'start') {
    return `
      margin-${$direction === 'vertical' ? 'top' : 'left'}: ${value};
    `;
  }
  return `
    margin-${$direction === 'vertical' ? 'bottom' : 'right'}: ${value};
  `;
};
