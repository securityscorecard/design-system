import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from '../../../forms';
import { SelectionCheckboxProps } from './SelectionCheckbox.types';

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

const SelectionCheckbox = forwardRef<HTMLInputElement, SelectionCheckboxProps>(
  ({ indeterminate, title, id, ...rest }, ref) => {
    const defaultRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate ?? false;
      }
    }, [combinedRef, indeterminate]);
    return (
      <Checkbox
        ref={combinedRef}
        aria-label={title}
        checkboxId={id}
        isIndeterminate={indeterminate}
        name={id}
        type="checkbox"
        {...rest}
      />
    );
  },
);
SelectionCheckbox.propTypes = {
  // eslint-disable-next-line react/boolean-prop-naming
  indeterminate: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default SelectionCheckbox;
