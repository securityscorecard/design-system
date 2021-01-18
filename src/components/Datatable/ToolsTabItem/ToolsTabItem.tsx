import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isNotUndefined, noop } from 'ramda-adjunct';
import styled from 'styled-components';

import { SpacingSizeValuePropType } from '../../../types/spacing.types';
import {
  createMarginSpacing,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';
import { IconTypes, SSCIconNames } from '../../Icon/Icon.enums';
import { SSCIcons, Types } from '../../Icon/Icon.types';
import StyledIcon from '../../Button/StyledIcon';
import { ButtonSizes } from '../../Button/Button.enums';
import { ToolsTabItemProps } from './ToolsTabItem.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

const DefaultToolsTabItem = styled.button`
  height: ${pxToRem(32)};
  line-height: ${getLineHeight('md')};
  font-size: ${getFontSize('md')};
  font-weight: ${getFontWeight('medium')};

  padding: ${pxToRem(6, 12)};
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
  children,
  itemState = ToolsTabItemStates.default,
  onToolActivate = noop,
  onToolDeactivate = noop,
  iconName,
  iconType = IconTypes.ssc,
  margin = 'none',
  isDisabled = false,
  ...props
}) => {
  const [currentItemState, setCurrentItemState] = useState(itemState);

  const onClickNotActive = () => {
    onToolActivate();
    setCurrentItemState(ToolsTabItemStates.active);
  };

  const onClickActive = () => {
    onToolDeactivate();
    setCurrentItemState(ToolsTabItemStates.applied);
  };

  const content = isNotUndefined(iconName) ? (
    <>
      <StyledIcon name={iconName} size={ButtonSizes.sm} type={iconType} />
      {children}
    </>
  ) : (
    children
  );

  const commonProps = {
    margin,
    ...props,
  };

  return (
    <>
      {!isDisabled &&
        (currentItemState === ToolsTabItemStates.applied ? (
          <AppliedToolsTabItem onClick={onClickNotActive} {...commonProps}>
            {content}
          </AppliedToolsTabItem>
        ) : currentItemState === ToolsTabItemStates.active ? (
          <ActiveToolsTabItem onClick={onClickActive} {...commonProps}>
            {content}
          </ActiveToolsTabItem>
        ) : (
          <DefaultToolsTabItem onClick={onClickNotActive} {...commonProps}>
            {content}
          </DefaultToolsTabItem>
        ))}
    </>
  );
};

ToolsTabItem.propTypes = {
  itemState: PropTypes.oneOf(Object.values(ToolsTabItemStates)),
  iconName: PropTypes.oneOfType([
    PropTypes.oneOf<SSCIcons>(Object.values(SSCIconNames)),
    PropTypes.string,
  ]),
  iconType: PropTypes.oneOfType([
    PropTypes.oneOf<Types>(Object.values(IconTypes)),
    PropTypes.string,
  ]),
  margin: SpacingSizeValuePropType,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onToolActivate: PropTypes.func,
  onToolDeactivate: PropTypes.func,
};

export default ToolsTabItem;
