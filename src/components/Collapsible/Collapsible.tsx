import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { includes } from 'ramda';
import cls from 'classnames';

import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { getColor, getRadii } from '../../utils';
import { Icon } from '../Icon';
import { Text } from '../typographyLegacy';
import { TextSizes, TextVariants } from '../typographyLegacy/Text/Text.enums';
import { CollapsibleProps } from './Collapsible.types';
import { Padbox } from '../layout/Padbox';
import { Inline } from '../layout/Inline';
import { SpaceSizes } from '../../theme/space.enums';
import { CLX_COMPONENT } from '../../theme/constants';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { CollapsibleVariants } from './Collapsible.enums';

const Header = styled(Padbox)`
  width: 100%;
  cursor: pointer;

  .inline & {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid ${getColor('neutral.400')};
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  .inline & {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${Text} {
      width: 50%;
    }
  }
`;

const Content = styled(Padbox)`
  .regular & {
    border-top: 1px solid ${getColor('neutral.400')};
  }
  .inline & {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Container = styled(Padbox)`
  &.regular {
    border: 1px solid ${getColor('neutral.400')};
    border-radius: ${getRadii('default')};
  }
`;

const StyledIcon = styled(Icon).withConfig<{ isRotated: boolean }>({
  shouldForwardProp: (property) => !includes(property, ['isRotated']),
})`
  transition: transform 200ms;
  ${({ isRotated }) => isRotated && 'transform: rotate(90deg);'}
`;

const Collapsible: React.FC<CollapsibleProps> = ({
  children,
  className,
  isOpen = undefined,
  defaultIsOpened = false,
  subject,
  title,
  onOpen,
  subtitle: _subtitle,
  onChange = (value) => value,
  variant = CollapsibleVariants.regular,
}) => {
  const [_open, setOpen] = useState(isOpen || defaultIsOpened);
  const subtitle = _subtitle || subject;
  const isControlled = isOpen !== undefined;
  const open = isControlled ? isOpen : _open;

  const handleHeaderClick = () => {
    const value = !open;
    if (isControlled) {
      onChange(value);
    } else {
      setOpen(value);
    }
    if (typeof onOpen === 'function' && value) {
      onOpen();
    }
  };

  return (
    <Container
      className={cls(CLX_COMPONENT, className, {
        regular: variant === CollapsibleVariants.regular,
        inline: variant === CollapsibleVariants.inline,
      })}
      variant={variant}
      withBackground={isOpen}
    >
      <Header
        paddingSize={SpaceSizes.mdPlus}
        paddingType={PaddingTypes.squish}
        tabIndex={0}
        onClick={handleHeaderClick}
        onKeyDown={(e) => ['Enter', ' '].includes(e.key) && handleHeaderClick()}
      >
        <Inline align="center" gap={SpaceSizes.md}>
          <StyledIcon
            height={20}
            isRotated={isOpen}
            name={SSCIconNames.angleRight}
            type={IconTypes.ssc}
            width={20}
          />
          <HeaderContent>
            <Text
              as="div"
              size={TextSizes.lg}
              variant={TextVariants.primary}
              isBold
            >
              {title}
            </Text>
            {subtitle && (
              <Text size={TextSizes.md} variant={TextVariants.secondary}>
                {subtitle}
              </Text>
            )}
          </HeaderContent>
        </Inline>
      </Header>
      {open && (
        <Content paddingSize={SpaceSizes.lg} paddingType={PaddingTypes.squish}>
          <Text as="div" size={TextSizes.md}>
            {children}
          </Text>
        </Content>
      )}
    </Container>
  );
};

Collapsible.propTypes = {
  subject: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  className: PropTypes.string,
  defaultIsOpened: PropTypes.bool,
  variant: PropTypes.string,
  onOpen: PropTypes.func,
  onChange: PropTypes.func,
};

export default Collapsible;
