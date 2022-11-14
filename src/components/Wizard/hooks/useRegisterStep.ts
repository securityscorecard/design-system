import { useEffect } from 'react';

import { useWizardContext } from './useWizardContext';
import { WizardStep } from '../Wizard.types';

export const useRegisterStep = (step: WizardStep) => {
  const { update } = useWizardContext();
  useEffect(() => {
    // Register step
    update((state) => {
      const isInitialStep = state.initialStep === step.id;
      return {
        ...state,
        steps: [...state.steps, step],
        activeStep: isInitialStep
          ? step
          : state.activeStep
          ? state.activeStep
          : step,
      };
    });
    // Unregister step
    return () =>
      update((state) => ({
        ...state,
        steps: state.steps.filter((item) => item.id === step.id),
      }));
    // eslint-disable-next-line
  }, [step.id, step.name]);
};
