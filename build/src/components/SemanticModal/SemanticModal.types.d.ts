import React from 'react';
import { SemanticModalVariants } from './SemanticModal.enums';
import { ButtonColors } from '../Button/Button.enums';
import { ActionKinds } from '../../types/action.types';
import { ButtonEnums } from '../Button';
export declare type Variants = typeof SemanticModalVariants[keyof typeof SemanticModalVariants];
export declare type ButtonColors = typeof ButtonColors[keyof typeof ButtonColors];
declare type ActionsArray = readonly [
    ActionKinds<[React.MouseEvent]>?,
    ActionKinds<[React.MouseEvent]>?
];
export interface RenderButtonProps {
    action: ActionKinds<[React.MouseEvent]>;
    variant: typeof ButtonEnums.ButtonVariants[keyof typeof ButtonEnums.ButtonVariants];
    color: typeof ButtonEnums.ButtonColors[keyof typeof ButtonEnums.ButtonColors];
    isLoading: boolean;
    loadingText: string;
}
export interface SemanticModalProps {
    title: string;
    message: React.ReactNode;
    onClose: React.MouseEventHandler;
    actions: ActionsArray;
    variant?: Variants;
    primaryButtonColor?: ButtonColors;
    isPrimaryButtonLoading?: boolean;
    loadingText?: string;
}
export {};
