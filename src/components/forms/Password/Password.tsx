import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createPaddingSpacing, getFormStyle } from '../../../utils/helpers';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Input } from '../Input';
import { PasswordProps } from './Password.types';

const PasswordWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled(Input)`
  ${createPaddingSpacing({ right: 2 })};
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: ${getFormStyle('fieldHeight')};
  width: ${getFormStyle('fieldHeight')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Password: React.FC<PasswordProps> = ({
  isInvalid = false,
  isDisabled = false,
  defaultIsRevealed = false,
  ...props
}) => {
  const [isPasswordRevealed, setIsPasswordRevealed] = useState(
    defaultIsRevealed,
  );

  const toggleVisibility = () => {
    setIsPasswordRevealed(!isPasswordRevealed);
  };

  return (
    <PasswordWrapper>
      <StyledInput
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        {...props}
        type={isPasswordRevealed ? 'text' : 'password'}
      />
      <ToggleButton
        aria-label={`${isPasswordRevealed ? 'Hide' : 'Show'} password`}
        onClick={toggleVisibility}
      >
        <Icon
          color="graphite2B"
          name={isPasswordRevealed ? SSCIconNames.eyeSlash : SSCIconNames.eye}
          type={IconTypes.ssc}
          hasFixedWidth
        />
      </ToggleButton>
    </PasswordWrapper>
  );
};

Password.propTypes = {
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  defaultIsRevealed: PropTypes.bool,
};

export default Password;
