import { FlexContainerProps } from '../../../FlexContainer/FlexContainer.types';

export interface TagsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  placeholder?: string;
  onValidate?: (target: HTMLInputElement) => boolean;
}

export interface TagsContainerProps extends FlexContainerProps {
  isFocused: boolean;
  isInvalid: boolean;
}
