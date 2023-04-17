import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import type { SingleWizardStep } from './Wizard.types';

import { createContext, useEffect, useMemo, useState } from 'react';

export interface WizardState {
  initialStep?: string;
  activeStepId?: string;
  steps: SingleWizardStep[];
  isBackwardNavigationEnabled: boolean;
  update: Dispatch<SetStateAction<WizardState>>;
}

export const WizardContext = createContext<WizardState>({
  initialStep: undefined,
  activeStepId: undefined,
  steps: [],
  isBackwardNavigationEnabled: false,
  update: () => null,
});

interface WizardProviderProps {
  children: ReactNode;
  initialStep: string;
  isBackwardNavigationEnabled: boolean;
  onStepChange: (step: SingleWizardStep) => void;
}

export const WizardProvider: FC<WizardProviderProps> = ({
  children,
  initialStep,
  isBackwardNavigationEnabled,
  onStepChange,
}) => {
  const [state, update] = useState<WizardState>({
    activeStepId: undefined,
    update: () => null,
    initialStep,
    steps: [],
    isBackwardNavigationEnabled,
  });

  const activeStep = state.steps.find((item) => item.id === state.activeStepId);

  useEffect(() => {
    if (activeStep) {
      onStepChange(activeStep);
    }
    // eslint-disable-next-line
  }, [activeStep?.name, onStepChange]);

  const value = useMemo(() => ({ ...state, update }), [state]);
  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};
