import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { ColorTypes } from '../../../../theme/colors.enums';
import { pxToRem } from '../../../../utils';
import { Icon } from '../../../Icon';
import { SortingIconProps } from './Head.types';

const StyledIcon = styled(Icon).attrs((props) => ({
  color: ColorTypes.graphite2B,
  margin: { left: 0.3 },
  ...props,
}))<{ $isActive?: boolean } & React.ComponentProps<typeof Icon>>`
  font-size: ${pxToRem(10)};

  ${({ $isActive }) =>
    $isActive &&
    css`
      font-size: ${pxToRem(14)};
    `};
`;

const SortingIcon: React.FC<SortingIconProps> = React.memo(
  ({ isSorted, isSortedDesc }) => {
    if (isSortedDesc)
      return <StyledIcon name={SSCIconNames.sortDown} $isActive />;
    if (isSorted) return <StyledIcon name={SSCIconNames.sortUp} $isActive />;
    return (
      <StyledIcon color={ColorTypes.graphiteHB} name={SSCIconNames.sort} />
    );
  },
);

SortingIcon.propTypes = {
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
};

export default SortingIcon;
