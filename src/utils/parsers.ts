import { map } from 'ramda';

import { getSpace, pxToRem } from './helpers';
import { getPaddingSpace } from './space';

export const gapParser = (value, props) =>
  pxToRem(getSpace(value)({ theme: props.theme }));

export const paddingParser = (value, props) => {
  const padding = getPaddingSpace({ ...props, paddingSize: value });
  const transformedPadding = map(pxToRem, padding);
  return transformedPadding.join(' ');
};
