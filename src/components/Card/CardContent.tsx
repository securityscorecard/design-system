import { forwardRef } from 'react';

import { CardContainer } from './Card';

const CardContent = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Record<string, unknown>>
>(({ children, ...props }, ref) => (
  <CardContainer
    ref={ref}
    $horizontalPadding="6x"
    $verticalPadding="4x"
    {...props}
  >
    {children}
  </CardContainer>
));

export default CardContent;
