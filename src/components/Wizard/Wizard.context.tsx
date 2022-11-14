import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { WizardStep } from './Wizard.types';

export interface WizardState {
  initialStep?: string;
  activeStep?: WizardStep;
  steps: WizardStep[];
  isBackwardNavigationEnabled: boolean;
  update: Dispatch<SetStateAction<WizardState>>;
}

export const WizardContext = React.createContext<WizardState>({
  initialStep: undefined,
  activeStep: undefined,
  steps: [],
  isBackwardNavigationEnabled: false,
  update: () => null,
});

interface WizardProviderProps {
  children: React.ReactNode;
  initialStep: string;
  isBackwardNavigationEnabled: boolean;
  onStepChange: (step: WizardStep) => void;
}

export const WizardProvider: React.FC<WizardProviderProps> = ({
  children,
  initialStep,
  isBackwardNavigationEnabled,
  onStepChange,
}) => {
  const [state, update] = useState<WizardState>({
    activeStep: undefined,
    update: () => null,
    initialStep,
    steps: [],
    isBackwardNavigationEnabled,
  });

  useEffect(() => {
    if (state.activeStep) {
      onStepChange(state.activeStep);
    }
    // eslint-disable-next-line
  }, [state.activeStep?.name, onStepChange]);

  const value = useMemo(() => ({ ...state, update }), [state]);
  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};
