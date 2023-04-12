import React from 'react';
import PropTypes from 'prop-types';

import { ModalSizes } from '../Modal/Modal.types';

export interface WizardProps {
  size?: ModalSizes;
  initialStep?: string;
  onClose?: () => void;
  isBackwardNavigationEnabled?: boolean;
  onStepChange?: (step: SingleWizardStep) => void;
  children: React.ReactNode;
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

export const WizardActionPropType = PropTypes.shape({
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
});

export interface WizardNavigation {
  goToStep: (step: SingleWizardStep) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export type WizardStepProps = SingleWizardStep & {
  children: React.ReactNode;
};
