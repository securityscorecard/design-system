import type { FC } from 'react';
import type { WizardStepProps } from './Wizard.types';

import styled from 'styled-components';

import { useRegisterStep } from './hooks/useRegisterStep';
import { useActiveStep } from './hooks/useActiveStep';
import { pxToRem } from '../../utils';

// The fixed container height helps to improve Wizard UX by keeping the CTAs at the same horizontal place, however in the future this could be responsiveness constrain.
const StepContainer = styled.div`
  height: ${pxToRem(418)};
`;

const WizardStep: FC<WizardStepProps> = ({
  children,
  ...step
}: WizardStepProps) => {
  const activeStep = useActiveStep();
  const isActiveStep = activeStep?.id === step.id;
  useRegisterStep(step);
  return isActiveStep ? <StepContainer>{children}</StepContainer> : null;
};

export default WizardStep;
