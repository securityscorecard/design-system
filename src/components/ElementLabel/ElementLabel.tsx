import { ElementType, ReactNode, useMemo } from 'react';
import styled from 'styled-components';

import { PolymorphicProps } from '../../types/utils.types';

type ElementLabelOwnProps = {
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
};
export type ElementLabelProps<Element extends ElementType> = PolymorphicProps<
  ElementLabelOwnProps,
  Element
>;

const ElementLabelRoot = styled.span`
  font-family: var(--sscds-font-family-body);
  font-size: var(--sscds-elementlabel-font-size);
  font-weight: var(--sscds-elementlabel-font-weight);
  line-height: var(--sscds-font-lineheight-elementlabel);
  color: var(--sscds-elementlabel-color);
`;
ElementLabelRoot.displayName = 'ElementLabel.Root';

function ElementLabel<E extends ElementType = 'span'>({
  children,
  size = 'sm',
  color = 'default',
  isStrong = false,
  ...props
}: ElementLabelProps<E>) {
  const vars = useMemo(
    () => ({
      '--sscds-elementlabel-font-size': `var(--sscds-font-size-elementlabel-${size})`,
      '--sscds-elementlabel-font-weight': isStrong
        ? 'var(--sscds-font-weight-elementlabel-strong)'
        : 'var(--sscds-font-weight-elementlabel-default)',
      '--sscds-elementlabel-color':
        color === 'link'
          ? 'var(--sscds-color-link-default)'
          : `var(--sscds-color-text-${color})`,
      ...props.style,
    }),
    [color, isStrong, props.style, size],
  );

  return (
    <ElementLabelRoot {...props} style={vars}>
      {children}
    </ElementLabelRoot>
  );
}
ElementLabel.displayName = 'Label';

export default ElementLabel;
