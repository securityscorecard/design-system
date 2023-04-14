import type { FC } from 'react';
import type { BulletCircleProps, StepBulletProps } from './Stepper.types';

import styled, { css } from 'styled-components';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  pxToRem,
} from '../../utils';
import { width as checkWidth, svgPathData } from '../../theme/icons/check';

export const bulletSize = 20;

const BulletWrapper = styled.span`
  flex-shrink: 0;
`;

const Bullet = styled.svg`
  width: ${pxToRem(bulletSize)};
  height: ${pxToRem(bulletSize)};
  display: block;
`;

export const BulletCircle = styled.circle<BulletCircleProps>`
  stroke: ${getColor('primary.500')};
  stroke-width: 2px;
  fill: ${getColor('neutral.0')};

  ${({ $isPending }) =>
    $isPending &&
    css`
      stroke: ${getColor('neutral.600')};
    `}
  ${({ $isActive }) =>
    $isActive &&
    css`
      fill: ${getColor('primary.500')};
    `}
`;

const BulletText = styled.text`
  fill: ${getColor('neutral.0')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  font-weight: ${getFontWeight('bold')};
`;

const BulletCheck = styled.path`
  fill: ${getColor('primary.500')};
`;

const BULLET_VIEWBOX_SIZE = 20;
/**
 * calculate ratio between check icon and step bullet
 * according to design width of the check icon is half of the bullet width
 * == BULLET_VIEWBOX_SIZE / WIDTH_OF_CHECK_ICON / 2
 */
const checkIconRatio = BULLET_VIEWBOX_SIZE / checkWidth / 2;
const translateX = checkWidth / 2;

const StepBullet: FC<StepBulletProps> = ({
  stepNumber,
  isActive,
  isPending,
  isDone,
}) => (
  <BulletWrapper>
    <Bullet viewBox={`0 0 ${BULLET_VIEWBOX_SIZE} ${BULLET_VIEWBOX_SIZE}`}>
      <BulletCircle
        $isActive={isActive}
        $isPending={isPending}
        cx="10"
        cy="10"
        r="9"
      />
      {isActive && (
        <BulletText textAnchor="middle" x="10" y="15">
          {stepNumber}
        </BulletText>
      )}
      {isDone && (
        <BulletCheck
          d={svgPathData}
          style={{
            transform: `scale(${checkIconRatio}) matrix(1, 0, 0, 1, ${translateX}, ${translateX})`,
          }}
        />
      )}
    </Bullet>
  </BulletWrapper>
);

export default StepBullet;
