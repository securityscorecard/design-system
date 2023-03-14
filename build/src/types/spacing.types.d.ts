export declare type SpacingSizeValue = 'none' | number | {
    vertical?: number;
    horizontal?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
export declare const SpacingSizeValuePropType: any;
export interface SpacingProps {
    margin?: SpacingSizeValue;
    padding?: SpacingSizeValue;
}
