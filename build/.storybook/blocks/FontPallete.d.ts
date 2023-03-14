import { FunctionComponent } from 'react';
interface FontProps {
    title: string;
    subtitle: string;
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: string;
    lineHeight?: string;
    sampleText: string;
}
export declare const FontItem: FunctionComponent<FontProps>;
export declare const FontPalette: FunctionComponent;
export {};
