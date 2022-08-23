type WithDebouncedSearch = {
  /**
   * If true search is triggered automatically by onChange event.
   * */
  hasDebouncedSearch: true;
  /**
   * Time used to debounce search, in milliseconds
   */
  debounceTime?: number;
};

type WithoutDebouncedSearch = {
  hasDebouncedSearch?: false;
  debounceTime?: never;
};

type DebounceProps = WithDebouncedSearch | WithoutDebouncedSearch;

type ControlledSearchInputProps = {
  /**
   * Input value for controlled form component
   */
  value: string;
  /**
   * Change event
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Default value for uncontrolled form component
   */
  defaultValue?: never;
} & DebounceProps;

type UncontrolledSearchInputProps = {
  value?: never;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
} & DebounceProps;

export type SearchBarProps = (
  | ControlledSearchInputProps
  | UncontrolledSearchInputProps
) &
  Omit<React.ComponentPropsWithRef<'input'>, 'disabled'> & {
    /**
     * Event triggered by clicking clear button. For controlled component
     * should reset the `value` property. For uncontrolled component
     * clear is handled automatically but `onClear` is also triggered.
     */
    onClear?: () => void;
    /**
     * Event triggered by `Enter` key that calls function with current input
     * value as first argument. If `hasDebouncedSearch` is set to `true` this
     * function is called automatically when debounce time is reached.
     *
     * This function is not cancellable, if you need to cancel your search
     * request you should implement search outside this component and not
     * use `onSearch` property.
     */
    onSearch?: (value: string) => void | Promise<void>;
    /**
     * Show loader when `true`. If `onSearch` is defined, this property is used
     * internally. If you implement search outside this component you may want
     * to use this property to indicate that search is in progress.
     */
    isSearching?: boolean;
    /**
     * Disable the search field
     */
    isDisabled?: boolean;
    /**
     * The search value is invalid
     */
    isInvalid?: boolean;
  };
