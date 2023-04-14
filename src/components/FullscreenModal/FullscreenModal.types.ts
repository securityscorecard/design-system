import {
  FullscreenModalLayouts,
  FullscreenModalSizes,
} from './FullscreenModal.enums';

export type FullscreenModalSizes =
  typeof FullscreenModalSizes[keyof typeof FullscreenModalSizes];
export type FullscreenModalLayouts =
  typeof FullscreenModalLayouts[keyof typeof FullscreenModalLayouts];
export type FullscreenModalColumnConfig = Record<
  'header' | 'sidebar' | 'content',
  [number, number]
>;
export type FullscreenModalColumnConfigMap = Record<
  FullscreenModalLayouts,
  FullscreenModalColumnConfig
>;
export interface FullscreenModalProps {
  layout: FullscreenModalLayouts;
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  sidebar?: React.ReactNode;
  scrollToTopButtonLabel?: string;
  onClose: () => void;
}
