import type { FC } from 'react';
import type { MessageProps } from './Message.types';

import PropTypes from 'prop-types';
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

const Message: FC<MessageProps> = ({
  children,
  variant = MessageVariants.note,
}) => (
  <MessageContainer className={CLX_COMPONENT}>
    <Paragraph size={TextSizes.md} variant={variant}>
      {children}
    </Paragraph>
  </MessageContainer>
);

Message.propTypes = {
  variant: PropTypes.oneOf(Object.values(MessageVariants)),
};

export default Message;

export const Note: FC = ({ children }) => (
  <Message variant={MessageVariants.note}>{children}</Message>
);
export const Error: FC = ({ children }) => (
  <Message variant={MessageVariants.error}>{children}</Message>
);
