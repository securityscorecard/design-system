import Button from '../../../ButtonV2/Button';
import { Badge } from '../../../Badge';
import { Pill } from '../../../Pill';
import { Inline } from '../../../layout';
import { ControlButtonProps } from './ControlButton.types';

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
    {appliedFilters > 0 && <Badge count={appliedFilters} variant="neutral" />}
    {hiddenColumns > 0 && (
      <Pill color="gray" label={`${hiddenColumns} hidden`} />
    )}
  </Inline>
);

export default ControlButton;
