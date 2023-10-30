import type { FC } from 'react';
import type { HexGradeProps } from './HexGrade.types';

import { forwardRef } from 'react';
import { defaultTo, path, pipe } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import styled, { useTheme } from 'styled-components';
import cls from 'classnames';

import { createMarginSpacing, getColor } from '../../utils';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { ColorTypes } from '../../theme';

const grades = {
  [HexGradeGrades.unknown]: {
    color: ColorTypes.neutral700,
    csTransform: 'translate(5.3 3.2)',
    path: 'M30.5599 35.9441L33.7279 34.9001C33.2599 34.5041 32.9359 33.8561 32.9359 33.2801C32.9359 30.0401 39.3799 29.6081 39.3799 24.2801C39.3799 21.0401 36.6079 18.6281 32.0719 18.6281C28.8319 18.6281 26.0599 19.9601 24.2239 22.1921L26.6359 24.8921C27.8599 23.3801 29.4439 22.3721 31.6399 22.3721C33.9799 22.3721 35.0599 23.5601 35.0599 24.9641C35.0599 28.0241 29.2639 28.4921 29.2639 32.8841C29.2639 34.0721 29.6959 35.1161 30.5599 35.9441ZM31.8559 43.3961C33.2239 43.3961 34.3759 42.2441 34.3759 40.8761C34.3759 39.5081 33.2239 38.3561 31.8559 38.3561C30.4879 38.3561 29.3359 39.5081 29.3359 40.8761C29.3359 42.2441 30.4879 43.3961 31.8559 43.3961Z',
  },
  [HexGradeGrades.A]: {
    color: ColorTypes.gradeA,
    csTransform: 'translate(5.3 3.2)',
    path: 'M44.0447 43L34.6127 18.988H29.3567L19.9247 43H24.7127L26.4767 38.392H37.4927L39.2567 43H44.0447ZM36.3047 34.684H27.6647L31.9847 23.236L36.3047 34.684Z',
  },
  [HexGradeGrades.B]: {
    color: ColorTypes.gradeB,
    csTransform: 'translate(5.3 3.2)',
    path: 'M35.0161 43C39.5161 43 42.0001 40.228 42.0001 36.52C42.0001 33.568 39.9121 31.012 37.3561 30.616C39.5881 30.148 41.5321 28.132 41.5321 25.108C41.5321 21.724 39.0841 18.988 34.6921 18.988H22.8841V43H35.0161ZM33.8281 28.924H27.0961V22.696H33.8281C35.9881 22.696 37.2121 24.028 37.2121 25.828C37.2121 27.628 35.9881 28.924 33.8281 28.924ZM34.0081 39.292H27.0961V32.632H34.0081C36.4201 32.632 37.6801 34.144 37.6801 35.944C37.6801 38.032 36.3121 39.292 34.0081 39.292Z',
  },
  [HexGradeGrades.C]: {
    color: ColorTypes.gradeC,
    csTransform: 'translate(5.3 3.2)',
    path: 'M33.8065 43.432C38.6665 43.432 41.6185 40.912 43.4545 38.032L39.8545 36.196C38.7025 38.212 36.3985 39.688 33.8065 39.688C29.0545 39.688 25.5265 36.052 25.5265 31.012C25.5265 25.972 29.0545 22.336 33.8065 22.336C36.3985 22.336 38.7025 23.848 39.8545 25.828L43.4545 23.992C41.6545 21.112 38.6665 18.592 33.8065 18.592C26.7145 18.592 21.2065 23.632 21.2065 31.012C21.2065 38.392 26.7145 43.432 33.8065 43.432Z',
  },
  [HexGradeGrades.D]: {
    color: ColorTypes.gradeD,
    csTransform: 'translate(5.3 3.2)',
    path: 'M30.7047 43C38.1927 43 43.2687 38.068 43.2687 31.012C43.2687 23.956 38.1927 18.988 30.7047 18.988H21.7767V43H30.7047ZM30.7047 39.292H25.9887V22.696H30.7047C36.0687 22.696 38.9487 26.368 38.9487 31.012C38.9487 35.548 35.9247 39.292 30.7047 39.292Z',
  },
  [HexGradeGrades.F]: {
    color: ColorTypes.gradeF,
    csTransform: 'translate(5.3 3.2)',
    path: 'M28.6606 43V32.632H40.6486V28.924H28.6606V22.696H40.9006V18.988H24.4486V43H28.6606Z',
  },
  [HexGradeGrades.nonApplicable]: {
    color: ColorTypes.neutral600,
    csTransform: 'translate(5.8 2.7)',
    path: 'M 27.598 41.21 L 29.668 41.21 L 36.778 20 L 34.708 20 L 27.598 41.21 Z M 47.868 40.61 L 50.568 40.61 L 50.568 30.83 C 50.568 27.14 47.898 25.76 44.748 25.76 C 42.408 25.76 40.428 26.54 38.808 28.13 L 39.978 29.99 C 41.268 28.7 42.678 28.07 44.328 28.07 C 46.398 28.07 47.868 29.15 47.868 30.95 L 47.868 33.35 C 46.758 32.06 45.078 31.43 43.128 31.43 C 40.698 31.43 38.088 32.87 38.088 36.17 C 38.088 39.35 40.728 40.97 43.128 40.97 C 45.078 40.97 46.728 40.28 47.868 39.02 L 47.868 40.61 Z M 47.868 37.43 C 47.058 38.51 45.648 39.08 44.148 39.08 C 42.198 39.08 40.818 37.91 40.818 36.2 C 40.818 34.49 42.198 33.32 44.148 33.32 C 45.648 33.32 47.058 33.89 47.868 34.97 L 47.868 37.43 Z M 22.78 40.61 L 25.48 40.61 L 25.48 30.44 C 25.48 27.38 23.89 25.76 20.83 25.76 C 18.58 25.76 16.66 26.99 15.7 28.16 L 15.7 26.12 L 13 26.12 L 13 40.61 L 15.7 40.61 L 15.7 30.26 C 16.48 29.18 18.01 28.16 19.69 28.16 C 21.55 28.16 22.78 28.94 22.78 31.34 L 22.78 40.61 Z',
  },
};

