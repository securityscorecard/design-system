import type { PropsWithChildren, ReactElement } from 'react';
import type { StepperProps } from './Stepper.types';

import { Children, cloneElement, forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useContainerQuery } from 'react-container-query';
import { pathEq } from 'ramda';
import cls from 'classnames';

import { SpaceSizes } from '../../theme';
import { Inline, Stack } from '../layout';
import { mergeRefs } from '../../utils/mergeRefs';
import { StepperContext } from './Stepper.context';
import { StepperOrientations } from './Stepper.enums';
import { CLX_COMPONENT } from '../../theme/constants';

const SHOW_TEXT_BREAKPOINT = 'show-step-text';

const Stepper = forwardRef<HTMLDivElement, PropsWithChildren<StepperProps>>(
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

    const [query, containerRef] = useContainerQuery(showTextQuery, undefined);

    const stepsArr: ReactElement[] = Children.toArray(children).filter(
      pathEq(['type', 'displayName'], 'Step'),
    );

    const steps = stepsArr.map((step, index) =>
      cloneElement(step, {
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

Stepper.propTypes /* remove-proptypes */ = {
  //
  // =============== WARNING ================
  // | These PropTypes are auto-generated   |
  // | from the TypeScript type definitions  |
  // ========================================
  //
  /**
   * Currently active step number, zero-based
   */
  activeStep: PropTypes.number,
  /**
   * Is content visible for all steps. Only for vertical orientation.
   */
  areStepsExpanded: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Stepper orientation
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * Minimal width (in pixels) of Stepper container when labels of inactive steps are displayed.
   */
  showTextBreakpoint: PropTypes.number,
} as any;

export default Stepper;
