import React from 'react';
import PropTypes from 'prop-types';

import { useRegisterStep } from './hooks/useRegisterStep';
import { useWizardContext } from './hooks/useWizardContext';
import { WizardActionPropType, WizardStepProps } from './Wizard.types';

const WizardStep: React.FC<WizardStepProps> = ({
  children,
  ...step
}: WizardStepProps) => {
  const { activeStep } = useWizardContext();
  const isActiveStep = activeStep?.id === step.id;
  useRegisterStep(step);
  return isActiveStep ? <div>{children}</div> : null;
};

WizardStep.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  primaryAction: WizardActionPropType.isRequired,
  secondaryAction: WizardActionPropType,
};

export default WizardStep;
