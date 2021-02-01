import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Explanation: https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
const useCombinedRefs = (...refs): React.MutableRefObject<HTMLInputElement> => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        // eslint-disable-next-line no-param-reassign
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

const IndeterminateCheckbox = forwardRef<
  HTMLInputElement,
  { indeterminate?: boolean }
>(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, defaultRef);

  useEffect(() => {
    if (combinedRef?.current) {
      combinedRef.current.indeterminate = indeterminate ?? false;
    }
  }, [combinedRef, indeterminate]);

  // TODO: style indeterminate checkbox state in `forms/Checkbox` and use it here
  return <input ref={combinedRef} type="checkbox" {...rest} />;
});
// eslint-disable-next-line react/boolean-prop-naming
IndeterminateCheckbox.propTypes = { indeterminate: PropTypes.bool };

export default IndeterminateCheckbox;
