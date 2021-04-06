import styled from 'styled-components';
import PropTypes from 'prop-types';
import { path } from 'ramda';

import { SpacingSizeValuePropType } from '../../../types/spacing.types';
import { createSpacings } from '../../../utils/helpers';
import { Text } from '../Text';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import { ParagraphProps } from './Paragraph.types';

const Paragraph = styled(Text)<ParagraphProps>`
  margin-bottom: ${path([
    'theme',
    'typography',
    'margin',
    'paragraph',
    'bottom',
  ])};
  ${createSpacings};
`;

Paragraph.propTypes = {
  size: PropTypes.oneOf(Object.values(TextSizes)),
  variant: PropTypes.oneOf(Object.values(TextVariants)),
  margin: SpacingSizeValuePropType,
  padding: SpacingSizeValuePropType,
};

Paragraph.defaultProps = {
  size: TextSizes.lg,
  variant: TextVariants.primary,
  as: 'p',
};

export default Paragraph;
