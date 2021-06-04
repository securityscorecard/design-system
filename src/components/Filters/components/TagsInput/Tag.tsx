import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../../Icon';
import { FlexContainer } from '../../../FlexContainer';
import { ColorTypes } from '../../../../theme/colors.enums';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import {
  getBorderRadius,
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  pxToRem,
} from '../../../../utils';
import { TagsProps } from './Tag.types';

const Container = styled(FlexContainer)`
  background: ${getColor('graphite3H')};
  border-radius: ${getBorderRadius};
  color: ${getColor('graphite4B')};
  font-size: ${getFontSize('md')};
  line-height: ${getLineHeight('md')};
  list-style: none;
  margin: ${pxToRem(2, 4, 2, 0)};
  padding: ${pxToRem(4, 8)};
  font-weight: ${getFontWeight('regular')};
`;

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  appearance: none;
  border: none;
  cursor: pointer;
  font-size: ${pxToRem(10)};
`;

const Tag: React.FC<TagsProps> = ({ value, onClose }) => (
  <Container alignItems="center">
    {value}{' '}
    <RemoveButton type="button" onClick={onClose}>
      <Icon
        color={ColorTypes.graphite2B}
        margin={{ left: 0.4 }}
        name={SSCIconNames.times}
      />
    </RemoveButton>
  </Container>
);

export default Tag;

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
