import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { pxToRem } from '../../../utils/helpers';
import { Button } from '../../Button';
import { ButtonColors, ButtonVariants } from '../../Button/Button.enums';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../Icon/Icon.enums';
import { ScrollToTopButtonProps } from './ScrollToTopButton.types';

const StyledButton = styled(Button)`
  flex-direction: column;
  justify-content: center;
  height: ${pxToRem(48)};
  padding: 0;
  text-align: center;
  line-height: ${pxToRem(13)};
`;

const ButtonText = styled.span`
  margin-top: ${pxToRem(4)};
`;

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  onClick,
  label = 'Scroll to top',
}) => {
  const handleClick = () => {
    if (isNotUndefined(onClick)) {
      onClick();
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <StyledButton
      color={ButtonColors.secondary}
      variant={ButtonVariants.text}
      onClick={handleClick}
    >
      <Icon name={SSCIconNames.arrowUp} />
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );
};

ScrollToTopButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default ScrollToTopButton;
