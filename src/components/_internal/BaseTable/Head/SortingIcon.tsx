import { memo } from 'react';
import styled, { css } from 'styled-components';

import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import { ColorTypes } from '../../../../theme/colors.enums';
import { pxToRem } from '../../../../utils';
import { Icon } from '../../../Icon';
import { SortingIconProps } from './Head.types';

const StyledIcon = styled(Icon).attrs((props) => ({
  color: ColorTypes.neutral700,
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

const SortingIcon = memo(({ isSorted, isSortedDesc }: SortingIconProps) => {
  if (isSortedDesc)
    return <StyledIcon name={SSCIconNames.sortDown} $isActive />;
  if (isSorted) return <StyledIcon name={SSCIconNames.sortUp} $isActive />;
  return <StyledIcon color={ColorTypes.neutral500} name={SSCIconNames.sort} />;
});

export default SortingIcon;
