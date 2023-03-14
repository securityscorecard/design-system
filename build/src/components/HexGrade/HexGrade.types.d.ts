import { SpacingSizeValue } from '../../types/spacing.types';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';
export declare type Variants = typeof HexGradeVariants[keyof typeof HexGradeVariants];
export declare type Grades = typeof HexGradeGrades[keyof typeof HexGradeGrades];
export interface HexGradeProps {
    variant?: Variants;
    grade?: Grades;
    size?: number;
    isInverted?: boolean;
    margin?: SpacingSizeValue;
    className?: string;
}
