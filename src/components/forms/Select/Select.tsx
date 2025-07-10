import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';
import cls from 'classnames';

import { useSelectProps } from './useSelectProps';
import { SelectProps } from './Select.types';
import { CLX_COMPONENT } from '../../../theme/constants';

function Select<IsMulti extends boolean = false>({
  isAsync = false,
  placeholder = '',
  isInvalid = false,
  isDisabled = false,
  isClearable = false,
  maxPillLabelLength = 16,
  isMenuPositionRelative = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  ...props
}: SelectProps<IsMulti>) {
  const selectProps = useSelectProps<IsMulti>({
    placeholder,
    isInvalid,
    isDisabled,
    isClearable,
    maxPillLabelLength,
    isMenuPositionRelative,
    className,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedby,
    ...props,
  });

  // Enhanced accessibility props
  const accessibilityProps = {
    'aria-label': ariaLabel || 'Select an option',
    'aria-describedby': ariaDescribedby,
    'aria-invalid': isInvalid,
    'aria-disabled': isDisabled,
    'aria-expanded': false, // Will be controlled by react-select
    'aria-haspopup': 'listbox',
    'aria-autocomplete': 'list',
  };

  if (isAsync) {
    return (
      <AsyncReactSelect
        {...selectProps}
        {...accessibilityProps}
        className={cls(CLX_COMPONENT, className)}
      />
    );
  }

  return (
    <ReactSelect
      {...selectProps}
      {...accessibilityProps}
      className={cls(CLX_COMPONENT, className)}
    />
  );
}

Select.displayName = 'Select';

export default Select;
