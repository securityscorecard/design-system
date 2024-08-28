import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { getColor, getRadii } from '../../../../utils';
import { LoadingOverlayProps } from './LoadingOverlay.types';
import { Spinner } from '../../../Spinner';
import Button from '../../../ButtonV2/Button';
import { Inline, Padbox } from '../../../layout';

const overlayStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const LoadingOverlayContainer = styled.div`
  ${overlayStyles}
`;

const LoadingIndicatorContainer = styled.div`
  > ${Padbox} {
    border-radius: ${getRadii('default')};
    background: ${getColor('neutral.0')};
  }

  display: flex;
  position: sticky;
  left: 0;
  right: 0;
  justify-content: center;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  margin: 6rem 0;
`;

const LoadingText = styled.span`
  padding-left: 0.5rem;
  padding-right: 1rem;
`;

const LoadingBackground = styled.div`
  ${overlayStyles}
  background-color: ${getColor('neutral.0')};
  opacity: 0.75;
`;

const LoadingOverlay = ({ isCancelable, onCancel }: LoadingOverlayProps) => (
  <LoadingOverlayContainer>
    <LoadingBackground />
    <LoadingIndicatorContainer>
      <Padbox paddingSize="sm">
        {isCancelable ? (
          <Inline align="center" gap="sm">
            <Spinner
              height={24}
              horizontalMargin={0}
              verticalMargin={0}
              width={24}
              dark
            />
            <LoadingText>Loading</LoadingText>
            <Button variant="subtle" onClick={onCancel}>
              Cancel
            </Button>
          </Inline>
        ) : (
          <Spinner height={48} verticalMargin={0} width={48} dark />
        )}
      </Padbox>
    </LoadingIndicatorContainer>
  </LoadingOverlayContainer>
);

LoadingOverlay.propTypes = {
  isCancelable: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default LoadingOverlay;
