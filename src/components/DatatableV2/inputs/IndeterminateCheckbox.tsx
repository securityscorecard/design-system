import type { ComponentProps } from 'react';

import { useEffect, useRef } from 'react';

const IndeterminateCheckbox = ({
  indeterminate,
  ...props
}: ComponentProps<'input'> & { indeterminate?: boolean }) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !props.checked && indeterminate;
    }
  }, [ref, indeterminate, props.checked]);

  return (
    <input ref={ref} className={props.className} type="checkbox" {...props} />
  );
};

export default IndeterminateCheckbox;
