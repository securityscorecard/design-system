import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SpaceSizes } from '../../../theme';
import { getSpace } from '../../../utils';
import { Paragraph } from '../../typographyLegacy';
import { TextSizes } from '../../typographyLegacy/Text/Text.enums';
import { MessageVariants } from './Message.enums';
import { MessageProps } from './Message.types';

const MessageContainer = styled.div`
  padding-top: ${getSpace(SpaceSizes.sm)};
  padding-bottom: ${getSpace(SpaceSizes.sm)};

  > * {
    margin: 0;
  }
`;

const Message: React.FC<MessageProps> = ({
  children,
  variant = MessageVariants.note,
}) => (
  <MessageContainer>
    <Paragraph size={TextSizes.md} variant={variant}>
      {children}
    </Paragraph>
  </MessageContainer>
);

Message.propTypes = {
  variant: PropTypes.oneOf(Object.values(MessageVariants)),
};

export default Message;

export const Note: React.FC = ({ children }) => (
  <Message variant={MessageVariants.note}>{children}</Message>
);
export const Error: React.FC = ({ children }) => (
  <Message variant={MessageVariants.error}>{children}</Message>
);
