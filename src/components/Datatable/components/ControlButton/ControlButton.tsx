import Button from '../../../ButtonV2/Button';
import { Inline } from '../../../layout';
import { ControlButtonProps } from './ControlButton.types';
import Chip from '../../../Chip/Chip';
import ChipLabel from '../../../Chip/ChipLabel';

const ControlButton = ({
  label,
  iconName,
  appliedFilters = 0,
  className = '',
  onClick,
  hiddenColumns = 0,
}: ControlButtonProps) => (
  <Inline align="center" gap="xs">
    <Button
      className={className}
      iconStart={{ name: iconName, type: 'ssc' }}
      size="sm"
      variant="ghost"
      onClick={onClick}
    >
      {label}
    </Button>
    {appliedFilters > 0 && (
      <Chip color="gray">
        <ChipLabel isStrong>{appliedFilters}</ChipLabel>
      </Chip>
    )}
    {hiddenColumns > 0 && (
      <Chip color="gray">
        <ChipLabel isStrong>{hiddenColumns}</ChipLabel>
        <ChipLabel>hidden</ChipLabel>
      </Chip>
    )}
  </Inline>
);

export default ControlButton;
