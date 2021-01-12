import { ColorTypes } from '../../theme/colors.enums';

export interface LabelProps {
  $isSelected: boolean;
  color: string;
}
export interface TabProps {
  children: React.ReactNode;
  color?: typeof ColorTypes[keyof typeof ColorTypes];
  isSelected: boolean;
  onClick?: (selectedValue: string | number) => void;
  value: number | string;
}

export interface TabsProps {
  selectedValue: string | number;
  onSelectTab?: (selectedValue: string | number) => void;
  children: React.ReactNode[];
}
