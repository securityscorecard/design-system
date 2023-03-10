import type { WizardNavigation, WizardStep } from '../Wizard.types';

import { useWizardContext } from './useWizardContext';
import { useActiveStep } from './useActiveStep';

export const useWizardNavigation = (): WizardNavigation => {
  const { update, steps } = useWizardContext();
  const activeStep = useActiveStep();
  const activeStepIndex = steps.findIndex((item) => item.id === activeStep.id);

  const goToStep = (step: WizardStep) => {
    update((state) => ({ ...state, activeStepId: step.id }));
  };

  const goToNextStep = () => {
    const next = steps[activeStepIndex + 1];
    if (next) {
      goToStep(next);
    }
  };

  const goToPreviousStep = () => {
    const previous = steps[activeStepIndex - 1];
    if (previous) {
      goToStep(previous);
    }
  };

  return {
    goToNextStep,
    goToPreviousStep,
    goToStep,
  };
};
