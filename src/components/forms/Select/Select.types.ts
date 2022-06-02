import { CommonProps, Props as ReactSelectProps } from 'react-select';
import { Props as ReactSelectCreatableProps } from 'react-select/creatable';
import { Props as ReactSelectAsyncProps } from 'react-select/async';
import { Props as ReactSelectAsyncCreatableProps } from 'react-select/async-creatable';
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

interface BaseSelectProps<IsMulti extends boolean = false> {
  defaultIsMenuOpen?: boolean;
  menuActions?: Array<ActionKinds<[MenuActionArgs<IsMulti>]>>;
  maxPillLabelLength?: number;
  isMenuPositionRelative?: boolean;
  isInvalid?: boolean;
}

type SyncSelectProps<IsMulti extends boolean = false> = {
  isAsync?: false;
} & ReactSelectProps<Option, IsMulti>;
type AsyncSelectProps<IsMulti extends boolean = false> = {
  isAsync: true;
} & ReactSelectAsyncProps<Option, IsMulti>;

export type SelectProps<IsMulti extends boolean = false> =
  BaseSelectProps<IsMulti> &
    (SyncSelectProps<IsMulti> | AsyncSelectProps<IsMulti>);

type SyncCreatableSelectProps<IsMulti extends boolean = false> = {
  isAsync?: false;
} & ReactSelectCreatableProps<Option, IsMulti>;
type AsyncCreatableSelectProps<IsMulti extends boolean = false> = {
  isAsync: true;
} & ReactSelectAsyncCreatableProps<Option, IsMulti>;

export type CreatableSelectProps<IsMulti extends boolean = false> =
  BaseSelectProps<IsMulti> & {
    createNewLabel?: string;
  } & (SyncCreatableSelectProps<IsMulti> | AsyncCreatableSelectProps<IsMulti>);

export const OptionPropType = PropTypes.exact({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
});

export const GroupPropType = PropTypes.exact({
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(OptionPropType).isRequired,
});
