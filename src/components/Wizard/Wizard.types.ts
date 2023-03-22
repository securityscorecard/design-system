import type { ReactNode } from 'react';
import type { Sizes } from '../Modal/Modal.types';

import PropTypes from 'prop-types';

export interface WizardProps {
  size?: Sizes;
  initialStep?: string;
  onClose?: () => void;
  isBackwardNavigationEnabled?: boolean;
  onStepChange?: (step: WizardStep) => void;
  children: ReactNode;
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

export const WizardActionPropType = PropTypes.exact({
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
});

export interface WizardNavigation {
  goToStep: (step: WizardStep) => void;
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}

export type WizardStepProps = WizardStep & {
  children: ReactNode;
};
