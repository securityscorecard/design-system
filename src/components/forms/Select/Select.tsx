import type { ReactElement } from 'react';
import type { SelectProps } from './Select.types';

import ReactSelect from 'react-select';
import AsyncReactSelect from 'react-select/async';
import PropTypes from 'prop-types';
import cls from 'classnames';

import { ActionKindsPropType } from '../../../types/action.types';
import { useSelectProps } from './useSelectProps';
import { GroupPropType, OptionPropType } from './Select.types';
import { CLX_COMPONENT } from '../../../theme/constants';

function Select<IsMulti extends boolean = false>({
  isAsync = false,
  ...props
}: SelectProps<IsMulti>): ReactElement {
  const selectProps = useSelectProps<IsMulti>(props);
  const { className } = props;

  if (isAsync) {
    return (
      <AsyncReactSelect
        {...selectProps}
        className={cls(CLX_COMPONENT, className)}
      />
    );
  }

  return (
    <ReactSelect {...selectProps} className={cls(CLX_COMPONENT, className)} />
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([OptionPropType, GroupPropType]),
  ),
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    OptionPropType,
    PropTypes.arrayOf(OptionPropType),
  ]),
  defaultInputValue: PropTypes.string,
  defaultIsMenuOpen: PropTypes.bool,
  className: PropTypes.string,
  menuActions: PropTypes.arrayOf(ActionKindsPropType),
  maxPillLabelLength: PropTypes.number,
  maxVisibleItem: PropTypes.number,
  isMenuPositionRelative: PropTypes.bool,
  components: PropTypes.shape({}),
};

Select.defaultProps = {
  placeholder: '',
  isInvalid: false,
  isDisabled: false,
  isClearable: false,
  maxPillLabelLength: 16,
  isMenuPositionRelative: false,
  className: '',
};
Select.displayName = 'Select';

export default Select;
