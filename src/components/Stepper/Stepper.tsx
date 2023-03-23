import type { PropsWithChildren, ReactElement } from 'react';
import type { StepperProps } from './Stepper.types';

import { Children, forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useContainerQuery } from 'react-container-query';
import { pathEq } from 'ramda';
import cls from 'classnames';

import { SpaceSizes } from '../../theme';
import { Inline, Stack } from '../layout';
import { mergeRefs } from '../../utils/mergeRefs';
import { StepperOrientations } from './Stepper.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { createCtx } from '../../managers/common/createCtx';

const SHOW_TEXT_BREAKPOINT = 'show-step-text';

export const { useContext: useStepperContext, Provider } = createCtx<{
  activeStep: number;
  orientation: keyof typeof StepperOrientations;
  areStepsExpanded: boolean;
  shouldShowText: boolean;
  stepsCount: number;
  getStepIndex: (string) => number;
}>(
  'StepperContext',
  '"useStepperContext" must be inside a "StepperContext" with a value',
);

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

    const steps: ReactElement[] = Children.toArray(children).filter(
      pathEq(['type', 'displayName'], 'Step'),
    );
    const mergedRef = mergeRefs(ref, containerRef);
    const shouldDisplayTextBreakpoint = query[SHOW_TEXT_BREAKPOINT];

    const context = useMemo(
      () => ({
        activeStep,
        orientation,
        areStepsExpanded,
        shouldShowText:
          shouldDisplayTextBreakpoint ||
          orientation === StepperOrientations.vertical,
        getStepIndex: (id: string) =>
          steps.findIndex((item) => item.props.id === id),
        stepsCount: steps.length,
      }),
      [activeStep, orientation, areStepsExpanded, steps],
    );

    return (
      <Provider value={context}>
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
      </Provider>
    );
  },
);

Stepper.propTypes = {
  activeStep: PropTypes.number,
  showTextBreakpoint: PropTypes.number,
  orientation: PropTypes.oneOf(Object.values(StepperOrientations)),
  areStepsExpanded: PropTypes.bool,
  className: PropTypes.string,
};

export default Stepper;
