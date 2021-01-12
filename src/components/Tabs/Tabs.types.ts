import { Colors } from '../../theme/colors.types';

export interface LabelProps {
  $isSelected: boolean;
  color: string;
}
export interface TabProps {
  children: string | React.ReactNode;
  color?: keyof typeof Colors;
  isSelected: boolean;
  onClick?: (selectedValue: string | number) => void;
  value: number | string;
}

export interface TabsProps {
  selectedValue: string | number;
  onSelectTab?: (title: string) => void;
  children: React.ReactNode[];
}
