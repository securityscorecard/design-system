import { useEffect } from 'react';

import { useWizardContext } from './useWizardContext';
import { WizardStep } from '../Wizard.types';

export const useRegisterStep = (step: WizardStep) => {
  const { update } = useWizardContext();
  useEffect(() => {
    // Register step
    update((state) => {
      return {
        ...state,
        steps: [...state.steps, step],
      };
    });
    // Unregister step
    return () =>
      update((state) => ({
        ...state,
        steps: state.steps.filter((item) => item.id === step.id),
      }));
    // eslint-disable-next-line
  }, [step.id]);

  // Update step state
  useEffect(() => {
    update((state) => {
      return {
        ...state,
        steps: state.steps.map((item) => (item.id === step.id ? step : item)),
      };
    });
    // eslint-disable-next-line
  }, [
    step.name,
    step.primaryAction.isDisabled,
    step.primaryAction.label,
    step.primaryAction.onClick,
    step.secondaryAction?.isDisabled,
    step.secondaryAction?.label,
    step.secondaryAction?.onClick,
  ]);
};
