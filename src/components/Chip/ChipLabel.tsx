import ElementLabel from '../ElementLabel/ElementLabel';
import { ChipLabelProps } from './types';

function ChipLabel({ children, isStrong = false }: ChipLabelProps) {
  return (
    <ElementLabel
      className="sscds-chip-label"
      isStrong={isStrong}
      style={{ '--sscds-elementlabel-color': 'var(--sscds-chip-color-text)' }}
    >
      {children}
    </ElementLabel>
  );
}

export default ChipLabel;
