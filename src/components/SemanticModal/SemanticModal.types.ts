import type { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import type { SemanticModalVariants } from './SemanticModal.enums';
import type { ButtonColors } from '../Button/Button.enums';
import type { ActionKinds } from '../../types/action.types';
import type { ButtonEnums } from '../Button';

export type SemanticModalVariants =
  (typeof SemanticModalVariants)[keyof typeof SemanticModalVariants];
export type SemanticModalButtonColors =
  (typeof ButtonColors)[keyof typeof ButtonColors];

type ActionsArray = readonly [
  ActionKinds<[MouseEvent]>?,
  ActionKinds<[MouseEvent]>?,
];

export interface RenderButtonProps {
  action: ActionKinds<[MouseEvent]>;
  variant: (typeof ButtonEnums.ButtonVariants)[keyof typeof ButtonEnums.ButtonVariants];
  color: (typeof ButtonEnums.ButtonColors)[keyof typeof ButtonEnums.ButtonColors];
  isLoading: boolean;
  loadingText: string;
}

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
