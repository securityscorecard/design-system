import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { createPadding, getSpace, pxToRem } from '../../../utils';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Input } from '../Input';
import { PasswordProps } from './Password.types';
import { ColorTypes, SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';

const PasswordWrapper = styled.div`
  position: relative;
`;

const PasswordInput = styled(Input)`
  padding-right: ${getSpace(SpaceSizes.lgPlus)};
`;

const ToggleButton = styled.button`
  border: 0;
  appearance: none;
  background: none;
  box-sizing: content-box;
  width: ${pxToRem(16)};
  position: absolute;
  top: 0;
  right: 0;
  ${({ theme }) =>
    createPadding({
      paddingSize: SpaceSizes.md,
      paddingType: PaddingTypes.squish,
      theme,
    })};
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
  const [isPasswordRevealed, setIsPasswordRevealed] =
    useState(defaultIsRevealed);

  const toggleVisibility = () => {
    setIsPasswordRevealed(!isPasswordRevealed);
  };

  return (
    <PasswordWrapper>
      <PasswordInput
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
          color={ColorTypes.neutral700}
          name={isPasswordRevealed ? SSCIconNames.eyeSlash : SSCIconNames.eye}
          type={IconTypes.ssc}
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
