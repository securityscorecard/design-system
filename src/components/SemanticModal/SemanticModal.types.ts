import type {
  ElementType,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';

import { ActionKinds } from '../../types/action.types';

export type SemanticModalVariants = 'success' | 'warn' | 'error' | 'ban';
export type SemanticModalButtonColors = 'primary' | 'danger';

type ActionsArray = readonly [
  ActionKinds<[MouseEvent], void, { as?: ElementType }>?,
  ActionKinds<[MouseEvent], void, { as?: ElementType }>?,
];

export interface SemanticModalProps {
  title: string;
  message: ReactNode;
  onClose: MouseEventHandler;
  actions: ActionsArray;
  variant?: SemanticModalVariants;
  primaryButtonColor?: SemanticModalButtonColors;
  isPrimaryButtonLoading?: boolean;
  loadingText?: string;
}
