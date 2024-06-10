import { Meta, Story } from '@storybook/react/types-6-0';
import React, { useEffect, useState } from 'react';
import { action } from '@storybook/addon-actions';

import { generateControl } from '../../utils/tests/storybook';
import { Button } from '../Button';
import { Inline, Padbox, Stack } from '../layout';
import { StepperProps } from './Stepper.types';
import Stepper from './Stepper';
import Step from './Step';
import { StepperOrientations } from './Stepper.enums';
import { H2 } from '../Heading';
import { Paragraph } from '../Paragraph';

export default {
  title: 'components/Stepper',
  component: Stepper,
  subcomponents: { Step },
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`js
import { Stepper, Step } from '@securityscorecard/design-system';
\`\`\`
      `,
      },
    },
    screenshot: {
      viewport: {
        width: 1820,
        height: 720,
      },
    },
  },
  argTypes: {
    orientation: {
      ...generateControl('select', StepperOrientations),
    },
  },
  decorators: [(storyFn) => <Padbox>{storyFn()}</Padbox>],
} as Meta;

const steps = [
  {
    label: 'Shopping Cart',
    summary: 'Review your shopping cart',
  },
  {
    label: 'Transport',
    summary: 'Choose a transportation type',
  },
  {
    label: 'Payment',
    summary: 'Choose a payment type',
  },
  {
    label: 'Recapitulation',
  },
  {
    label: 'Confirmation',
  },
];

export const Playground: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    {steps.map(({ label, summary }) => (
      <Step
        key={label}
        label={label}
        summary={summary}
        onStepClick={action('onStepClick')}
      />
    ))}
  </Stepper>
);
Playground.args = {
  activeStep: 0,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const StepTypes: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    {[
      { label: 'Done step' },
      { label: 'Active step' },
      { label: 'Pending step' },
    ].map(({ label }) => (
      <Step key={label} label={label} />
    ))}
  </Stepper>
);
StepTypes.args = {
  activeStep: 1,
};

export const WithHiddenLabels = StepTypes.bind({});
WithHiddenLabels.args = StepTypes.args;
WithHiddenLabels.decorators = [
  (storyFn) => <div style={{ width: '550px' }}>{storyFn()}</div>,
];

export const Vertical: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    {[
      { label: 'Done step', summary: 'Done step summary' },
      { label: 'Active step', summary: 'Active step summary' },
      { label: 'Pending step', summary: 'Pending step summary' },
    ].map(({ label, summary }) => (
      <Step key={label} label={label} summary={summary}>
        {label} content
      </Step>
    ))}
  </Stepper>
);
Vertical.args = {
  ...StepTypes.args,
  orientation: StepperOrientations.vertical,
};

export const VerticalWithExpandedSteps: Story<StepperProps> = (args) => (
  <Stepper {...args}>
    {[
      { label: 'Done step', summary: 'Done step summary' },
      { label: 'Active step', summary: 'Active step summary' },
      { label: 'Pending step', summary: 'Pending step summary' },
    ].map(({ label, summary }) => (
      <Step key={label} label={label} summary={summary}>
        {label} content
      </Step>
    ))}
  </Stepper>
);
VerticalWithExpandedSteps.args = {
  ...StepTypes.args,
  orientation: StepperOrientations.vertical,
  areStepsExpanded: true,
};

export const VerticalExample: Story<StepperProps> = ({
  activeStep: propsActiveStep,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(propsActiveStep);
  }, [propsActiveStep]);

  return (
    <Stack gap="lg">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map(({ label, summary }, index) => (
          <Step
            key={label}
            label={label}
            summary={summary}
            onStepClick={setActiveStep}
          >
            <Stack gap="md">
              <Stack gap="sm">
                <Paragraph>
                  Content of step {index + 1} - {label}
                </Paragraph>
              </Stack>
              <Inline gap="md">
                <Button
                  variant="solid"
                  onClick={() => setActiveStep((prev) => prev + 1)}
                >
                  {index + 1 === steps.length ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  variant="text"
                  onClick={() => setActiveStep((prev) => prev - 1)}
                >
                  Back
                </Button>
              </Inline>
            </Stack>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Stack gap="xl">
          <H2>All steps has been completed</H2>
          <Inline gap="md" justify="space-between">
            <Button variant="outline" onClick={() => setActiveStep(0)}>
              Reset
            </Button>
          </Inline>
        </Stack>
      )}
    </Stack>
  );
};
VerticalExample.args = { activeStep: 0, areStepsExpanded: true };
VerticalExample.parameters = {
  screenshot: { skip: true },
};

export const HorizontalExample: Story<StepperProps> = ({
  activeStep: propsActiveStep,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(propsActiveStep);
  }, [propsActiveStep]);

  return (
    <Stack gap="lg">
      <Stepper activeStep={activeStep}>
        {steps.map(({ label, summary }) => (
          <Step
            key={label}
            label={label}
            summary={summary}
            onStepClick={setActiveStep}
          />
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Stack gap="xl">
          <H2>All steps has been completed</H2>
          <Inline gap="md" justify="space-between">
            <Button variant="outline" onClick={() => setActiveStep(0)}>
              Reset
            </Button>
          </Inline>
        </Stack>
      ) : (
        <Stack gap="xl">
          <Stack gap="md">
            <H2>{steps[activeStep].label}</H2>
            <Paragraph>
              Content of step {activeStep} - {steps[activeStep].label}
            </Paragraph>
          </Stack>
          <Inline gap="md" justify="space-between">
            <Button
              disabled={activeStep === 0}
              variant="outline"
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setActiveStep((prev) => prev + 1)}
            >
              {activeStep + 1 === steps.length ? 'Finish' : 'Next'}
            </Button>
          </Inline>
        </Stack>
      )}
    </Stack>
  );
};
HorizontalExample.args = { activeStep: 0 };
HorizontalExample.parameters = {
  screenshot: { skip: true },
};
