import React from 'react';
import styled from 'styled-components';

import { pxToRem } from '../../../../utils/helpers';
import { H4, Paragraph } from '../../../typography';
import { TextSizes } from '../../../typography/Text/Text.enums';

const ListItem = styled.ul`
  margin-left: ${pxToRem(16)};

  &::before {
    content: '• ';
  }
`;

const NoMatchingData: React.FC = () => (
  <>
    <H4 margin={{ top: 0, bottom: 0.8 }}>
      No items match your current filters
    </H4>
    <Paragraph margin={{ bottom: 0.8 }} size={TextSizes.md}>
      You could try
    </Paragraph>
    <Paragraph as="div" margin="none" size={TextSizes.md}>
      <ul>
        <ListItem>
          using &quot;OR&quot; instead of &quot;AND&quot; to combine your
          queries
        </ListItem>
        <ListItem>
          using &quot;contains&quot; instead of &quot;is&quot; to cast a wider
          net
        </ListItem>
        <ListItem>checking your queries for typos</ListItem>
      </ul>
    </Paragraph>
  </>
);

export default NoMatchingData;
