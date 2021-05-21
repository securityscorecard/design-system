import React from 'react';

import { H4, Paragraph } from '../../../typography';
import { TextSizes } from '../../../typography/Text/Text.enums';

const LoadingNoData: React.FC = () => (
  <>
    <H4 margin={{ top: 0, bottom: 0.8 }}>Loading...</H4>
    <Paragraph margin={{ bottom: 0.8 }} size={TextSizes.md}>
      Please wait, this may take a few moments
    </Paragraph>
  </>
);

export default LoadingNoData;
