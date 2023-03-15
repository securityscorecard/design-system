import { TogglingProps } from '../types/forms.types';

export interface RadioProps extends Omit<TogglingProps, 'isIndeterminate'> {
  radioId: string;
  className?: string;
}
