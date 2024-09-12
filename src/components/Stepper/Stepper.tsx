import React, { forwardRef, useMemo } from 'react';
import { pathEq } from 'ramda';
import cls from 'classnames';

import { SpaceSizes } from '../../theme';
import { Inline, Stack } from '../layout';
import { StepperProps } from './Stepper.types';
import { mergeRefs } from '../../utils/mergeRefs';
import { StepperContext } from './Stepper.context';
import { StepperOrientations } from './Stepper.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { useContainerQuery } from '../../hooks/useContainerQuery';

const SHOW_TEXT_BREAKPOINT = 'show-step-text';

const Stepper = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<StepperProps>
>(
  (
    {
      children,
      activeStep = 0,
      showTextBreakpoint = 600,
      orientation = StepperOrientations.horizontal,
      areStepsExpanded = false,
      className,
      ...props
    },
    ref,
  ) => {
    const showTextQuery = useMemo(
      () => ({
        [SHOW_TEXT_BREAKPOINT]: { minWidth: showTextBreakpoint },
      }),
      [showTextBreakpoint],
    );
    const [query, containerRef] = useContainerQuery(showTextQuery);

    const stepsArr: React.ReactElement[] = React.Children.toArray(
      children,
    ).filter(pathEq(['type', 'displayName'], 'Step'));
    const steps = stepsArr.map((step, index) =>
      React.cloneElement(step, {
        ...step.props,
        index,
        shouldShowText:
          activeStep === index ||
          query[SHOW_TEXT_BREAKPOINT] ||
          orientation === StepperOrientations.vertical,
        isLast: index + 1 === stepsArr.length,
      }),
    );

    const mergedRef = mergeRefs(ref, containerRef);

    const context = useMemo(
      () => ({
        activeStep,
        orientation,
        areStepsExpanded,
      }),
      [activeStep, orientation, areStepsExpanded],
    );

    return (
      <StepperContext.Provider value={context}>
        {orientation === StepperOrientations.vertical ? (
          <Stack
            ref={mergedRef}
            className={cls(CLX_COMPONENT, className)}
            gap={SpaceSizes.sm}
            {...props}
          >
            {steps}
          </Stack>
        ) : (
          <Inline
            ref={mergedRef}
            align="flex-start"
            className={cls(CLX_COMPONENT, className)}
            gap={SpaceSizes.sm}
            {...props}
          >
            {steps}
          </Inline>
        )}
      </StepperContext.Provider>
    );
  },
);

export default Stepper;
