import type { BatchActionsProps } from './BatchActions/BatchActions.types';
import type { ElementCounterProps } from './ElementCounter/ElementCounter.types';

export interface BatchModuleProps
  extends BatchActionsProps,
    ElementCounterProps {
  columns: {
    isButtonDisplayed: boolean;
    defaultIsColumnsControlsOpen?: boolean;
    defaultIsColumnsControlsApplied?: boolean;
  };
}
