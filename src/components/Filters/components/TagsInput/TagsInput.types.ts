import { FlexContainerProps } from '../../../FlexContainer/FlexContainer.types';

export interface TagsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
}

export interface TagsContainerProps extends FlexContainerProps {
  isFocused: boolean;
  isInvalid: boolean;
}
