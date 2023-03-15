import { useWizardContext } from './useWizardContext';

export const useActiveStep = () => {
  const context = useWizardContext();
  if (context.activeStepId) {
    return context.steps.find((item) => item.id === context.activeStepId);
  }
  if (context.initialStep) {
    return context.steps.find((item) => item.id === context.initialStep);
  }
  return context.steps[0];
};