const StyledSVG = styled.svg<HexGradeProps>`
  ${({ margin }) => createMarginSpacing(margin)};
`;

const HexGrade: FC<HexGradeProps> = forwardRef<SVGSVGElement, HexGradeProps>(
  (
    {
      variant = HexGradeVariants.solid,
      grade,
      size = 64,
      isInverted = false,
      margin,
      className,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const isCSVariant = variant === HexGradeVariants.cs;
    const gradeColorType = pipe(
      path([grade, 'color']),
      defaultTo(ColorTypes.neutral700),
    )(grades);
    const gradeColor = getColor(gradeColorType)({ theme });
    const white = getColor(ColorTypes.neutral0)({ theme });

    const VariantColorsMap = {
      [HexGradeVariants.cs]: {
        hexFill: gradeColor,
        charFill: isInverted ? gradeColor : white,
        hexStroke: isInverted ? gradeColor : white,
      },
      [HexGradeVariants.solid]: {
        hexFill: isInverted ? white : gradeColor,
        charFill: isInverted ? gradeColor : white,
        hexStroke: isInverted ? white : gradeColor,
      },
      [HexGradeVariants.outline]: {
        hexFill: 'transparent',
        charFill: isInverted ? white : gradeColor,
        hexStroke: isInverted ? white : gradeColor,
      },
    };

    const variantColors = VariantColorsMap[variant];

    const { hexStroke, hexFill, charFill } = variantColors;

    const wrapperPath = isCSVariant
      ? 'M5 14.7017V42.334L11 46.029V18.165L33.0606 4.5792L27.2487 1L5 14.7017ZM15 48.334V20.7017L37.2487 7L59.4974 20.7017V48.334L37.2487 62.0357L15 48.334Z'
      : 'M 57.212 46.562 L 32.004 61.116 L 6.797 46.562 L 6.797 17.457 L 32.004 2.903 L 57.212 17.457 Z';
    const strokeProps = !isCSVariant
      ? { stroke: hexStroke, strokeWidth: '5' }
      : {};

    return (
      <StyledSVG
        ref={ref}
        className={cls(CLX_COMPONENT, className)}
        height={size}
        margin={margin}
        viewBox="0 0 64 64"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d={wrapperPath} fill={hexFill} {...strokeProps} />
        {isNotUndefined(grade) && (
          <path
            d={grades[grade].path}
            fill={charFill}
            transform={isCSVariant ? grades[grade].csTransform : undefined}
          />
        )}
      </StyledSVG>
    );
  },
);

export default HexGrade;
