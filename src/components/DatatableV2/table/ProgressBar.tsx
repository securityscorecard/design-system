import styled, { keyframes } from 'styled-components';
import { memo } from 'react';

import { getRadii } from '../../../utils';

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
const ProgressBar = styled.span<{ $isTop?: boolean; $isBottom?: boolean }>`
  display: block;
  background: #ece8ff;
  overflow: hidden;
  position: absolute;
  inset: ${({ $isBottom }) => ($isBottom ? 0 : 'auto')} 0
    ${({ $isTop }) => ($isTop ? 0 : 'auto')} 0;
  z-index: 1;
  height: 0.25rem;
  width: 100%;
  border-radius: ${getRadii('default')};
  -webkit-mask-image: radial-gradient(white, black);

  &::after {
    animation: ${wave} 2s linear 0.5s infinite;
    background: linear-gradient(90deg, transparent, #6641f3, transparent);
    content: '';
    position: absolute;
    transform: translateX(-100%);
    inset: 0;
  }
`;

ProgressBar.defaultProps = {
  role: 'progressbar',
};

export default memo(ProgressBar);
