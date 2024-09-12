import { Inline, Stack } from '../layout';
import { Modal } from '../Modal';
import { ModalSizes } from '../Modal/Modal.enums';
import { WizardProvider } from './Wizard.context';
import { WizardProps } from './Wizard.types';
import { WizardActions } from './WizardActions';
import { WizardStepper } from './WizardStepper';

const Wizard = ({
  initialStep,
  size = ModalSizes.lg,
  onStepChange = () => null,
  onClose = undefined,
  isBackwardNavigationEnabled,
  children,
}: WizardProps) => {
  return (
    <WizardProvider
      initialStep={initialStep}
      isBackwardNavigationEnabled={isBackwardNavigationEnabled}
      onStepChange={onStepChange}
    >
      <Modal size={size} onClose={onClose}>
        <Stack gap="lg">
          {children}
          <Inline
            align="center"
            gap="lg"
            justify="space-between"
            stretch="start"
          >
            <WizardStepper />
            <WizardActions />
          </Inline>
        </Stack>
      </Modal>
    </WizardProvider>
  );
};

export default Wizard;
