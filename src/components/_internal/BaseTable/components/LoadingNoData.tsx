import React from 'react';

import { Inline } from '../../../layout';
import { Spinner } from '../../../Spinner';
import { TextSizes } from '../../../Text/Text.enums';
import { SpaceSizes } from '../../../../theme';
import { H4 } from '../../../Heading';
import { Paragraph } from '../../../Paragraph';

const LoadingNoData = () => (
  <>
    <Inline align="center" gap={SpaceSizes.sm}>
      <Spinner
        borderWidth={2}
        height={16}
        horizontalMargin={0}
        verticalMargin={0}
        width={16}
        dark
      />
      <H4 margin={{ top: 0, bottom: 0, left: 0.5 }}>Loading</H4>
    </Inline>
    <Paragraph margin={{ top: 0.8, bottom: 0.8 }} size={TextSizes.md}>
      This may take a few moments.
    </Paragraph>
  </>
);

export default LoadingNoData;
