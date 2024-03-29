import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Wizard from './Wizard';
import WizardStep from './WizardStep';

export default {
  title: 'components/Wizard',
  component: Wizard,
  subcomponents: { WizardStep },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 500,
      source: { type: 'code' },
    },
  },
} as Meta;

const WizardTemplate = ({
  isBackwardNavigationEnabled = false,
  initialStep = undefined,
}) => {
  return (
    <Wizard
      initialStep={initialStep}
      isBackwardNavigationEnabled={isBackwardNavigationEnabled}
      onStepChange={action('Wizard/on-step-change')}
    >
      <WizardStep
        id="step-one"
        name="Step One"
        primaryAction={{
          label: 'Next Step',
          onClick: ({ goToNextStep }) => goToNextStep(),
        }}
      >
        Step one
      </WizardStep>
      <WizardStep
        id="step-two"
        name="Step Two"
        primaryAction={{
          label: 'Next',
          onClick: ({ goToNextStep }) => goToNextStep(),
        }}
        secondaryAction={{
          label: 'Previous',
          onClick: ({ goToPreviousStep }) => goToPreviousStep(),
        }}
      >
        Step Two
      </WizardStep>
      <WizardStep
        id="step-three"
        name="Step Three"
        primaryAction={{
          label: 'Submit',
          onClick: ({ goToNextStep }) => goToNextStep(),
        }}
        secondaryAction={{
          label: 'Previous',
          onClick: ({ goToPreviousStep }) => goToPreviousStep(),
        }}
      >
        Step Three
      </WizardStep>
    </Wizard>
  );
};

export const Playground: Story = () => <WizardTemplate />;

export const TwoStepWizard: Story = () => {
  return (
    <Wizard onStepChange={action('Wizard/on-step-change')}>
      <WizardStep
        id="step-one"
        name="Step One"
        primaryAction={{
          label: 'Next Step',
          onClick: ({ goToNextStep }) => goToNextStep(),
        }}
      >
        Step one
      </WizardStep>
      <WizardStep
        id="step-two"
        name="Step Two"
        primaryAction={{
          label: 'Next',
          onClick: ({ goToNextStep }) => goToNextStep(),
        }}
        secondaryAction={{
          label: 'Previous',
          onClick: ({ goToPreviousStep }) => goToPreviousStep(),
        }}
      >
        Step Two
      </WizardStep>
    </Wizard>
  );
};

export const WithBackwardsNavigation: Story = () => (
  <WizardTemplate isBackwardNavigationEnabled />
);

export const WithInitialStep: Story = () => (
  <WizardTemplate initialStep="step-two" />
);
