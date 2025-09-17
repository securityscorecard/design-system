import { SpacingSizeValue } from '../../types/spacing.types';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';

export type HexGradeVariants =
  (typeof HexGradeVariants)[keyof typeof HexGradeVariants];
export type Grades = (typeof HexGradeGrades)[keyof typeof HexGradeGrades];

export interface HexGradeProps {
  variant?: HexGradeVariants;
  grade?: Grades;
  size?: number;
  isInverted?: boolean;
  margin?: SpacingSizeValue;
  className?: string;
  isLegacy?: boolean;
}
