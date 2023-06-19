import type { HTMLProps } from 'react';

import { useEffect, useRef } from 'react';

export const IndeterminateCheckbox = ({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <input
      ref={ref}
      className={`${className} cursor-pointer`}
      type="checkbox"
      {...rest}
    />
  );
};
