import type { FC } from 'react';
import type { SSCIcons } from '../../../Icon/Icon.types';
import type { ControlButtonProps } from './ControlButton.types';

import PropTypes from 'prop-types';

import { SSCIconNames } from '../../../../theme/icons/icons.enums';
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

ControlButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)).isRequired,
  onClick: PropTypes.func.isRequired,
  appliedFilters: PropTypes.number,
  className: PropTypes.string,
};

export default ControlButton;
