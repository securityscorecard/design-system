import { createContext } from 'react';

import { StepperContextValue } from './Stepper.types';

export const StepperContext = createContext<StepperContextValue>({});
