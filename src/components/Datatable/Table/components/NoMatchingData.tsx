import type { FC } from 'react';

import styled from 'styled-components';

import { pxToRem } from '../../../../utils';
import { H4, Paragraph } from '../../../typographyLegacy';
import { TextSizes } from '../../../typographyLegacy/Text/Text.enums';

const ListItem = styled.li`
  margin-left: ${pxToRem(16)};

  &::before {
    content: '• ';
  }
`;

const NoMatchingData: FC = () => (
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
        <ListItem>checking your queries for typos</ListItem>
      </ul>
    </Paragraph>
  </>
);

export default NoMatchingData;
