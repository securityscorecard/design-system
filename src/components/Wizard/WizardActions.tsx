import Button from '../ButtonV2/Button';
import { Inline } from '../layout';
import { useActiveStep } from './hooks/useActiveStep';
import { useWizardNavigation } from './hooks/useWizardNavigation';

export const WizardActions = () => {
  const activeStep = useActiveStep();
  const navigation = useWizardNavigation();

  if (!activeStep) return null;

  const { primaryAction, secondaryAction } = activeStep;

  return (
    <Inline gap="sm" justify="flex-end">
      {secondaryAction ? (
        <Button
          isDisabled={secondaryAction.isDisabled}
          variant="ghost"
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
