import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';

import { WithAsProp } from '../../types/utils.types';

export type ElementLabelProps = WithAsProp<{
  children: ReactNode;
  /* Font size */
  size?: 'sm' | 'md';
  /* Font color */
  color?:
    | 'default'
    | 'subtle'
    | 'disabled'
    | 'danger'
    | 'inverse'
    | 'white'
    | 'link';
  /* Font weight. When true ElementLabel will be rendered as bold */
  isStrong?: boolean;
}> &
  ComponentPropsWithoutRef<'span'>;

const ElementLabelRoot = styled.span`
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-elementlabel-font-size);
  font-weight: var(--sscds-elementlabel-font-weight);
  line-height: var(--sscds-font-lineheight-elementlabel);
  color: var(--sscds-elementlabel-color);
`;
ElementLabelRoot.displayName = 'ElementLabel.Root';

function ElementLabel({
  children,
  size = 'sm',
  color = 'default',
  isStrong = false,
  ...props
}: ElementLabelProps) {
  const vars = {
    '--sscds-elementlabel-font-size': `var(--sscds-font-size-elementlabel-${size})`,
    '--sscds-elementlabel-font-weight': isStrong
      ? 'var(--sscds-font-weight-elementlabel-strong)'
      : 'var(--sscds-font-weight-elementlabel-default)',
    '--sscds-elementlabel-color':
      color === 'link'
        ? 'var(--sscds-color-link-default)'
        : `var(--sscds-color-text-${color})`,
    ...props.style,
  };

  return (
    <ElementLabelRoot {...props} style={vars}>
      {children}
    </ElementLabelRoot>
  );
}
ElementLabel.displayName = 'Label';

export default ElementLabel;
