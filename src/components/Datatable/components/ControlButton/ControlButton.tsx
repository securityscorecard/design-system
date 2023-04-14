import type { FC } from 'react';
import type { ControlButtonProps } from './ControlButton.types';

import { Button } from '../../../Button';
import { Badge } from '../../../Badge';
import { Inline } from '../../../layout';

const ControlButton: FC<ControlButtonProps> = ({
  label,
  iconName,
  appliedFilters = 0,
  className = '',
  onClick,
}) => (
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
    </Inline>
  </Button>
);

export default ControlButton;
