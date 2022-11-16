import { useContext } from 'react';

import { WizardContext, WizardState } from '../Wizard.context';

export const useWizardContext = () => {
  return useContext<WizardState>(WizardContext);
};
