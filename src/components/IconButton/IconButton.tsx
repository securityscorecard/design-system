import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { getFontSize, getRadii, pxToRem } from '../../utils';
import { Button } from '../Button';
import { ButtonVariants } from '../Button/Button.enums';
import { Icon } from '../Icon';
import { SSCIcons, Types } from '../Icon/Icon.types';
import { IconButtonProps } from './IconButton.types';

const StyledIconButton = styled(Button)`
  border-radius: ${getRadii('circle')};
  min-width: 0;
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  padding: ${pxToRem(6)};
`;

const StyledIcon = styled(Icon)`
  font-size: ${getFontSize('md')};
`;

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  iconType = IconTypes.ssc,
  label,
  ...props
}) => {
  return (
    <StyledIconButton
      aria-label={label}
      variant={ButtonVariants.outline}
      {...props}
    >
      <StyledIcon name={iconName} type={iconType} hasFixedWidth />
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  margin: SpacingSizeValuePropType,
  href: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
    }).isRequired,
  ]),
  iconName: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]),
  iconType: PropTypes.oneOfType([
    PropTypes.oneOf<Types>(Object.values(IconTypes)),
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

export default IconButton;
