import type { FC } from 'react';
import type { WizardProps } from './Wizard.types';

import { forwardRef } from 'react';

import { Inline, Stack } from '../layout';
import { Modal } from '../Modal';
import { ModalSizes } from '../Modal/Modal.enums';
import { WizardProvider } from './Wizard.context';
import { WizardActions } from './WizardActions';
import { WizardStepper } from './WizardStepper';

const Wizard: FC<WizardProps> = forwardRef<HTMLDivElement, WizardProps>(
  (
    {
      initialStep,
      size = ModalSizes.lg,
      onStepChange = () => null,
      onClose = undefined,
      isBackwardNavigationEnabled,
      isOverlayBlurred = true,
      children,
    }: WizardProps,
    ref,
  ) => {
    return (
      <WizardProvider
        initialStep={initialStep}
        isBackwardNavigationEnabled={isBackwardNavigationEnabled}
        onStepChange={onStepChange}
      >
        <Modal
          ref={ref}
          isOverlayBlurred={isOverlayBlurred}
          size={size}
          onClose={onClose}
        >
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
  },
);

export default Wizard;
