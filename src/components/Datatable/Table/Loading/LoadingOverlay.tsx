import React from 'react';
import styled, { css } from 'styled-components';

import { getColor } from '../../../../utils';
import { Spinner } from '../../../Spinner';

const overlayStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const LoadingOverlayContainer = styled.div`
  ${overlayStyles}

  ${Spinner} {
    display: inline-block;
    position: sticky;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 4rem;
    background: ${getColor('graphite5H')};
  }
`;

const LoadingBackground = styled.div`
  ${overlayStyles}
  background-color: ${getColor('graphite5H')};
  opacity: 0.75;
`;

const LoadingOverlay: React.FC = () => (
  <LoadingOverlayContainer>
    <LoadingBackground />
    <Spinner height={48} width={48} dark />
  </LoadingOverlayContainer>
);

export default LoadingOverlay;
