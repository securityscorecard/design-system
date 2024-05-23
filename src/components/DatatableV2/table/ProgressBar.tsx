import styled, { keyframes } from 'styled-components';
import { memo } from 'react';
import { includes } from 'ramda';

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
const ProgressBar = styled.span.withConfig({
  shouldForwardProp: (property) => !includes(property, ['isTop', 'isBottom']),
})<{ isTop?: boolean; isBottom?: boolean }>`
  display: block;
  background: var(--sscds-brand-100);
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${({ isTop }) => (isTop ? 0 : undefined)};
  top: ${({ isBottom }) => (isBottom ? 0 : undefined)};
  z-index: 1;
  height: 0.25rem;
  width: 100%;
  border-radius: ${getRadii('default')};
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &::after {
    animation: ${wave} 2s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      var(--sscds-brand-500),
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

ProgressBar.defaultProps = {
  role: 'progressbar',
};

export default memo(ProgressBar);
