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
  margin?: SpacingSizeValue;
  padding?: SpacingSizeValue;
}
