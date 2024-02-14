import React, {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
} from 'react';
import styled, { useTheme } from 'styled-components';

import { Radii, getRadii } from '../../../utils';

const SurfaceBackgrounds = ['white', 'dynamic', 'transparent'] as const;
const SurfaceRadii = ['none', 'sm', 'md', 'lg'] as const;
const SurfaceMode = ['light', 'dark'] as const;

interface SurfaceProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  background?: typeof SurfaceBackgrounds[number];
  radius?: typeof SurfaceRadii[number];
  elevation?: number;
  hasBorder?: boolean;
  mode?: typeof SurfaceMode[number];
}

const SurfaceRoot = styled.div`
  background: var(--sscds-background);
  border-radius: var(--sscds-radius);
  box-shadow: inset 0 0 0 var(--sscds-borderWidth) var(--sscds-borderColor),
    var(--sscds-elevation);
  transition: border-radius 300ms ease-in, background 300ms ease-in,
    box-shadow 300ms ease-in;
`;
const getBackground = (
  background: typeof SurfaceBackgrounds[number],
  mode: typeof SurfaceMode[number],
): string => {
  switch (background) {
    case 'dynamic':
      return mode === 'light' ? 'rgba(0 0 0/5%)' : 'rgba(255 255 255/10%)';
    case 'white':
      return 'white';
    case 'transparent':
    default:
      return 'transparent';
  }
};

const getShadow = (elevation: number) => {
  return elevation === 0
    ? '0 0 0 transparent'
    : `0px ${elevation * 2}px ${elevation * 6}px rgba(0 0 0/15%)`;
};

const radiiMap: Record<
  Exclude<typeof SurfaceRadii[number], 'none'>,
  Exclude<Radii, 'circle' | 'half' | 'round'>
> = {
  sm: 'default',
  md: 'double',
  lg: 'large',
};

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      background = 'white',
      radius = 'sm',
      elevation = 0,
      hasBorder = false,
      mode = 'light',
      children,
      style,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();
    const cssVars: CSSProperties = {
      '--sscds-background': getBackground(background, mode),
      '--sscds-radius':
        radius === 'none' ? 0 : getRadii(radiiMap[radius], { theme }),
      '--sscds-elevation': getShadow(elevation),
      '--sscds-borderWidth': hasBorder ? '1px' : '0',
      '--sscds-borderColor':
        mode === 'light' ? 'rgba(0 0 0/15%)' : 'rgba(255 255 255/15%)',
      ...style,
    };

    return (
      <SurfaceRoot ref={ref} style={cssVars} {...rest}>
        {children}
      </SurfaceRoot>
    );
  },
);

export default Surface;
