import React from 'react';

import { SemanticModalVariants } from './SemanticModal.enums';
import { ButtonColors } from '../Button/Button.enums';
import { ActionKinds } from '../../types/action.types';
import { ButtonEnums } from '../Button';

export type SemanticModalVariants =
  (typeof SemanticModalVariants)[keyof typeof SemanticModalVariants];
export type SemanticModalButtonColors =
  (typeof ButtonColors)[keyof typeof ButtonColors];

type ActionsArray = readonly [
  ActionKinds<[React.MouseEvent]>?,
  ActionKinds<[React.MouseEvent]>?,
];

export interface RenderButtonProps {
  action: ActionKinds<[React.MouseEvent]>;
  variant: (typeof ButtonEnums.ButtonVariants)[keyof typeof ButtonEnums.ButtonVariants];
  color: (typeof ButtonEnums.ButtonColors)[keyof typeof ButtonEnums.ButtonColors];
  isLoading: boolean;
  loadingText: string;
}

export interface SemanticModalProps {
  title: string;
  message: React.ReactNode;
  onClose: React.MouseEventHandler;
  actions: ActionsArray;
  variant?: SemanticModalVariants;
  primaryButtonColor?: SemanticModalButtonColors;
  isPrimaryButtonLoading?: boolean;
  loadingText?: string;
}
