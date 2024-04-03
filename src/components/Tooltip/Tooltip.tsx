import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pipe, prop } from 'ramda';
import { isFalsy } from 'ramda-adjunct';

import { Padbox } from '../layout';
import { getColor, getDepth, getRadii, pxToRem } from '../../utils';
import { TooltipProps } from './Tooltip.types';
import { useFloatingContext } from '../../contexts/FloatingContext';

type ContentProps = {
  $width: TooltipProps['width'];
  $isInFloatingElement: boolean;
};
const Content = styled(RadixTooltip.Content)<ContentProps>`
  border-radius: ${getRadii('default')};
  color: ${getColor('neutral.900')};
  background-color: ${getColor('neutral.0')};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  width: ${pipe(prop('$width'), pxToRem)};
  z-index: ${({ $isInFloatingElement, theme }) =>
    $isInFloatingElement ? getDepth('modal', { theme }) + 1 : 1};

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }
  .TooltipArrow {
    fill: white;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Tooltip = ({
  children,
  defaultIsPopupDisplayed,
  placement = 'bottom',
  popup,
  width = 270,
  enterDelay = 100,
  wrapperEl: Wrapper = 'span',
  ...props
}: TooltipProps) => {
  const side = placement.split('-')[0];
  const align = placement.endsWith('-start')
    ? 'start'
    : placement.endsWith('-end')
    ? 'end'
    : 'center';
  const isInFloatingElement = useFloatingContext() ?? false;
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (isFalsy(popup)) return <>{children}</>;

  return (
    <RadixTooltip.Root
      defaultOpen={defaultIsPopupDisplayed}
      delayDuration={enterDelay}
    >
      <RadixTooltip.Trigger asChild>
        <Wrapper {...props}>{children}</Wrapper>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <Content
          $isInFloatingElement={isInFloatingElement}
          $width={width}
          align={align}
          alignOffset={12}
          arrowPadding={4}
          className="ssc-ui-styled"
          data-testid="ssc-tooltip"
          side={side as 'bottom' | 'top' | 'left' | 'right'}
          sideOffset={2}
        >
          <Padbox paddingSize="md">{popup}</Padbox>
          <RadixTooltip.Arrow className="TooltipArrow" height={6} width={12} />
        </Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

Tooltip.propTypes = {
  popup: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  width: PropTypes.oneOf(['auto', PropTypes.oneOfType([PropTypes.number])]),
  defaultIsPopupDisplayed: PropTypes.bool,
};

export default Tooltip;
