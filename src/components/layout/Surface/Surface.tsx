import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useMemo,
} from 'react';
import styled from 'styled-components';

export type SurfaceProps = {
  children: ReactNode;
  /** Background of the surface box */
  background?: 'default' | 'dynamic' | 'transparent';
  /** Corner rounding of the surface box */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** Size of the box shadow. Takes an integer in scale 0..5. Bigger value, bigger size of the shadow */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Show border around the surface box */
  hasBorder?: boolean;
} & ComponentPropsWithoutRef<'div'>;

const SurfaceRoot = styled.div`
  background: var(--sscds-background);
  border-radius: var(--sscds-radius);
  box-shadow: var(--sscds-elevation);
  border: var(--sscds-border-width) solid var(--sscds-border-color);
  transition: border-radius 300ms ease-in, background 300ms ease-in,
    box-shadow 300ms ease-in;
`;
const getBackground = (background: SurfaceProps['background']): string => {
  switch (background) {
    case 'dynamic':
      return 'var(--sscds-color-background-surface-dynamic)';
    case 'default':
      return 'var(--sscds-color-background-surface-default)';
    case 'transparent':
    default:
      return 'var(--sscds-color-clear)';
  }
};

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      background = 'default',
      radius = 'sm',
      elevation = 0,
      hasBorder = false,
      children,
      style,
      ...props
    }: SurfaceProps,
    ref,
  ) => {
    const styles: CSSProperties = useMemo(
      () => ({
        '--sscds-background': getBackground(background),
        '--sscds-radius':
          radius === 'none' ? 0 : `var(--sscds-radii-surface-${radius})`,
        '--sscds-elevation':
          elevation === 0 ? 'none' : `var(--sscds-shadow-${elevation}x)`,
        '--sscds-border-width': hasBorder ? '1px' : '0',
        '--sscds-border-color':
          background === 'dynamic'
            ? 'var(--sscds-color-border-surface-dynamic)'
            : 'var(--sscds-color-border-surface-default)',
      }),
      [background, elevation, hasBorder, radius],
    );

    return (
      <SurfaceRoot ref={ref} style={{ ...styles, ...style }} {...props}>
        {children}
      </SurfaceRoot>
    );
  },
);

Surface.displayName = 'Surface';

export default Surface;
