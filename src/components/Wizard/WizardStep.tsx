import React from 'react';
import PropTypes from 'prop-types';

import { useRegisterStep } from './hooks/useRegisterStep';
import { WizardActionPropType, WizardStepProps } from './Wizard.types';
import { useActiveStep } from './hooks/useActiveStep';

const WizardStep: React.FC<WizardStepProps> = ({
  children,
  ...step
}: WizardStepProps) => {
  const activeStep = useActiveStep();
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
