import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { noop } from 'ramda-adjunct';

import {
  getBorderRadius,
  getColor,
  getFontFamily,
  getFontSize,
  getLineHeight,
  getSpace,
  pxToRem,
} from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { DropdownPaneProps, DropdownPaneStyles } from './Dropdown.types';

export const Arrow = styled.div`
  visibility: hidden;

  &,
  &::before {
    position: absolute;
    width: ${getSpace(SpaceSizes.sm)};
    height: ${getSpace(SpaceSizes.sm)};
    background: inherit;
    z-index: 0;
  }

  &::before {
    visibility: visible;
    content: '';
    background: ${getColor('graphite5H')};
    border-left: 1px solid ${getColor('graphiteB')};
    border-top: 1px solid ${getColor('graphiteB')};
  }
`;

export const StyledDropdownPane = styled.div<DropdownPaneStyles>`
  position: absolute;
  color: ${getColor('graphite4B')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  border: 1px solid ${getColor('graphiteB')};
  border-radius: ${getBorderRadius};
  ${({ $maxWidth }) => css`
    width: ${$maxWidth === 'auto' ? 'auto' : '100%'};
    max-width: ${$maxWidth === 'auto' ? 'auto' : pxToRem($maxWidth)};
  `}

  &[data-popper-placement^='top'] > ${/* sc-selector */ Arrow} {
    bottom: ${({ theme }) =>
      `calc(${getSpace(SpaceSizes.sm, { theme })} / -2)`};
    &:before {
      transform: rotate(225deg);
    }
  }
  &[data-popper-placement^='bottom'] > ${/* sc-selector */ Arrow} {
    top: ${({ theme }) => `calc(${getSpace(SpaceSizes.sm, { theme })} / -2)`};
    &:before {
      transform: rotate(45deg);
    }
  }
  &[data-popper-placement^='left'] > ${/* sc-selector */ Arrow} {
    right: ${({ theme }) => `calc(${getSpace(SpaceSizes.sm, { theme })} / -2)`};
    &:before {
      transform: rotate(135deg);
    }
  }
  &[data-popper-placement^='right'] > ${/* sc-selector */ Arrow} {
    left: ${({ theme }) => `calc(${getSpace(SpaceSizes.sm, { theme })} / -2)`};
    &:before {
      transform: rotate(315deg);
    }
  }

  ${({ $isElevated }) =>
    $isElevated &&
    css`
      border-color: transparent;
      filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.25));

      & > ${/* sc-selector */ Arrow}:before {
        border-color: transparent;
      }
    `};
`;

const PaneContent = styled(Padbox)`
  border-radius: ${getBorderRadius};
  position: relative;
  z-index: 1;
  background: ${getColor('graphite5H')};
`;

const DropdownPane = forwardRef<HTMLDivElement, DropdownPaneProps>(
  (
    {
      children,
      onClickOut = noop,
      isElevated,
      hasArrow,
      arrowRef,
      arrowStyles,
      contentPaddingSize,
      contentPaddingType,
      maxWidth,
      ...props
    },
    ref,
  ) => {
    const dropdownPaneRef = useOuterClick<HTMLDivElement>(onClickOut);

    return (
      <StyledDropdownPane
        ref={mergeRefs<HTMLDivElement>(dropdownPaneRef, ref)}
        $isElevated={isElevated}
        $maxWidth={maxWidth}
        {...props}
      >
        <PaneContent
          paddingSize={contentPaddingSize}
          paddingType={contentPaddingType}
        >
          {children}
        </PaneContent>
        {hasArrow && <Arrow ref={arrowRef} style={arrowStyles} />}
      </StyledDropdownPane>
    );
  },
);

DropdownPane.propTypes = {
  isElevated: PropTypes.bool.isRequired,
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf<'auto'>(['auto']),
  ]).isRequired,
  hasArrow: PropTypes.bool.isRequired,
  arrowRef: PropTypes.func.isRequired,
  arrowStyles: PropTypes.shape({}),
  contentPaddingSize: PropTypes.oneOf(Object.values(SpaceSizes)),
  contentPaddingType: PropTypes.oneOf(Object.values(PaddingTypes)),
  onClickOut: PropTypes.func,
};

export default DropdownPane;
