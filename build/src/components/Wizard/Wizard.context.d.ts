import React, { Dispatch, SetStateAction } from 'react';
import { WizardStep } from './Wizard.types';
export interface WizardState {
    initialStep?: string;
    activeStepId?: string;
    steps: WizardStep[];
    isBackwardNavigationEnabled: boolean;
    update: Dispatch<SetStateAction<WizardState>>;
}
export declare const WizardContext: React.Context<WizardState>;
interface WizardProviderProps {
    children: React.ReactNode;
    initialStep: string;
    isBackwardNavigationEnabled: boolean;
    onStepChange: (step: WizardStep) => void;
}
export declare const WizardProvider: React.FC<WizardProviderProps>;
export {};
