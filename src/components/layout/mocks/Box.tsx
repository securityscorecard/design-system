import styled from 'styled-components';

import { SpaceSizes } from '../../../theme/space.enums';
import { getColor } from '../../../utils';
import { Padbox } from '../Padbox';

export const Box = styled(Padbox).attrs(() => ({
  paddingSize: SpaceSizes.sm,
}))`
  background-color: ${getColor('blueberry0')};
`;

Box.defaultProps = {
  children:
    'Sed id nulla ac est dignissim pharetra. Donec sit amet nulla vitae orci auctor posuere in ac massa. Quisque blandit enim diam, eget interdum ante pretium eget.',
};
