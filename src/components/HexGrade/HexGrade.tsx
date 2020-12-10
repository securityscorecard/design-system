import React from 'react';
import PropTypes from 'prop-types';
import { defaultTo, path, pipe } from 'ramda';
import { isNotUndefined } from 'ramda-adjunct';
import styled from 'styled-components';

import colors from '../../theme/colors';
import { SpacingSizeValuePropType } from '../../types/spacing.types';
import { createMarginSpacing } from '../../utils/helpers';
import { HexGradeGrades, HexGradeVariants } from './HexGrade.enums';
import { HexGradeProps } from './HexGrade.types';

const grades = {
  [HexGradeGrades.unknown]: {
    color: colors.graphite2B,
    path:
      'M30.5599 35.9441L33.7279 34.9001C33.2599 34.5041 32.9359 33.8561 32.9359 33.2801C32.9359 30.0401 39.3799 29.6081 39.3799 24.2801C39.3799 21.0401 36.6079 18.6281 32.0719 18.6281C28.8319 18.6281 26.0599 19.9601 24.2239 22.1921L26.6359 24.8921C27.8599 23.3801 29.4439 22.3721 31.6399 22.3721C33.9799 22.3721 35.0599 23.5601 35.0599 24.9641C35.0599 28.0241 29.2639 28.4921 29.2639 32.8841C29.2639 34.0721 29.6959 35.1161 30.5599 35.9441ZM31.8559 43.3961C33.2239 43.3961 34.3759 42.2441 34.3759 40.8761C34.3759 39.5081 33.2239 38.3561 31.8559 38.3561C30.4879 38.3561 29.3359 39.5081 29.3359 40.8761C29.3359 42.2441 30.4879 43.3961 31.8559 43.3961Z',
  },
  [HexGradeGrades.A]: {
    color: colors.kiwi,
    path:
      'M44.0447 43L34.6127 18.988H29.3567L19.9247 43H24.7127L26.4767 38.392H37.4927L39.2567 43H44.0447ZM36.3047 34.684H27.6647L31.9847 23.236L36.3047 34.684Z',
  },
  [HexGradeGrades.B]: {
    color: colors.banana,
    path:
      'M35.0161 43C39.5161 43 42.0001 40.228 42.0001 36.52C42.0001 33.568 39.9121 31.012 37.3561 30.616C39.5881 30.148 41.5321 28.132 41.5321 25.108C41.5321 21.724 39.0841 18.988 34.6921 18.988H22.8841V43H35.0161ZM33.8281 28.924H27.0961V22.696H33.8281C35.9881 22.696 37.2121 24.028 37.2121 25.828C37.2121 27.628 35.9881 28.924 33.8281 28.924ZM34.0081 39.292H27.0961V32.632H34.0081C36.4201 32.632 37.6801 34.144 37.6801 35.944C37.6801 38.032 36.3121 39.292 34.0081 39.292Z',
  },
  [HexGradeGrades.C]: {
    color: colors.pumpkin,
    path:
      'M33.8065 43.432C38.6665 43.432 41.6185 40.912 43.4545 38.032L39.8545 36.196C38.7025 38.212 36.3985 39.688 33.8065 39.688C29.0545 39.688 25.5265 36.052 25.5265 31.012C25.5265 25.972 29.0545 22.336 33.8065 22.336C36.3985 22.336 38.7025 23.848 39.8545 25.828L43.4545 23.992C41.6545 21.112 38.6665 18.592 33.8065 18.592C26.7145 18.592 21.2065 23.632 21.2065 31.012C21.2065 38.392 26.7145 43.432 33.8065 43.432Z',
  },
  [HexGradeGrades.D]: {
    color: colors.strawberry,
    path:
      'M30.7047 43C38.1927 43 43.2687 38.068 43.2687 31.012C43.2687 23.956 38.1927 18.988 30.7047 18.988H21.7767V43H30.7047ZM30.7047 39.292H25.9887V22.696H30.7047C36.0687 22.696 38.9487 26.368 38.9487 31.012C38.9487 35.548 35.9247 39.292 30.7047 39.292Z',
  },
  [HexGradeGrades.F]: {
    color: colors.cherry,
    path:
      'M28.6606 43V32.632H40.6486V28.924H28.6606V22.696H40.9006V18.988H24.4486V43H28.6606Z',
  },
};

const StyledSVG = styled.svg<HexGradeProps>`
  ${({ margin }) => createMarginSpacing(margin)};
`;

const HexGrade: React.FC<HexGradeProps> = ({
  variant = HexGradeVariants.solid,
  grade,
  size = 64,
  isInversed = false,
  margin,
  ...props
}) => {
  const gradeColor = pipe(
    path([grade, 'color']),
    defaultTo(colors.graphite2B),
  )(grades);

  const hexStroke = isInversed ? colors.graphite5H : gradeColor;
  const hexFill =
    variant === HexGradeVariants.outline
      ? 'transparent'
      : isInversed
      ? colors.graphite5H
      : gradeColor;
  const charFill =
    (isInversed && variant === HexGradeVariants.solid) ||
    (!isInversed && variant === HexGradeVariants.outline)
      ? gradeColor
      : colors.graphite5H;

  return (
    <StyledSVG
      height={size}
      margin={margin}
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M 57.212 46.562 L 32.004 61.116 L 6.797 46.562 L 6.797 17.457 L 32.004 2.903 L 57.212 17.457 Z"
        fill={hexFill}
        stroke={hexStroke}
        strokeWidth="5"
      />
      {isNotUndefined(grade) && <path d={grades[grade].path} fill={charFill} />}
    </StyledSVG>
  );
};

HexGrade.propTypes = {
  variant: PropTypes.oneOf(Object.values(HexGradeVariants)),
  grade: PropTypes.oneOf(Object.values(HexGradeGrades)),
  size: PropTypes.number,
  isInversed: PropTypes.bool,
  margin: SpacingSizeValuePropType,
};

export default HexGrade;
