import { CommonProps, Props as ReactSelectProps } from 'react-select';
import { Props as ReactSelectCreatableProps } from 'react-select/creatable';
import PropTypes from 'prop-types';

import { ActionKinds } from '../../../types/action.types';

export interface Option {
  value: string;
  label: string;
  isDisabled?: boolean;
}

export type MenuActionArgs<IsMulti extends boolean> = Omit<
  CommonProps<Option, IsMulti>,
  'className' | 'cx' | 'getStyles'
>;

interface BaseSelectProps<IsMulti extends boolean = false>
  extends ReactSelectProps<Option, IsMulti> {
  defaultIsMenuOpen?: boolean;
  menuActions?: Array<ActionKinds<[MenuActionArgs<IsMulti>]>>;
  maxPillLabelLength?: number;
  isMenuPositionRelative?: boolean;
  isInvalid?: boolean;
}
export type SelectProps<IsMulti extends boolean = false> = ReactSelectProps<
  Option,
  IsMulti
> &
  BaseSelectProps<IsMulti>;
export type CreatableSelectProps<IsMulti extends boolean = false> =
  ReactSelectCreatableProps<Option, IsMulti> &
    BaseSelectProps<IsMulti> & {
      createNewLabel?: string;
    };

export const OptionPropType = PropTypes.exact({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
});

export const GroupPropType = PropTypes.exact({
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(OptionPropType).isRequired,
});
