import type {
  ProgressBarSizes,
  ProgressBarVariants,
} from './ProgressBar.enums';

export type ProgressBarVariant =
  typeof ProgressBarVariants[keyof typeof ProgressBarVariants];
export type ProgressBarSize =
  typeof ProgressBarSizes[keyof typeof ProgressBarSizes];

export type ProgressBarProps = {
  /** Current value of the progress bar */
  value: number;
  /** Maximal value of the progress bar, used for calculation of the active bar width */
  maxValue?: number;
  /** Sizes of progress bar */
  size?: ProgressBarSize;
  /** Styling variant of progress bar */
  variant?: ProgressBarVariant;
};

export type RootProgressProps = {
  $progress: number;
  $variant: ProgressBarProps['variant'];
  $size: ProgressBarProps['size'];
};
