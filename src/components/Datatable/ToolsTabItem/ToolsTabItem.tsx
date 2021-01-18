import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isNotUndefined, noop } from 'ramda-adjunct';
import styled from 'styled-components';

import { SpacingSizeValuePropType } from '../../../types/spacing.types';
import { getColor, pxToRem } from '../../../utils/helpers';
import { IconTypes, SSCIconNames } from '../../Icon/Icon.enums';
import { SSCIcons, Types } from '../../Icon/Icon.types';
import Button from '../../Button/Button';
import StyledIcon from '../../Button/StyledIcon';
import { ButtonSizes } from '../../Button/Button.enums';
import { ToolsTabItemProps } from './ToolsTabItem.types';
import { ToolsTabItemStates } from './ToolsTabItem.enum';

const DefaultToolsTabItem = styled(Button)`
  &&& {
    padding: ${pxToRem(9, 12)};
    color: ${getColor('graphite2B')};
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
  }
`;

const ActiveToolsTabItem = styled(Button)`
  &&& {
    padding: ${pxToRem(6, 12)};
    background-color: ${getColor('graphite5H')};
    color: ${getColor('blueberryClassic')};
    border-radius: ${pxToRem(20)};
    border-color: ${getColor('blueberryClassic')};
    border-width: 2px;
    border-style: solid;

    &:focus:not(:disabled),
    &:hover:not(:disabled),
    &:not([href]):not([tabindex]):not(:disabled):hover,
    &.hover,
    &.focus {
      background-color: ${getColor('graphite5H')};
      color: ${getColor('radiantBlueberry')};
      border-color: ${getColor('radiantBlueberry')};
    }
  }
`;

const AppliedToolsTabItem = styled(Button)`
  &&& {
    padding: ${pxToRem(9, 12)};
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
  }
`;

const ToolsTabItem: React.FC<
  ToolsTabItemProps & React.ComponentProps<typeof Button>
> = ({
  children,
  itemState = ToolsTabItemStates.default,
  activateTool = noop,
  deactivateTool = noop,
  iconName,
  iconType = IconTypes.ssc,
  margin = 'none',
  isDisabled = false,
  ...props
}) => {
  const [currentItemState, setCurrentItemState] = useState(itemState);

  const commonProps = {
    size: ButtonSizes.sm,
    variant: 'text',
    margin,
    ...props,
  };

  const onClickDefault = () => {
    activateTool();
    setCurrentItemState(ToolsTabItemStates.active);
  };

  const onClickActive = () => {
    deactivateTool();
    setCurrentItemState(ToolsTabItemStates.applied);
  };

  const onClickApplied = () => {
    activateTool();
    setCurrentItemState(ToolsTabItemStates.active);
  };

  const content = isNotUndefined(iconName) ? (
    <>
      <StyledIcon name={iconName} size={ButtonSizes.sm} type={iconType} />
      {children}
    </>
  ) : (
    children
  );

  return (
    <>
      {!isDisabled &&
        (currentItemState === ToolsTabItemStates.applied ? (
          <AppliedToolsTabItem onClick={onClickApplied} {...commonProps}>
            {content}
          </AppliedToolsTabItem>
        ) : currentItemState === ToolsTabItemStates.active ? (
          <ActiveToolsTabItem onClick={onClickActive} {...commonProps}>
            {content}
          </ActiveToolsTabItem>
        ) : (
          <DefaultToolsTabItem onClick={onClickDefault} {...commonProps}>
            {content}
          </DefaultToolsTabItem>
        ))}
    </>
  );
};

ToolsTabItem.propTypes = {
  itemState: PropTypes.oneOf(Object.values(ToolsTabItemStates)),
  activateTool: PropTypes.func,
  deactivateTool: PropTypes.func,
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
};

export default ToolsTabItem;
