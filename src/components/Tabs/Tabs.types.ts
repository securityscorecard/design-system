import { ColorTypes } from '../../theme/colors.enums';

export interface LabelProps {
  $isSelected: boolean;
  color: string;
}

export const TabSizes = {
  lg: 'lg',
  md: 'md',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
} as const;

export type Sizes = typeof TabSizes[keyof typeof TabSizes];

export interface TabProps {
  children: React.ReactNode;
  color?: typeof ColorTypes[keyof typeof ColorTypes];
  isSelected?: boolean;
  onClick?: (selectedValue: string | number) => void;
  value: number | string;
  size?: Sizes;
}

export interface TabsProps {
  size?: Sizes;
  selectedValue: string | number;
  onSelectTab?: (selectedValue: string | number) => void;
  children: React.ReactNode[];
}
