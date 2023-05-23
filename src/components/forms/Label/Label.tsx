import type { ComponentPropsWithRef } from 'react';

import styled from 'styled-components';
import cls from 'classnames';
import { forwardRef } from 'react';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { Text } from '../../typographyLegacy';
import { TextSizes } from '../../typographyLegacy/Text/Text.enums';
import { CLX_COMPONENT } from '../../../theme/constants';

const LabelContainer = styled(Text)`
  display: block;
  padding-top: ${getSpace(SpaceSizes.xs)};
  padding-bottom: ${getSpace(SpaceSizes.xs)};
  cursor: 'inherit';

  > * {
    margin: 0;
  }
`;

const Label = forwardRef<HTMLLabelElement, ComponentPropsWithRef<typeof Text>>(
  ({ children, htmlFor, className, ...props }, ref) => (
    <LabelContainer
      ref={ref}
      as="label"
      className={cls(CLX_COMPONENT, className)}
      htmlFor={htmlFor}
      size={TextSizes.md}
      {...props}
    >
      {children}
    </LabelContainer>
  ),
);

export default Label;
