import { SpacingSizeValue } from '../../types/spacing.types';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';

export type Variants = typeof HexGradeVariants[keyof typeof HexGradeVariants];
export type Grades = typeof HexGradeGrades[keyof typeof HexGradeGrades];

export interface HexGradeProps {
  variant?: Variants;
  grade?: Grades;
  size?: number;
  isInversed?: boolean;
  margin?: SpacingSizeValue;
}
