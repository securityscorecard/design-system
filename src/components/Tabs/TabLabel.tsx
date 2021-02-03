import styled, { css } from 'styled-components';

import {
  getColor,
  getFontSize,
  getLineHeight,
  pxToRem,
} from '../../utils/helpers';
import { LabelProps, Sizes } from './Tabs.types';

const headingTab = css<LabelProps>`
  padding-bottom: ${pxToRem(2)};
  font-weight: 500;
  border-bottom: 2px solid
    ${({ $isSelected, $color }) =>
      $isSelected ? getColor($color) : getColor('graphiteHB')};

  &:hover,
  &:focus {
    color: ${getColor('graphite4B')};
    text-decoration: none;
    border-bottom: 2px solid ${({ $color }) => getColor($color)};
  }
  &:visited {
    color: ${getColor('graphite4B')};
  }
`;

const textTab = css<LabelProps>`
  color: ${({ $isSelected, $color }) =>
    $isSelected ? getColor($color) : getColor('graphiteHB')};
  &:hover,
  &:focus {
    color: ${getColor('blueberryClassic')};
    text-decoration: none;
  }
  &:visited {
    color: ${getColor('graphite4B')};
  }
`;

const largeSize = css`
  font-size: ${getFontSize('lg')};
  line-height: ${getLineHeight('lg')};

  ${textTab}
`;

const mediumSize = css`
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};

  ${textTab}
`;

const h2Size = css`
  font-size: ${getFontSize('h2')};
  line-height: ${getLineHeight('xxl')};

  ${headingTab}
`;

const h3Size = css`
  font-size: ${getFontSize('h3')};
  line-height: ${getLineHeight('xl')};

  ${headingTab}
`;

const h4Size = css`
  font-size: ${getFontSize('h4')};
  line-height: ${getLineHeight('lg')};

  ${headingTab}
`;

const sizes = {
  lg: largeSize,
  md: mediumSize,
  h2: h2Size,
  h3: h3Size,
  h4: h4Size,
};

const TabLabel = styled.a<LabelProps & { size: Sizes }>`
  color: ${getColor('graphite4B')};
  text-decoration: none;
  cursor: pointer;
  ${({ size }) => sizes[size]};

  &:not(:last-of-type) {
    margin-right: ${pxToRem(30)};
  }
`;

export default TabLabel;
