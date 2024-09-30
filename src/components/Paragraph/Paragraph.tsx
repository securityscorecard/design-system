import styled from 'styled-components';

import { createSpacings } from '../../utils';
import { Text } from '../Text';
import { TextSizes, TextVariants } from '../Text/Text.enums';
import { ParagraphProps } from './Paragraph.types';

const Paragraph = styled(Text).attrs<ParagraphProps>((props) => ({
  size: props.size ?? TextSizes.md,
  variant: props.variant ?? TextVariants.default,
  as: props.as ?? 'p',
}))<ParagraphProps>`
  ${createSpacings};
`;

export default Paragraph;
