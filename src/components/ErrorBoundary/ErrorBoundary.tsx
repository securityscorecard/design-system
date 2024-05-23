import React from 'react';
import styled from 'styled-components';
import { partialRight, pipe, prop } from 'ramda';

import { ErrorBoundaryProps } from './ErrorBoundary.types';
import { Inline, Stack } from '../layout';
import { Link, Text } from '../typographyLegacy';
import { pxToRem } from '../../utils';
import { useLogger } from '../../hooks/useLogger';

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

export const DEFAULT_TITLE = 'We cannot show this information now';
export const DEFAULT_CONTENT = 'If the problem persists, contact support.';

const ExtraSmallErrorBoundary = ({
  content = 'Failed to load.',
}: ErrorBoundaryProps) => (
  <Text size="md" variant="secondary">
    {content}
  </Text>
);

const SmallErrorBoundary = ({
  title = DEFAULT_TITLE,
  content = DEFAULT_CONTENT,
  illustration,
  onClick,
  size,
}: ErrorBoundaryProps) => {
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
const MediumErrorBoundary = ({
  illustration,
  title = DEFAULT_TITLE,
  content = DEFAULT_CONTENT,
  justify = 'center',
  size,
  onClick,
}: ErrorBoundaryProps) => {
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

const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { size } = props;
  const { error } = useLogger('ErrorBoundary');
  const Component = ComponentSizeMap[size];

  if (typeof Component === 'undefined') {
    error(
      `Wrong size (${size}) was provided to ErrorBoundary component. Valid values are ${Object.keys(
        ComponentSizeMap,
      )}`,
    );
    return null;
  }

  return <Component {...props} />;
};

export default ErrorBoundary;
