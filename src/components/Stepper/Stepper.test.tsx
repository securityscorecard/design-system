import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import Step from './Step';
import Stepper from './Stepper';
import { StepperOrientations } from './Stepper.enums';
import { setup } from '../../utils/tests/setup';

describe('Stepper', () => {
  it('should render only "Step" components as children', () => {
    setup(
      <Stepper data-testid="stepper">
        <Step label="Step 1" />
        <button type="button">button element</button>
        <div>Div element</div>
        {false}
        text
      </Stepper>,
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByTestId('stepper').children).toHaveLength(1);
  });

  it('should have clickable only done steps with callback', () => {
    setup(
      <Stepper activeStep={2} data-testid="stepper">
        {/* done, without callback */}
        <Step label="Step" />
        {/* done, clickable  */}
        <Step
          label="Step"
          onStepClick={() => {
            vi.fn();
          }}
        />
        {/* active, non-clickable  */}
        <Step
          label="Step"
          onStepClick={() => {
            vi.fn();
          }}
        />
        {/* pending, non-clickable */}
        <Step
          label="Step"
          onStepClick={() => {
            vi.fn();
          }}
        />
      </Stepper>,
    );

    expect(screen.getAllByRole('button').length).toBe(1);
  });

  it('should not render "StepContent" in "horizontal" orientation', () => {
    setup(
      <Stepper orientation={StepperOrientations.horizontal}>
        <Step label="Step 1">
          <div>Step content</div>
        </Step>
        <Step label="Step 2">
          <div>Step content</div>
        </Step>
      </Stepper>,
    );

    expect(screen.queryByTestId('step-content')).not.toBeInTheDocument();
  });

  // We are skipping this test because the container query is not reliable in tests
  it.skip('should not render Step text if container width is lower than the text breakpoint ', () => {
    setup(
      <div style={{ width: '550px' }}>
        <Stepper orientation={StepperOrientations.horizontal}>
          <Step label="Step 1" summary="This is a summary for step 1" />
          <Step label="Step 2" summary="This is a summary for step 2" />
        </Stepper>
      </div>,
    );
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.queryByText('Step 2')).not.toBeInTheDocument();
  });
});
