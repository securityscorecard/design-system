import type { StepperContextValue } from './Stepper.types';

import { createContext } from 'react';

export const StepperContext = createContext<StepperContextValue>({});
