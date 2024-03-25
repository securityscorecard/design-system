export type SearchBarProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'disabled'
> & {
  /**
   * If true search is triggered automatically by onChange event.
   * */
  hasDebouncedSearch?: boolean;
  /**
   * Time used to debounce search, in milliseconds
   */
  debounceTime?: number;
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
  /**
   * When true search will be triggered on mount when defaultValue is provided
   */
  shouldTriggerSearchOnMount?: boolean;
  className?: string;
};
