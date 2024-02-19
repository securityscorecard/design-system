export type LoadingRootProps = {
  /** Min-height of the container */
  $height?: number;
};

export type LoadingProps = {
  /** Min-height of the container */
  height?: number;
  /** Short message - 'data' loading */
  subject?: string;
  /** Custom message */
  message?: string;
  /** Percentage of progress */
  progress?: number;
  /** optional test-id */
  testId?: string;
};
