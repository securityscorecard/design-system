import React from 'react';
import PropTypes from 'prop-types';

import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { Button } from '../../../Button';
import { Badge } from '../../../Badge';
import { Pill } from '../../../Pill';
import { Inline } from '../../../layout';
import { SSCIcons } from '../../../Icon/Icon.types';
import { ControlButtonProps } from './ControlButton.types';

const ControlButton: React.FC<ControlButtonProps> = ({
  label,
  iconName,
  appliedFilters = 0,
  className = '',
  onClick,
  hiddenColumns = 0,
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
      {hiddenColumns > 0 && (
        <Pill color="gray" label={`${hiddenColumns} hidden`} />
      )}
    </Inline>
  </Button>
);

ControlButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)).isRequired,
  onClick: PropTypes.func.isRequired,
  appliedFilters: PropTypes.number,
  hiddenColumns: PropTypes.number,
  className: PropTypes.string,
};

export default ControlButton;
