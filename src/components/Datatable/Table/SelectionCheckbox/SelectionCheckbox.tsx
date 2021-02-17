import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Checkbox from '../../../forms/Checkbox/Checkbox';
import { SelectionCheckboxProps } from './SelectionCheckbox.types';
import { getColor, getFormStyle } from '../../../../utils/helpers';

const StyledSelectionCheckbox = styled(Checkbox)<{
  hasExclusionLogic: boolean;
}>`
  ${({ hasExclusionLogic }) =>
    hasExclusionLogic &&
    css`
      .ds-checkbox-box {
        background: ${getFormStyle('activeBorderColor')};
        border-color: ${getFormStyle('activeBorderColor')};
      }
      .ds-checkbox-mark {
        display: block;
      }
      .ds-checkbox-input {
        &:checked + .ds-checkbox-box {
          border: ${getFormStyle('borderWidth')} solid
            ${getFormStyle('borderColor')};
          background: ${getColor('graphite5H')};

          .ds-checkbox-mark {
            display: none;
          }
        }
      }
    `}
`;

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
  (
    {
      isIndeterminate,
      title,
      id,
      hasExclusionLogic = false,
      onSelect,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const defaultRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, defaultRef);

    useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = isIndeterminate ?? false;
      }
    }, [combinedRef, isIndeterminate]);

    const handleOnChange = (e) => {
      onChange(e);
      onSelect();
    };
    return (
      <StyledSelectionCheckbox
        ref={combinedRef}
        aria-label={title}
        checkboxId={id}
        hasExclusionLogic={hasExclusionLogic}
        isIndeterminate={isIndeterminate}
        name={id}
        onChange={handleOnChange}
        {...rest}
      />
    );
  },
);
SelectionCheckbox.propTypes = {
  isIndeterminate: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
  hasExclusionLogic: PropTypes.bool,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
};

export default SelectionCheckbox;
