import { ColorTypes } from '../../theme/colors.enums';

export interface LabelProps {
  $isSelected: boolean;
  color: string;
}
export interface TabProps {
  children: string | React.ReactNode;
  color?: typeof ColorTypes[keyof typeof ColorTypes];
  isSelected: boolean;
  onClick?: (selectedValue: string | number) => void;
  value: number | string;
}

export interface TabsProps {
  selectedValue: string | number;
  onSelectTab?: (title: string) => void;
  children: React.ReactNode[];
}
