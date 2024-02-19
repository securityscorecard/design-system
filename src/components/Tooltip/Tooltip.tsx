import type { TooltipProps } from './Tooltip.types';

import * as RadixTooltip from '@radix-ui/react-tooltip';
import styled from 'styled-components';
import { pipe, prop } from 'ramda';

import { Padbox } from '../layout';
import { getColor, pxToRem } from '../../utils';

const Content = styled(RadixTooltip.Content)<{ $width: number }>`
  border-radius: 4px;
  color: ${getColor('neutral.900')};
  background-color: ${getColor('neutral.0')};
  box-shadow: 0 0 8px rgb(0 0 0 / 25%);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  width: ${pipe(prop('$width'), pxToRem)};

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: slide-down-and-fade;
  }

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: slide-left-and-fade;
  }

  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: slide-up-and-fade;
  }

  &[data-state='delayed-open'][data-side='left'] {
    animation-name: slide-right-and-fade;
  }

  .tooltip-arrow {
    fill: white;
  }

  @keyframes slide-up-and-fade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-right-and-fade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slide-down-and-fade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-left-and-fade {
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
  ...props
}: TooltipProps) => {
  const side = placement.split('-')[0];
  const align = placement.endsWith('-start')
    ? 'start'
    : placement.endsWith('-end')
    ? 'end'
    : 'center';

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root
        defaultOpen={defaultIsPopupDisplayed}
        delayDuration={0}
      >
        <RadixTooltip.Trigger asChild>
          <span {...props}>{children}</span>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <Content
            $width={width}
            align={align}
            alignOffset={12}
            arrowPadding={4}
            data-testid="ssc-tooltip"
            side={side as 'bottom' | 'top' | 'left' | 'right'}
            sideOffset={2}
          >
            <Padbox paddingSize="md">{popup}</Padbox>
            <RadixTooltip.Arrow
              className="tooltip-arrow"
              height={6}
              width={12}
            />
          </Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
