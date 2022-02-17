import React from 'react';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<Record<string, unknown>>
>(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
));

export default CardContent;
