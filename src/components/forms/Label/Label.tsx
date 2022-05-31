import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { Text } from '../../typographyLegacy';
import { TextSizes } from '../../typographyLegacy/Text/Text.enums';

const LabelContainer = styled(Text)`
  display: block;
  padding-top: ${getSpace(SpaceSizes.xs)};
  padding-bottom: ${getSpace(SpaceSizes.xs)};
  cursor: 'inherit';

  > * {
    margin: 0;
  }
`;

const Label: React.FC<
  React.HTMLProps<HTMLLabelElement> & React.ComponentProps<typeof Text>
> = ({ children, htmlFor, ...props }) => (
  <LabelContainer as="label" htmlFor={htmlFor} size={TextSizes.md} {...props}>
    {children}
  </LabelContainer>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
};

export default Label;
