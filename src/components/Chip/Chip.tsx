import { type CSSProperties, useMemo } from 'react';

import { Inline } from '../layout';
import { ChipProps } from './types';
import { ChipRoot } from './components';
import { getCommonChipStyles } from './utils';

function Chip({ children, size = 'sm', color = 'gray' }: ChipProps) {
  const chipStyles = useMemo<CSSProperties>(
    () => getCommonChipStyles({ size, color }),
    [size, color],
  );

  return (
    <ChipRoot style={chipStyles}>
      <Inline align="center" gap="1x">
        {children}
      </Inline>
    </ChipRoot>
  );
}

Chip.displayName = 'Chip';

export default Chip;
