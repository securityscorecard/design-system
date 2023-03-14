import React from 'react';
import { StepProps } from './Stepper.types';
declare const Step: React.ForwardRefExoticComponent<StepProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;
export default Step;
