import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
} from 'react';
import styled, { useTheme } from 'styled-components';
import clx from 'classnames';

import { Radii, getRadii } from '../../../utils';

const SurfaceBackgrounds = [
  'default',
  'white',
  'dynamic',
  'transparent',
] as const;
const SurfaceRadii = ['none', 'sm', 'md', 'lg'] as const;
const SurfaceMode = ['light', 'dark'] as const;

export type SurfaceProps = {
  children: ReactNode;
  /** Background of the surface box */
  background?: (typeof SurfaceBackgrounds)[number];
  /** Corner rounding of the surface box */
  radius?: (typeof SurfaceRadii)[number];
  /** Size of the box shadow. Takes and integer, Bigger value, bigger size of the shadow */
  elevation?: number;
  /** Show border around the surface box */
  hasBorder?: boolean;
  /**
   *  Switch color scheme for light or dark backgrounds
   *
   * @deprecated Replaced with design tokens for using dark mode add ".dark" classname
   * to Surface or its parent
   */
  mode?: (typeof SurfaceMode)[number];
} & ComponentPropsWithoutRef<'div'>;

const SurfaceRoot = styled.div`
  background: var(--sscds-background);
  border-radius: var(--sscds-radius);
  box-shadow: var(--sscds-elevation);
  border: var(--sscds-border-width) solid var(--sscds-border-color);
  transition: border-radius 300ms ease-in, background 300ms ease-in,
    box-shadow 300ms ease-in;
`;
const getBackground = (
  background: (typeof SurfaceBackgrounds)[number],
): string => {
  switch (background) {
    case 'dynamic':
      return 'var(--sscds-color-background-surface-dynamic)';
    case 'default':
    case 'white':
      return 'var(--sscds-color-background-surface-default)';
    case 'transparent':
    default:
      return 'var(--sscds-color-clear)';
  }
};

const getShadow = (elevation: number) => {
  return elevation === 0
    ? 'none'
    : `0px ${elevation * 2}px ${elevation * 6}px rgba(0 0 0/15%)`;
};

const radiiMap: Record<
  Exclude<(typeof SurfaceRadii)[number], 'none'>,
  Exclude<Radii, 'circle' | 'half' | 'round'>
> = {
  sm: 'default',
  md: 'double',
  lg: 'large',
};

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      background = 'default',
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
      '--sscds-background': getBackground(background),
      '--sscds-radius':
        radius === 'none' ? 0 : getRadii(radiiMap[radius], { theme }),
      '--sscds-elevation': getShadow(elevation),
      '--sscds-border-width': hasBorder ? '1px' : '0',
      '--sscds-border-color':
        background === 'dynamic'
          ? 'var(--sscds-color-border-surface-dynamic)'
          : 'var(--sscds-color-border-surface-default)',
      ...style,
    };

    return (
      <SurfaceRoot
        ref={ref}
        style={cssVars}
        {...rest}
        className={clx(rest.className, {
          dark: mode === 'dark',
        })}
      >
        {children}
      </SurfaceRoot>
    );
  },
);

export default Surface;
