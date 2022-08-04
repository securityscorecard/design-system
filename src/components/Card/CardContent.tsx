import React from 'react';

import { SpaceSizes } from '../../theme';
import { CardContainer } from './Card';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Record<string, unknown>>
>(({ children, ...props }, ref) => (
  <CardContainer
    ref={ref}
    horizontalPadding={SpaceSizes.mdPlus}
    verticalPadding={SpaceSizes.md}
    {...props}
  >
    {children}
  </CardContainer>
));

export default CardContent;
