import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SpacingSizeValuePropType } from '../../../types/spacing.types';
import { createSpacings } from '../../../utils';
import { Text } from '../Text';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import { ParagraphProps } from './Paragraph.types';

const Paragraph = styled(Text)<ParagraphProps>`
  margin-bottom: 0.625rem;
  ${createSpacings};
`;

Paragraph.propTypes = {
  size: PropTypes.oneOf(Object.values(TextSizes)),
  variant: PropTypes.oneOf(Object.values(TextVariants)),
  margin: SpacingSizeValuePropType,
  padding: SpacingSizeValuePropType,
};

Paragraph.defaultProps = {
  size: TextSizes.md,
  variant: TextVariants.primary,
  as: 'p',
};

export default Paragraph;
