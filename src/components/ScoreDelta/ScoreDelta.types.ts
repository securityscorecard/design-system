export interface ScoreDeltaProps {
  /**
   * Delta value that would be displayed in the component. Trend icon and color variant is determined
   * by this value. When negative number is provided sign is not diplayed and is represended by
   * negative trend icon and color.
   */
  delta: number;
  /**
   * Number of decimal places that will be displayed in the component.
   */
  decimalsCount?: number;
  /** If true, the label will be hidden from assistive technologies */
  ariaHidden?: boolean;
}
