import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNotUndefined } from 'ramda-adjunct';

import { pxToRem } from '../../../utils/helpers';
import { Button } from '../../Button';
import { ButtonColors, ButtonVariants } from '../../Button/Button.enums';
import { Icon } from '../../Icon';
import { SSCIconNames } from '../../Icon/Icon.enums';
import { ScrollToTopProps } from './ScrollToTop.types';

const ScrollToTopButton = styled(Button)`
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

const ScrollToTop: React.FC<ScrollToTopProps> = ({ onClick = undefined }) => {
  const handleClick = () => {
    if (isNotUndefined(onClick)) {
      onClick();
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <ScrollToTopButton
      color={ButtonColors.secondary}
      variant={ButtonVariants.text}
      onClick={handleClick}
    >
      <Icon name={SSCIconNames.arrowUp} />
      <ButtonText>Scroll to top</ButtonText>
    </ScrollToTopButton>
  );
};

ScrollToTop.propTypes = {
  onClick: PropTypes.func,
};

export default ScrollToTop;
