import styled from 'styled-components';

import { Paragraph } from '../../Paragraph';
import { MessageVariants } from './Message.enums';
import { MessageProps } from './Message.types';
import { CLX_COMPONENT } from '../../../theme/constants';

const MessageContainer = styled.div`
  padding-inline: var(--sscds-space-1x);
  padding-block-start: var(--sscds-space-1x);

  > * {
    margin: 0;
  }
`;

const Message = ({
  children,
  variant = MessageVariants.note,
}: MessageProps) => (
  <MessageContainer className={CLX_COMPONENT}>
    <Paragraph variant={variant}>{children}</Paragraph>
  </MessageContainer>
);

export default Message;

export const Note = ({ children }: Pick<MessageProps, 'children'>) => (
  <Message variant={MessageVariants.note}>{children}</Message>
);
export const Error = ({ children }: Pick<MessageProps, 'children'>) => (
  <Message variant={MessageVariants.error}>{children}</Message>
);
