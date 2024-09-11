import styled from 'styled-components';

import { createSpacings } from '../../utils';
import { Text } from '../Text';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import { ParagraphProps } from './Paragraph.types';

const Paragraph = styled(Text)<ParagraphProps>`
  ${createSpacings};
`;

Paragraph.defaultProps = {
  size: TextSizes.md,
  variant: TextVariants.primary,
  as: 'p',
};

export default Paragraph;
