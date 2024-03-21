import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cls from 'classnames';

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

const Label = ({
  children,
  htmlFor,
  className,
  ...props
}: React.HTMLProps<HTMLLabelElement> & React.ComponentProps<typeof Text>) => (
  <LabelContainer
    as="label"
    className={cls(CLX_COMPONENT, className)}
    htmlFor={htmlFor}
    size={TextSizes.md}
    {...props}
  >
    {children}
  </LabelContainer>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

export default Label;
