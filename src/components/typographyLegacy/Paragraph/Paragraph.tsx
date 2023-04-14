import type { ParagraphProps } from './Paragraph.types';

import styled from 'styled-components';
import { path } from 'ramda';

import { createSpacings } from '../../../utils';
import { Text } from '../Text';
import { TextSizes, TextVariants } from '../Text/Text.enums';

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

Paragraph.defaultProps = {
  size: TextSizes.md,
  variant: TextVariants.primary,
  as: 'p',
};

export default Paragraph;
