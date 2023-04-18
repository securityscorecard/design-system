import type { ReactNode } from 'react';
import type { ModalSizes } from '../Modal/Modal.types';

export interface WizardProps {
  size?: ModalSizes;
  initialStep?: string;
  onClose?: () => void;
  isBackwardNavigationEnabled?: boolean;
  onStepChange?: (step: SingleWizardStep) => void;
  children: ReactNode;
}

export interface SingleWizardStep {
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
  goToStep: (step: SingleWizardStep) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export type WizardStepProps = SingleWizardStep & {
  children: ReactNode;
};
