import { FlexContainerProps } from '../../../FlexContainer/FlexContainer.types';

export interface TagsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export interface TagsContainerProps extends FlexContainerProps {
  isFocused: boolean;
}
