import styled from 'styled-components';

import type { WithAsProp } from '../../types/utils.types';
import type { SpacingProps } from '../../types/spacing.types';
import { createSpacings } from '../../utils';
import { Text } from '../Text';

const Paragraph = styled(Text).attrs<WithAsProp<SpacingProps>>((props) => ({
  as: props.as ?? 'p',
}))`
  ${createSpacings};
`;

export default Paragraph;
