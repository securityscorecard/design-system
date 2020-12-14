import { FullscreenModalSizes } from './FullscreenModal.enums';

export type Sizes = typeof FullscreenModalSizes[keyof typeof FullscreenModalSizes];

export interface FullscreenModalProps {
  size?: Sizes;
  onClose?: () => void;
}
