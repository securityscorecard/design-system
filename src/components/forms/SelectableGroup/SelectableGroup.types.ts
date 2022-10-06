export type Option = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

type BaseProps = {
  /**
   * List of selectable options
   */
  options: Option[];
  className?: string;
};

type DiscriminatedProps =
  | {
      isMulti: true;
      value?: string[];
      defaultValue?: string[];
      onChange?: (value: string[]) => void;
      name?: string;
    }
  | {
      /**
       * Flag indicating whether multiple options can be selected
       */
      isMulti?: false;
      /**
       * Current value, used for controlled input
       */
      value?: string;
      /**
       * Default selected value, used for uncontrolled input
       */
      defaultValue?: string;
      /**
       * Callback when option is selected
       */
      onChange?: (value: string) => void;
      /**
       * Group name. Required for single select
       */
      name: string;
    };

export type SelectableGroupProps = BaseProps & DiscriminatedProps;
