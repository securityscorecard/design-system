import React from 'react';

import { Sizes } from '../Modal/Modal.types';

export interface WizardProps {
  size?: Sizes;
  initialStep?: string;
  onClose?: () => void;
  isBackwardNavigationEnabled?: boolean;
  onStepChange?: (step: WizardStep) => void;
  children: React.ReactNode;
}

export interface WizardStep {
  id: string;
  name: string;
  primaryAction: WizardAction;
  secondaryAction?: WizardAction;
}

export interface WizardAction {
  label: string;
  onClick: (props: WizardNavigation) => void;
  isDisabled?: boolean;
}

export interface WizardNavigation {
  goToStep: (step: WizardStep) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export type WizardStepProps = WizardStep & {
  children: React.ReactNode;
};
