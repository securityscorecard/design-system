import type { SkeletonProps } from './Skeleton.types';

import styled, { keyframes } from 'styled-components';
import { includes } from 'ramda';
import { memo } from 'react';

import { getColor, getRadii, pxToRem } from '../../utils';

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

const Placeholder = styled.span.withConfig({
  shouldForwardProp: (property) => !includes(property, ['width']),
})<SkeletonProps>`
  display: block;
  background: ${getColor('neutral.300')};
  position: relative;
  overflow: hidden;
  height: ${({ height }) => pxToRem(height ?? 'auto')};
  width: ${({ width }) => pxToRem(width ?? 'auto')};
  border-radius: ${({ variant = 'text', theme }) =>
    getRadii(variant === 'circular' ? 'circle' : 'default')({ theme })};
  -webkit-mask-image: radial-gradient(white, black);

  &:empty::before {
    content: '\\00a0';
  }

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
    inset: 0;
  }
`;

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <Placeholder {...props} />;
};

export default memo(Skeleton);
