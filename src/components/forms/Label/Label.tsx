import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '../../typography';
import { TextSizes, TextVariants } from '../../typography/Text/Text.enums';

const BlockLabel = styled(Paragraph)`
  display: block;
`;

const Label: React.FC<
  React.HTMLProps<HTMLLabelElement> & React.ComponentProps<typeof Paragraph>
> = ({ children, ...props }) => (
  <BlockLabel
    as="label"
    margin={{ bottom: 0.25 }}
    size={TextSizes.lg}
    variant={TextVariants.secondary}
    {...props}
  >
    {children}
  </BlockLabel>
);

export default Label;
