import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import cls from 'classnames';

import { CLX_COMPONENT } from '../../../theme/constants';
import ElementLabel from '../../ElementLabel/ElementLabel';

const LabelRoot = styled(ElementLabel)<{ $isInline: boolean }>`
  display: block;
  padding-inline: var(--sscds-space-1x);
  padding-block-end: ${({ $isInline }) =>
    $isInline ? undefined : 'var(--sscds-space-2x)'};
  cursor: inherit;

  > * {
    margin: 0;
  }
`;

const Label = ({
  children,
  htmlFor,
  className,
  isInline = false,
  ...props
}: Omit<ComponentPropsWithoutRef<'label'>, 'color'> & {
  children: ReactNode;
  isInline?: boolean;
}) => (
  <LabelRoot
    $isInline={isInline}
    className={cls(CLX_COMPONENT, className)}
    forwardedAs="label"
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </LabelRoot>
);

export default Label;
