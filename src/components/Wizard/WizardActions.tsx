import React from 'react';

import { Button } from '../Button';
import { Inline } from '../layout';
import { useWizardContext } from './hooks/useWizardContext';
import { useWizardNavigation } from './hooks/useWizardNavigation';

export const WizardActions = () => {
  const { activeStep } = useWizardContext();
  const navigation = useWizardNavigation();

  if (!activeStep) return null;

  const { primaryAction, secondaryAction } = activeStep;

  return (
    <Inline gap="md">
      {secondaryAction ? (
        <Button
          isDisabled={secondaryAction.isDisabled}
          variant="text"
          onClick={() => secondaryAction.onClick(navigation)}
        >
          {secondaryAction.label}
        </Button>
      ) : null}
      <Button
        isDisabled={primaryAction.isDisabled}
        onClick={() => primaryAction.onClick(navigation)}
      >
        {primaryAction.label}
      </Button>
    </Inline>
  );
};
