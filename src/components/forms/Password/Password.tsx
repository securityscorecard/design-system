import type { FC } from 'react';
import type { PasswordProps } from './Password.types';

import { forwardRef, useState } from 'react';
import styled from 'styled-components';
import cls from 'classnames';

import { createPadding, getSpace, pxToRem } from '../../../utils';
import { Icon } from '../../Icon';
import { IconTypes, SSCIconNames } from '../../../theme/icons/icons.enums';
import { Input } from '../Input';
import { ColorTypes, SpaceSizes } from '../../../theme';
import { PaddingTypes } from '../../layout/Padbox/Padbox.enums';
import { CLX_COMPONENT } from '../../../theme/constants';

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
  bottom: 0;
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

const Password: FC<PasswordProps> = forwardRef(
  (
    {
      isInvalid = false,
      isDisabled = false,
      defaultIsRevealed = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [isPasswordRevealed, setIsPasswordRevealed] =
      useState(defaultIsRevealed);

    const toggleVisibility = () => {
      setIsPasswordRevealed(!isPasswordRevealed);
    };

    return (
      <PasswordWrapper className={cls(CLX_COMPONENT, className)}>
        <PasswordInput
          ref={ref}
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
  },
);

export default Password;
