import {
  IconNames,
  LightIconTypes,
  RegularIconTypes,
} from '../Icon/Icon.types';

export type IconWrapperProps = (
  | {
      /** Sets icon size to one of the predefined sizes */
      size?: 'xs' | 'sm' | 'md' | 'lg';
      /**
       * Selects correct icon variant from DS or FontAwesome. The `ssc` and `fab` (brand) can be used
       * with any size. The XL size can be used with `fal` (light) but not with `far` (regular) type.
       * Smaller sizes can be used with `far` (regular) but not with `fal` (light) type.
       */
      type?: RegularIconTypes;
    }
  | {
      size: 'xl';
      type?: LightIconTypes;
    }
) & {
  name: IconNames;
  /** Selects appropriate styling variant for the wrapper */
  variant?: 'default' | 'subtle' | 'strong';
};
