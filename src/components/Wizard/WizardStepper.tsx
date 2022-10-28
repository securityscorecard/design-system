import React from 'react';

import { Step, Stepper } from '../Stepper';
import { useWizardContext } from './hooks/useWizardContext';
import { useWizardNavigation } from './hooks/useWizardNavigation';

export const WizardStepper = () => {
  const { steps, activeStep, isBackwardNavigationEnabled } = useWizardContext();
  const navigation = useWizardNavigation();
  const activeStepIndex = steps.findIndex((item) => item.id === activeStep.id);
  return steps.length >= 3 ? (
    <Stepper activeStep={activeStepIndex}>
      {steps.map((item) => (
        <Step
          key={item.id}
          label={item.name}
          onStepClick={
            isBackwardNavigationEnabled
              ? () => navigation.goToStep(item)
              : undefined
          }
        />
      ))}
    </Stepper>
  ) : null;
};
