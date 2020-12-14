import { Sizes } from '../FullscreenModal.types';

export interface ContextProps {
  size: Sizes;
  modalRef: React.MutableRefObject<HTMLElement>;
  handleClose: () => void;
}
