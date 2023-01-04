import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useRegisterStep } from './hooks/useRegisterStep';
import { WizardActionPropType, WizardStepProps } from './Wizard.types';
import { useActiveStep } from './hooks/useActiveStep';
import { pxToRem } from '../../utils';

const StepContainer = styled.div`
  height: ${pxToRem(418)};
`;

const WizardStep: React.FC<WizardStepProps> = ({
  children,
  ...step
}: WizardStepProps) => {
  const activeStep = useActiveStep();
  const isActiveStep = activeStep?.id === step.id;
  useRegisterStep(step);
  return isActiveStep ? <StepContainer>{children}</StepContainer> : null;
};

WizardStep.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  primaryAction: WizardActionPropType.isRequired,
  secondaryAction: WizardActionPropType,
};

export default WizardStep;
