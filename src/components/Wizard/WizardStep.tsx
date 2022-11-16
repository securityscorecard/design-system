import React from 'react';

import { useRegisterStep } from './hooks/useRegisterStep';
import { useWizardContext } from './hooks/useWizardContext';
import { WizardStepProps } from './Wizard.types';

export const WizardStep: React.FC<WizardStepProps> = ({
  children,
  ...step
}: WizardStepProps) => {
  const { activeStep } = useWizardContext();
  const isActiveStep = activeStep?.id === step.id;
  useRegisterStep(step);
  return isActiveStep ? <div>{children}</div> : null;
};
