import { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import cls from 'classnames';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { CLX_COMPONENT } from '../../../theme/constants';
import { Text } from '../../Text';

const LabelRoot = styled(Text)`
  display: block;
  padding-top: ${getSpace(SpaceSizes.xs)};
  padding-bottom: ${getSpace(SpaceSizes.xs)};
  cursor: 'inherit';

  > * {
    margin: 0;
  }
`;

const Label = ({
  children,
  htmlFor,
  className,
  ...props
}: ComponentPropsWithoutRef<'label'> & { children: ReactNode }) => (
  <LabelRoot
    as="label"
    className={cls(CLX_COMPONENT, className)}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </LabelRoot>
);

export default Label;
