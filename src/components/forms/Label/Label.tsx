import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { Paragraph } from '../../typography';
import { TextSizes } from '../../typography/Text/Text.enums';

const LabelContainer = styled.div`
  padding-top: ${getSpace(SpaceSizes.xs)};
  padding-bottom: ${getSpace(SpaceSizes.xs)};

  > * {
    margin: 0;
  }
`;

const Label: React.FC<
  React.HTMLProps<HTMLLabelElement> & React.ComponentProps<typeof Paragraph>
> = ({ children, htmlFor, ...props }) => (
  <LabelContainer {...props}>
    <Paragraph as="label" htmlFor={htmlFor} size={TextSizes.md}>
      {children}
    </Paragraph>
  </LabelContainer>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
};

export default Label;
