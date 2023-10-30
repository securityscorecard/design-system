import type { DropdownPaneProps, DropdownPaneStyles } from './Dropdown.types';

import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { noop } from 'ramda-adjunct';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getLineHeight,
  getRadii,
  getSpace,
  pxToRem,
} from '../../utils';
import { mergeRefs } from '../../utils/mergeRefs';
import { SpaceSizes } from '../../theme';
import { useOuterClick } from '../../hooks/useOuterCallback';
import { Padbox } from '../layout';

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
    background: ${getColor('neutral.0')};
    border-left: 1px solid ${getColor('neutral.600')};
    border-top: 1px solid ${getColor('neutral.600')};
  }
`;

export const StyledDropdownPane = styled.div<DropdownPaneStyles>`
  position: absolute;
  color: ${getColor('neutral.900')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  border-radius: ${getRadii('default')};
  border: 1px solid ${getColor('neutral.600')};
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
  border-radius: ${getRadii('default')};
  position: relative;
  z-index: 1;
  background: ${getColor('neutral.0')};
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
        data-testid="dropdown-pane"
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

export default DropdownPane;
