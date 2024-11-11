import { type CSSProperties, type ElementType, useMemo } from 'react';

import { Inline } from '../layout';
import { InteractiveChipProps } from './types';
import { ChipRoot } from './components';
import { getCommonChipStyles } from './utils';

const dropStylingProps = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { style, className, ...rest } = props;

  return rest;
};
function InteractiveChip<E extends ElementType = 'button'>({
  children,
  size = 'sm',
  color = 'gray',
  as,
  ...props
}: InteractiveChipProps<E>) {
  const Tag = as || 'button';

  const chipStyles = useMemo<CSSProperties>(
    () => ({
      ...getCommonChipStyles({ size, color }),
      '--sscds-interactivechip-color-border': `var(--sscds-color-border-pill-${color}-default)`,
      '--sscds-interactivechip-color-border-hover': `var(--sscds-color-border-pill-${color}-hover)`,
      '--sscds-interactivechip-color-background-hover': `var(--sscds-color-background-pill-${color}-hover)`,
      cursor: 'pointer',
    }),
    [size, color],
  );

  return (
    <ChipRoot as={Tag} style={chipStyles} {...dropStylingProps(props)}>
      <Inline align="center" className="sscds-chip-content" gap="1x">
        {children}
      </Inline>
    </ChipRoot>
  );
}

InteractiveChip.displayName = 'InteractiveChip';

export default InteractiveChip;
