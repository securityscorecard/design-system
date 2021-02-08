import React, { useState } from 'react';
import { isNotUndefined, noop } from 'ramda-adjunct';
import styled from 'styled-components';

import {
  createMarginSpacing,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';
import { IconTypes } from '../../../theme/icons/icons.enums';
import StyledIcon from '../../Button/StyledIcon';
import { ButtonSizes } from '../../Button/Button.enums';
import {
  ToolsTabButtonProps,
  ToolsTabItemPropType,
  ToolsTabItemProps,
} from './ToolsTabItem.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

const DefaultToolsTabItem = styled.button<ToolsTabButtonProps>`
  height: ${pxToRem(32)};
  line-height: ${getLineHeight('md')};
  font-size: ${getFontSize('md')};
  font-weight: ${getFontWeight('medium')};

  padding: ${pxToRem(6, 12)};
  margin-right: ${pxToRem(4)};
  ${({ margin }) => createMarginSpacing(margin)};
  color: ${getColor('graphite2B')};
  border: 2px solid transparent;
  &:focus:not(:disabled),
  &:hover:not(:disabled),
  &:not([href]):not([tabindex]):not(:disabled):hover,
  &.hover,
  &.focus {
    color: ${getColor('graphite4B')};
    svg {
      color: ${getColor('graphite2B')};
    }
  }
`;

const ActiveToolsTabItem = styled(DefaultToolsTabItem)`
  background-color: ${getColor('graphite5H')};
  color: ${getColor('blueberryClassic')};
  border-radius: ${pxToRem(20)};
  border-color: ${getColor('blueberryClassic')};

  &:focus:not(:disabled),
  &:hover:not(:disabled),
  &:not([href]):not([tabindex]):not(:disabled):hover,
  &.hover,
  &.focus {
    background-color: ${getColor('graphite5H')};
    color: ${getColor('radiantBlueberry')};
    border-color: ${getColor('radiantBlueberry')};
    svg {
      color: ${getColor('radiantBlueberry')};
    }
  }
`;

const AppliedToolsTabItem = styled(DefaultToolsTabItem)`
  color: ${getColor('graphite2B')};

  svg {
    color: ${getColor('blueberryClassic')};
  }

  &:focus:not(:disabled),
  &:hover:not(:disabled),
  &:not([href]):not([tabindex]):not(:disabled):hover,
  &.hover,
  &.focus {
    color: ${getColor('graphite4B')};
    svg {
      color: ${getColor('radiantBlueberry')};
    }
  }
`;

const ToolsTabItem: React.FC<ToolsTabItemProps> = ({
  label,
  toolState = ToolsTabItemStates.default,
  onToolActivate = noop,
  onToolDeactivate = noop,
  iconName,
  iconType = IconTypes.ssc,
  margin,
  isDisabled = false,
  ...props
}) => {
  const [currentToolState, setCurrentToolState] = useState(toolState);

  const onClickNotActive = (event) => {
    onToolActivate(event);
    setCurrentToolState(ToolsTabItemStates.active);
  };

  const onClickActive = (event) => {
    onToolDeactivate(event);
    setCurrentToolState(ToolsTabItemStates.applied);
  };

  const content = isNotUndefined(iconName) ? (
    <>
      <StyledIcon name={iconName} size={ButtonSizes.sm} type={iconType} />
      {label}
    </>
  ) : (
    label
  );
  const commonProps = {
    margin,
    ...props,
  };

  if (isDisabled) {
    return null;
  }

  if (currentToolState === ToolsTabItemStates.applied) {
    return (
      <AppliedToolsTabItem onClick={onClickNotActive} {...commonProps}>
        {content}
      </AppliedToolsTabItem>
    );
  }

  if (currentToolState === ToolsTabItemStates.active) {
    return (
      <ActiveToolsTabItem onClick={onClickActive} {...commonProps}>
        {content}
      </ActiveToolsTabItem>
    );
  }

  return (
    <DefaultToolsTabItem onClick={onClickNotActive} {...commonProps}>
      {content}
    </DefaultToolsTabItem>
  );
};

ToolsTabItem.propTypes = { ...ToolsTabItemPropType };

export default ToolsTabItem;
