import { type CSSProperties, ComponentPropsWithoutRef, useMemo } from 'react';

import { Inline } from '../layout';
import { ChipProps } from './types';
import { ChipRoot } from './components';
import { getCommonChipStyles } from './utils';

function Chip({
  children,
  size = 'sm',
  color = 'gray',
  ...props
}: ChipProps & ComponentPropsWithoutRef<'div'>) {
  const chipStyles = useMemo<CSSProperties>(
    () => getCommonChipStyles({ size, color }),
    [size, color],
  );

  return (
    <ChipRoot {...props} style={{ ...props.style, ...chipStyles }}>
      <Inline align="center" gap="1x">
        {children}
      </Inline>
    </ChipRoot>
  );
}

Chip.displayName = 'Chip';

export default Chip;
