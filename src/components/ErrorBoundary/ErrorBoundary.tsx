import type { ErrorBoundaryProps } from './ErrorBoundary.types';

import React from 'react';
import styled from 'styled-components';
import { partialRight, pipe, prop } from 'ramda';

import { Inline, Stack } from '../layout';
import { Link, Text } from '../typographyLegacy';
import { pxToRem } from '../../utils';

const IllustrationContainerSizes = {
  sm: 24,
  md: 48,
  lg: 64,
};

const getIllustrationSize = pipe(
  prop('size'),
  partialRight(prop, [IllustrationContainerSizes]),
  pxToRem,
);

const IllustrationContainer = styled.div<{ size: string }>`
  width: ${getIllustrationSize};
  height: ${getIllustrationSize};
`;

const DEFAULT_TITLE = 'We cannot show this information now';
const DEFAULT_CONTENT = 'If the problem persists, contact support.';

const ExtraSmallErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  content = 'Failed to load.',
}) => (
  <Text size="md" variant="secondary">
    {content}
  </Text>
);

const SmallErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  title = DEFAULT_TITLE,
  content = DEFAULT_CONTENT,
  illustration,
  onClick,
  size,
}) => {
  return (
    <Inline align="center" gap="md">
      {illustration && (
        <IllustrationContainer size={size}>
          {illustration}
        </IllustrationContainer>
      )}
      <Text size="md" variant="secondary" isBold>
        {title}
      </Text>
      <Text size="md" variant="secondary">
        {content}
      </Text>
      {onClick && <Link onClick={onClick}>Try Again</Link>}
    </Inline>
  );
};
const MediumErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  illustration,
  title = DEFAULT_TITLE,
  content = DEFAULT_CONTENT,
  justify = 'center',
  size,
  onClick,
}) => {
  return (
    <Stack gap="sm" justify={justify}>
      {illustration && (
        <IllustrationContainer size={size}>
          {illustration}
        </IllustrationContainer>
      )}
      <Text size="h4" variant="secondary">
        {title}
      </Text>
      <Text variant="secondary">{content}</Text>
      {onClick && <Link onClick={onClick}>Try Again</Link>}
    </Stack>
  );
};

const ComponentSizeMap = {
  xs: ExtraSmallErrorBoundary,
  sm: SmallErrorBoundary,
  md: MediumErrorBoundary,
  lg: MediumErrorBoundary,
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = (props) => {
  const { size } = props;
  const Component = ComponentSizeMap[size];
  return <Component {...props} />;
};

export default ErrorBoundary;
