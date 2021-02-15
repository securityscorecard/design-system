import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../utils/helpers';
import { Button } from '../../Button';
import { ButtonVariants } from '../../Button/Button.enums';
import { PageButtonProps } from './PageButton.types';

const PageButton = styled(Button)
  .attrs(() => ({
    variant: ButtonVariants.text,
  }))
  .withConfig<PageButtonProps>({
    shouldForwardProp: (prop) => prop !== 'isActive',
  })`
  display: inline-block;
  text-align: center;
  font-size: ${({ isActive }) =>
    isActive ? getFontSize('lg') : getFontSize('md')};
  font-weight: ${({ isActive }) =>
    isActive ? getFontWeight('bold') : getFontWeight('regular')};
  line-height: ${getLineHeight('lg')};
  cursor: pointer;

  color: ${getColor('graphite4B')} !important;
  background-color: ${({ isActive }) =>
    getColor(isActive ? 'graphiteH' : 'transparent')};

  padding: ${pxToRem(6, 16)};
  margin: ${pxToRem(0, 6)};
  height: ${pxToRem(32)};


  &:hover {
    background-color: ${getColor('graphite5H')};
    text-decoration: none;
  }
`;

PageButton.propTypes = {
  isActive: PropTypes.bool,
};

export default PageButton;
