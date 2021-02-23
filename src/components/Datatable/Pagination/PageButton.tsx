import styled from 'styled-components';

import {
  getBorderRadius,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';
import { Button } from '../../Button';
import { ButtonVariants } from '../../Button/Button.enums';

const PageButton = styled(Button).attrs(() => ({
  variant: ButtonVariants.text,
}))`
  &&& {
    display: inline-block;
    text-align: center;
    font-size: ${getFontSize('md')};
    font-weight: ${getFontWeight('regular')};
    line-height: ${getLineHeight('lg')};
    border-radius: ${getBorderRadius};

    color: ${getColor('graphite4B')};
    background-color: ${getColor('transparent')};

    padding: ${pxToRem(6, 16)};
    margin: ${pxToRem(0, 6)};
    height: ${pxToRem(32)};
    border: 1px solid transparent;
    cursor: pointer;

    &&:hover {
      background-color: ${getColor('graphite5H')};
      color: ${getColor('graphite4B')};
      text-decoration: none;
      border-color: ${getColor('graphiteHB')};
    }
  }
`;

export const ActivePage = styled.div`
  display: inline-block;
  text-align: center;
  font-size: ${getFontSize('lg')};
  font-weight: ${getFontWeight('bold')};
  line-height: ${getLineHeight('lg')};
  border-radius: ${getBorderRadius};
  color: ${getColor('graphite4B')};
  background-color: ${getColor('graphiteH')};
  padding: ${pxToRem(6, 16)};
  margin: ${pxToRem(0, 6)};
  height: ${pxToRem(32)};
`;

export default PageButton;
