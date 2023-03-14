import React from 'react';
import BaseStyledButton from './BaseStyledButton';
import { BaseButtonProps } from './BaseButton.types';
declare const BaseButton: React.FC<BaseButtonProps & React.ComponentProps<typeof BaseStyledButton>>;
export default BaseButton;
