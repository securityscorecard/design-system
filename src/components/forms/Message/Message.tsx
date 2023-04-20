import type { BaseMessageProps, MessageProps } from './Message.types';

import { forwardRef } from 'react';
import styled from 'styled-components';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { Paragraph } from '../../typographyLegacy';
import { TextSizes } from '../../typographyLegacy/Text/Text.enums';
import { MessageVariants } from './Message.enums';
import { CLX_COMPONENT } from '../../../theme/constants';

const MessageContainer = styled.div`
  padding-top: ${getSpace(SpaceSizes.sm)};
  padding-bottom: ${getSpace(SpaceSizes.sm)};

  > * {
    margin: 0;
  }
`;

const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ children, variant = MessageVariants.note }, ref) => (
    <MessageContainer ref={ref} className={CLX_COMPONENT}>
      <Paragraph size={TextSizes.md} variant={variant}>
        {children}
      </Paragraph>
    </MessageContainer>
  ),
);

export default Message;

export const Note = forwardRef<HTMLDivElement, BaseMessageProps>(
  ({ children }, ref) => (
    <Message ref={ref} variant={MessageVariants.note}>
      {children}
    </Message>
  ),
);
export const Error = forwardRef<HTMLDivElement, BaseMessageProps>(
  ({ children }, ref) => (
    <Message ref={ref} variant={MessageVariants.error}>
      {children}
    </Message>
  ),
);
