import type { ReactNode } from 'react';
import type {
  FullscreenModalLayouts,
  FullscreenModalSizes,
} from './FullscreenModal.enums';

export type Sizes =
  typeof FullscreenModalSizes[keyof typeof FullscreenModalSizes];
export type Layouts =
  typeof FullscreenModalLayouts[keyof typeof FullscreenModalLayouts];
export type ColumnConfig = Record<
  'header' | 'sidebar' | 'content',
  [number, number]
>;
export type ColumnConfigMap = Record<Layouts, ColumnConfig>;
export interface FullscreenModalProps {
  layout: Layouts;
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
  sidebar?: ReactNode;
  scrollToTopButtonLabel?: string;
  onClose: () => void;
}
