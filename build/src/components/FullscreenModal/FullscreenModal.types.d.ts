import { FullscreenModalLayouts, FullscreenModalSizes } from './FullscreenModal.enums';
export declare type Sizes = typeof FullscreenModalSizes[keyof typeof FullscreenModalSizes];
export declare type Layouts = typeof FullscreenModalLayouts[keyof typeof FullscreenModalLayouts];
export declare type ColumnConfig = Record<'header' | 'sidebar' | 'content', [
    number,
    number
]>;
export declare type ColumnConfigMap = Record<Layouts, ColumnConfig>;
export interface FullscreenModalProps {
    layout: Layouts;
    header: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
    sidebar?: React.ReactNode;
    scrollToTopButtonLabel?: string;
    onClose: () => void;
}
