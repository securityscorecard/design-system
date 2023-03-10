import type { PropsWithChildren } from 'react';

import { forwardRef } from 'react';

import { SpaceSizes } from '../../theme';
import { CardContainer } from './Card';

const CardContent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<Record<string, unknown>>
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
