import React from 'react';
import PropTypes from 'prop-types';

import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import Button from '../../../ButtonV2/Button';
import { Badge } from '../../../Badge';
import { Pill } from '../../../Pill';
import { Inline } from '../../../layout';
import { SSCIcons } from '../../../Icon/Icon.types';
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

ControlButton.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)).isRequired,
  onClick: PropTypes.func.isRequired,
  appliedFilters: PropTypes.number,
  hiddenColumns: PropTypes.number,
  className: PropTypes.string,
};

export default ControlButton;
