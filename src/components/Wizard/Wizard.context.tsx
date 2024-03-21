import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { SingleWizardStep } from './Wizard.types';

export interface WizardState {
  initialStep?: string;
  activeStepId?: string;
  steps: SingleWizardStep[];
  isBackwardNavigationEnabled: boolean;
  update: Dispatch<SetStateAction<WizardState>>;
}

export const WizardContext = React.createContext<WizardState>({
  initialStep: undefined,
  activeStepId: undefined,
  steps: [],
  isBackwardNavigationEnabled: false,
  update: () => null,
});

interface WizardProviderProps {
  children: React.ReactNode;
  initialStep: string;
  isBackwardNavigationEnabled: boolean;
  onStepChange: (step: SingleWizardStep) => void;
}

export const WizardProvider = ({
  children,
  initialStep,
  isBackwardNavigationEnabled,
  onStepChange,
}: WizardProviderProps) => {
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
