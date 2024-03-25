import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { SpaceSizes } from '../../../theme';
import { getFontSize, getLineHeight, getSpace } from '../../../utils';
import { CLX_COMPONENT } from '../../../theme/constants';

const LabelRoot = styled.label`
  display: block;
  padding-top: ${getSpace(SpaceSizes.xs)};
  padding-bottom: ${getSpace(SpaceSizes.xs)};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
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
    className={cls(CLX_COMPONENT, className)}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </LabelRoot>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
