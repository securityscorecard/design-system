import {
  FullscreenModalLayouts,
  FullscreenModalSizes,
} from './FullscreenModal.enums';

export type Sizes = typeof FullscreenModalSizes[keyof typeof FullscreenModalSizes];
export type Layouts = typeof FullscreenModalLayouts[keyof typeof FullscreenModalLayouts];
export type ColumnConfig = Record<
  'header' | 'sidebar' | 'content',
  [number, number]
>;
export type ColumnConfigMap = Record<Layouts, ColumnConfig>;
export interface FullscreenModalProps {
  layout: Layouts;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  sidebar?: React.ReactNode;
  scrollToTopButtonLabel?: string;
  getModalRef?: (ref: React.MutableRefObject<HTMLDivElement>) => void;
  onClose: () => void;
}
