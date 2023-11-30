import styled, { keyframes } from 'styled-components';
import { includes } from 'ramda';
import { memo } from 'react';

import { getColor, getRadii, pxToRem } from '../../../utils';

const wave = keyframes`
  0% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`;
const Skeleton = styled.span.withConfig({
  shouldForwardProp: (property) => !includes(property, ['width']),
})<{ width?: number | string }>`
  display: block;
  background: ${getColor('neutral.300')};
  position: relative;
  overflow: hidden;
  height: 1.25rem;
  width: ${({ width }) => pxToRem(width ?? '100%')};
  border-radius: ${getRadii('default')};
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &::after {
    animation: ${wave} 2s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      ${getColor('neutral.200')},
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export default memo(Skeleton);
