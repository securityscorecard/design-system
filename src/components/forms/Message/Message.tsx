import styled from 'styled-components';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { Paragraph } from '../../Paragraph';
import { TextSizes } from '../../Text/Text.enums';
import { MessageVariants } from './Message.enums';
import { MessageProps } from './Message.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const MessageContainer = styled.div`
  padding-top: ${getSpace(SpaceSizes.sm)};
  padding-bottom: ${getSpace(SpaceSizes.sm)};

  > * {
    margin: 0;
  }
`;

const Message = ({
  children,
  variant = MessageVariants.note,
}: MessageProps) => (
  <MessageContainer className={CLX_COMPONENT}>
    <Paragraph size={TextSizes.md} variant={variant}>
      {children}
    </Paragraph>
  </MessageContainer>
);

export default Message;

export const Note = ({ children }: Pick<MessageProps, 'children'>) => (
  <Message variant={MessageVariants.note}>{children}</Message>
);
export const Error = ({ children }: Pick<MessageProps, 'children'>) => (
  <Message variant={MessageVariants.error}>{children}</Message>
);
