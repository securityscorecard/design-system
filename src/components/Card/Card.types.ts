import { SpacingSizeValue } from '../../types/spacing.types';

export interface CardProps {
  title: string;
  subtitle?: string;
  isLoading?: boolean;
  margin?: SpacingSizeValue;
}
