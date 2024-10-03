import { ReactNode } from 'react';
import styled from 'styled-components';

import { WithAsProp } from '../../types/utils.types';

export type DisplayProps = WithAsProp<{
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'subtle' | 'success' | 'warning' | 'danger';
  isSubtle?: boolean;
  hasTabularNumbers?: boolean;
}>;

const DisplayRoot = styled.span`
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-display-font-size);
  font-weight: var(--sscds-display-font-weight);
  font-feature-settings: var(--sscds-display-font-features);
  line-height: 1;
  color: var(--sscds-display-color);
`;
DisplayRoot.displayName = 'Display.Root';

function Display({
  children,
  size = 'md',
  color = 'default',
  isSubtle = false,
  hasTabularNumbers = false,
  ...props
}: DisplayProps) {
  const vars = {
    '--sscds-display-font-size': `var(--sscds-font-size-display-${size})`,
    '--sscds-display-font-weight': isSubtle
      ? 'var(--sscds-font-weight-display-subtle)'
      : 'var(--sscds-font-weight-display-default)',
    '--sscds-display-font-features': `'tnum' ${Number(hasTabularNumbers)}`,
    '--sscds-display-color': `var(--sscds-color-text-${color})`,
  };

  return (
    <DisplayRoot style={vars} {...props}>
      {children}
    </DisplayRoot>
  );
}
Display.displayName = 'Display';

export default Display;
