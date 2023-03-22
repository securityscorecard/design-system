import type { FC } from 'react';
import type { ScrollToTopButtonProps } from './ScrollToTopButton.types';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { pxToRem } from '../../../utils';
import { Button } from '../../Button';
import { ButtonColors, ButtonVariants } from '../../Button/Button.enums';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../../theme/icons/icons.enums';

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

const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({
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
      color={ButtonColors.primary}
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
