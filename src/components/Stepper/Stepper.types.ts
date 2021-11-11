import { StepperOrientations } from './Stepper.enums';

export type Orientations = typeof StepperOrientations[keyof typeof StepperOrientations];

export interface BulletCircleProps {
  $isActive?: boolean;
  $isPending?: boolean;
}

export interface StepBulletProps {
  stepNumber: number;
  isActive?: BulletCircleProps['$isActive'];
  isPending?: BulletCircleProps['$isPending'];
  isDone?: boolean;
}

export interface StepProps {
  /**
   * Step main label
   */
  label: string;
  /**
   * Additional step information
   */
  summary?: string;
  /**
   * Callback called when step is clicked, only done tasks are clickable.
   */
  onStepClick?: (stepNumber: StepProps['index']) => void;
  /**
   * Provided by Stepper component
   */
  index?: number;
  /**
   * Provided by Stepper component
   */
  isLast?: boolean;
  /**
   * Provided by Stepper component
   */
  shouldShowText?: boolean;
}

export interface StepperProps {
  /**
   * Currently active step number, zero-based
   */
  activeStep?: number;
  /**
   * Minimal width (in pixels) of Stepper container when labels of inactive steps are displayed.
   */
  showTextBreakpoint?: number;
  /**
   * Stepper orientation
   */
  orientation?: Orientations;
  /**
   * Is content visible for all steps. Only for vertical orientation.
   */
  areStepsExpanded?: boolean;
}

export interface StepperContextValue {
  activeStep?: StepperProps['activeStep'];
  orientation?: StepperProps['orientation'];
  areStepsExpanded?: StepperProps['areStepsExpanded'];
}
