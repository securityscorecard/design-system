import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Padbox, Stack } from '../layout';
import { ProgressBar } from '../ProgressBar';
import { Spinner } from '../Spinner';
import { Text } from '../Text';
import { pxToRem } from '../../utils';
import { LoadingRootProps } from './Loading.types';

const LoadingRoot = styled(Padbox)<LoadingRootProps>`
  display: flex;
  align-items: center;
  min-height: ${({ $height }) => pxToRem($height)};
`;

const Loading = ({ progress, subject, message, testId, height }) => {
  const text = message || (subject ? `${subject} loading` : 'Loading');

  return (
    <LoadingRoot $height={height} data-test-id={testId} paddingSize="lg">
      <Stack gap="md" style={{ width: '100%', textAlign: 'center' }}>
        {progress !== undefined && <ProgressBar size="thin" value={progress} />}
        <Spinner dark />
        <Text as="p" size="h5">
          {text}
        </Text>
      </Stack>
    </LoadingRoot>
  );
};

Loading.propTypes = {
  subject: PropTypes.string,
  message: PropTypes.string, // override the whole message
  progress: PropTypes.number,
  testId: PropTypes.string,
  height: PropTypes.number,
};

export default Loading;
