import styled, { css } from 'styled-components';

import { getDepth } from '../../../utils';

export const Overlay = styled.div<{ placement: 'center' | 'right' }>`
  ${({ placement }) =>
    css`
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: ${placement === 'center' ? 'center' : 'flex-start'};
      justify-content: ${placement === 'center' ? 'center' : 'flex-end'};
      z-index: ${getDepth('modal')};
    `}
`;
