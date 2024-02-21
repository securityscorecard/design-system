import type { CSSProperties, ComponentProps, ReactNode } from 'react';

import { forwardRef } from 'react';
import styled from 'styled-components';

import { Surface } from '../layout';
import { pxToRem } from '../../utils';

interface ScrollViewProps
  extends Omit<ComponentProps<typeof Surface>, 'background'> {
  children: ReactNode;
  maxHeight?: number | string;
}

const ScrollViewRoot = styled(Surface)`
  /* stylelint-disable-next-line custom-property-pattern */
  max-height: var(--sscds-maxHeight);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background:
    /* Shadow Cover TOP */ linear-gradient(
        var(--sscds-background) 30%,
        rgb(255 255 255 / 0%)
      )
      center top,
    /* Shadow Cover BOTTOM */
      linear-gradient(rgb(255 255 255 / 0%), var(--sscds-background) 70%) center
      bottom,
    /* Shadow TOP */
      radial-gradient(farthest-side at 50% 0, rgb(0 0 0 / 15%), rgb(0 0 0 / 0%))
      center top,
    /* Shadow BOTTOM */
      radial-gradient(
        farthest-side at 50% 100%,
        rgb(0 0 0 / 15%),
        rgb(0 0 0 / 0%)
      )
      center bottom,
    var(--sscds-background);
  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
`;

export const ScrollView = forwardRef<HTMLDivElement, ScrollViewProps>(
  (
    {
      children,
      maxHeight = '100%',
      radius = 'none',
      hasBorder = false,
      style,
      ...props
    },
    ref,
  ) => {
    const cssVars: CSSProperties = {
      '--sscds-maxHeight': pxToRem(maxHeight),
      ...style,
    };

    return (
      <ScrollViewRoot
        ref={ref}
        hasBorder={hasBorder}
        radius={radius}
        style={cssVars}
        {...props}
        background="white"
      >
        {children}
      </ScrollViewRoot>
    );
  },
);
