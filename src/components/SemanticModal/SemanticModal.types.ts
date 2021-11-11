import React from 'react';

import { SemanticModalVariants } from './SemanticModal.enums';
import { ActionKinds } from '../../types/action.types';

export type Variants = typeof SemanticModalVariants[keyof typeof SemanticModalVariants];

type ActionsArray = readonly [
  ActionKinds<[React.MouseEvent]>?,
  ActionKinds<[React.MouseEvent]>?,
];

export interface SemanticModalProps {
  title: string;
  message: string;
  onClose: React.MouseEventHandler;
  actions: ActionsArray;
  variant?: Variants;
}
