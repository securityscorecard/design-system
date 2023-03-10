import type { FC } from 'react';
import type { TagsProps } from './Tag.types';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../../Icon';
import { Padbox } from '../../../layout';
import { ColorTypes } from '../../../../theme/colors.enums';
import { SSCIconNames } from '../../../../theme/icons/icons.enums';
import {
  getColor,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getRadii,
  pxToRem,
} from '../../../../utils';

const Container = styled(Padbox)`
  display: flex;
  background: ${getColor('neutral.200')};
  border-radius: ${getRadii('default')};
  color: ${getColor('neutral.900')};
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

const Tag: FC<TagsProps> = ({ value, onClose }) => (
  <Container alignItems="center">
    {value}{' '}
    <RemoveButton type="button" onClick={onClose}>
      <Icon
        color={ColorTypes.neutral700}
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
