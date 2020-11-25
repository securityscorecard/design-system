import React from 'react';
import PropTypes from 'prop-types';

import { Paragraph } from '../../typography';
import { TextSizes } from '../../typography/Text/Text.enums';
import { MessageVariants } from './Message.enums';
import { MessageProps } from './Message.types';

const Message: React.FC<MessageProps> = ({
  children,
  variant = MessageVariants.note,
}) => (
  <Paragraph
    margin="none"
    padding={{ top: 0.25, bottom: 0.5 }}
    size={TextSizes.md}
    variant={variant}
  >
    {children}
  </Paragraph>
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
