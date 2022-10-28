import { useWizardContext } from './useWizardContext';
import { WizardNavigation, WizardStep } from '../Wizard.types';

export const useWizardNavigation = (): WizardNavigation => {
  const { update, steps, activeStep } = useWizardContext();
  const activeStepIndex = steps.findIndex((item) => item.id === activeStep.id);

  const goToStep = (step: WizardStep) => {
    update((state) => ({ ...state, activeStep: step }));
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
