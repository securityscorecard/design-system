import type { WizardState } from '../Wizard.context';

import { useContext } from 'react';

import { WizardContext } from '../Wizard.context';

export const useWizardContext = () => {
  return useContext<WizardState>(WizardContext);
};
