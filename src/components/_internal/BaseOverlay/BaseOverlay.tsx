import styled, { css } from 'styled-components';

export const Overlay = styled.div<{ placement: 'center' | 'right' }>`
  ${({ placement }) =>
    css`
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: var(--sscds-color-background-overlay);
      display: flex;
      align-items: ${placement === 'center' ? 'center' : 'flex-start'};
      justify-content: ${placement === 'center' ? 'center' : 'flex-end'};
      z-index: var(--sscds-depth-modal);
    `}
`;
