export type Cols = 'auto' | number;

export interface ColProps {
  /**
   * Number of columns to span
   */
  cols?: Cols;
  /**
   * Offset from left
   */
  offset?: number;
}
