import { isNotUndefined } from 'ramda-adjunct';

export const shrinkIfSticky = (
  sticky?: string,
): { style: { flex: string } } => {
  return isNotUndefined(sticky) && { style: { flex: '0 0 auto' } };
};

const makeStickyDirection = (direction: string): string => {
  if (direction === 'left') return 'left: 0;';
  if (direction === 'right') return 'right: 0;';
  return '';
};

export const makeStickyColumn = ({ sticky }: { sticky?: string }): string =>
  isNotUndefined(sticky) &&
  `
    justify-content: center;
    flex: 0 0 auto;
    position: sticky;
    z-index: 4;
    ${makeStickyDirection(sticky)}
  `;
