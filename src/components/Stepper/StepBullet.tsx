import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  pxToRem,
} from '../../utils';
import {
  height as checkHeight,
  width as checkWidth,
  svgPathData,
} from '../../theme/icons/check';
import { BulletCircleProps, StepBulletProps } from './Stepper.types';

export const bulletSize = 20;

const BulletWrapper = styled.span`
  flex-shrink: 0;
`;

const Bullet = styled.svg`
  width: ${pxToRem(bulletSize)};
  height: ${pxToRem(bulletSize)};
`;

export const BulletCircle = styled.circle<BulletCircleProps>`
  stroke: ${getColor('blueberryClassic')};
  stroke-width: 2px;
  fill: ${getColor('graphite5H')};

  ${({ $isPending }) =>
    $isPending &&
    css`
      stroke: ${getColor('graphiteB')};
    `}
  ${({ $isActive }) =>
    $isActive &&
    css`
      fill: ${getColor('blueberryClassic')};
    `}
`;

const BulletText = styled.text`
  fill: ${getColor('graphite5H')};
  font-family: ${getFontFamily('base')};
  font-size: ${getFontSize('md')};
  font-weight: ${getFontWeight('bold')};
`;

const BulletCheck = styled.path`
  fill: ${getColor('blueberryClassic')};
`;

const BULLET_VIEWBOX_SIZE = 20;
/**
 * calculate ratio between check icon and step bullet
 * according to design width of the check icon is half of the bullet width
 * == BULLET_VIEWBOX_SIZE / WIDTH_OF_CHECK_ICON / 2
 */
const checkIconRatio = BULLET_VIEWBOX_SIZE / checkWidth / 2;
const translateX = checkWidth / 2;
const translateY = checkHeight / 2;

const StepBullet: React.FC<StepBulletProps> = ({
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
            transform: `scale(${checkIconRatio}) matrix(1, 0, 0, 1, ${translateX}, ${translateY})`,
          }}
        />
      )}
    </Bullet>
  </BulletWrapper>
);

StepBullet.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  isPending: PropTypes.bool,
  isDone: PropTypes.bool,
};

export default StepBullet;
