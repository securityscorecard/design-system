export type SpacingSizeValue =
  | 'none'
  | number
  | {
      vertical?: number;
      horizontal?: number;
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
    };

export interface SpacingProps {
  /**
   * **DEPRECATED** use Layout Primitives for layouts
   *
   * @deprecated use layout primitives instead */
  margin?: SpacingSizeValue;
  /**
   * **DEPRECATED** use Layout Primitives for layouts
   *
   * @deprecated use layout primitives instead */
  padding?: SpacingSizeValue;
}
