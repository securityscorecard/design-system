export interface LoadingOverlayProps {
  onCancel: (event: React.MouseEvent<HTMLElement>) => void;
  isCancelable?: boolean;
}
