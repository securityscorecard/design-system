import type { ControlButtonProps } from './ControlButton.types';

import { Button } from '../../../Button';
import { Badge } from '../../../Badge';
import { Pill } from '../../../Pill';
import { Inline } from '../../../layout';

const ControlButton = ({
  label,
  iconName,
  appliedFilters = 0,
  className = '',
  onClick,
  hiddenColumns = 0,
}: ControlButtonProps) => (
  <Button
    className={className}
    iconName={iconName}
    iconType="ssc"
    type="button"
    variant="text"
    onClick={onClick}
  >
    <Inline align="center" gap="sm">
      <span>{label}</span>
      {appliedFilters > 0 && <Badge count={appliedFilters} variant="neutral" />}
      {hiddenColumns > 0 && (
        <Pill color="gray" label={`${hiddenColumns} hidden`} />
      )}
    </Inline>
  </Button>
);

export default ControlButton;
