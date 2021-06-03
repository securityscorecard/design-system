import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor } from '../../../../utils';
import { Spinner } from '../../../Spinner';
import { FlexContainer } from '../../../FlexContainer';
import { Button } from '../../../Button';

const overlayStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const LoadingOverlayContainer = styled.div`
  ${overlayStyles}

  ${FlexContainer} {
    display: inline-flex;
    position: sticky;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 4rem;
    background: ${getColor('graphite5H')};
    padding: 0 0.5rem;
    height: 2.5rem;
    border-radius: 4px;

    > span {
      padding-left: 0.5rem;
      padding-right: 1rem;
    }
  }
`;

const LoadingBackground = styled.div`
  ${overlayStyles}
  background-color: ${getColor('graphite5H')};
  opacity: 0.75;
`;

const LoadingOverlay = ({ onCancel }) => (
  <LoadingOverlayContainer>
    <LoadingBackground />
    <FlexContainer alignItems="center">
      {onCancel ? (
        <>
          <Spinner height={24} width={24} dark />
          <span>Loading</span>
          <Button size="sm" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </>
      ) : (
        <Spinner height={48} width={48} dark />
      )}
    </FlexContainer>
  </LoadingOverlayContainer>
);

LoadingOverlay.propTypes = {
  onCancel: PropTypes.func,
};

export default LoadingOverlay;
