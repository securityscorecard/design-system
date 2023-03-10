import type { FC } from 'react';
import type { WizardStepProps } from './Wizard.types';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useRegisterStep } from './hooks/useRegisterStep';
import { WizardActionPropType } from './Wizard.types';
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

WizardStep.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  primaryAction: WizardActionPropType.isRequired,
  secondaryAction: WizardActionPropType,
};

export default WizardStep;
