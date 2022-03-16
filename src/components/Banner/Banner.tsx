import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isNonEmptyArray } from 'ramda-adjunct';

import { BannerProps } from './Banner.types';
import {
  AbsoluteLinkActionKind,
  ActionKindsPropType,
  RelativeLinkActionKind,
} from '../../types/action.types';
import * as CustomPropTypes from '../../types/customPropTypes';
import { BannerVariants } from './Banner.enums';
import { Button } from '../Button';
import { ButtonColors, ButtonVariants } from '../Button/Button.enums';
import { Inline, Padbox } from '../layout';
import { PaddingTypes } from '../layout/Padbox/Padbox.enums';
import { StretchEnum } from '../layout/Inline/Inline.enums';
import { Text as BaseText } from '../typography';
import { TextSizes } from '../typography/Text/Text.enums';
import { SpaceSizes } from '../../theme';
import { getColor } from '../../utils';
import { ColorTypes } from '../../theme/colors.enums';
import { CloseButton } from '../CloseButton';
import { BaseToastBanner } from '../_internal/BaseToastBanner';
import { baseToastBannerColorVariants } from '../_internal/BaseToastBanner/BaseToastBanner';

const iconPxSizesVariants = {
  [BannerVariants.info]: 24,
  [BannerVariants.warn]: 21,
  [BannerVariants.error]: 24,
  [BannerVariants.success]: 24,
};

const bgVariants = {
  [BannerVariants.info]: ColorTypes.info50,
  [BannerVariants.warn]: ColorTypes.warning50,
  [BannerVariants.error]: ColorTypes.error50,
  [BannerVariants.success]: ColorTypes.success50,
};

const StyledPadbox = styled(Padbox)<{ $variant?: BannerProps['variant'] }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $variant }) =>
    getColor(baseToastBannerColorVariants[$variant])};
  background-color: ${({ $variant }) => getColor(bgVariants[$variant])};
`;

const StyledButton = styled(Button)`
  height: inherit;
  padding: 0;
`;

const Text = styled(BaseText)`
  max-width: 125ch;
`;

const Banner: React.FC<BannerProps> = ({
  children,
  variant = BannerVariants.info,
  actions,
  onClose,
}) => (
  <StyledPadbox $variant={variant}>
    <BaseToastBanner
      iconPxSizesVariants={iconPxSizesVariants}
      iconSize={24}
      paddingSize={SpaceSizes.mdPlus}
      paddingType={PaddingTypes.squish}
      stretch={StretchEnum.end}
      variant={variant}
    >
      <Padbox paddingSize={SpaceSizes.md}>
        <Inline
          align="start"
          gap={SpaceSizes.mdPlus}
          stretch={StretchEnum.start}
        >
          <Text as="div" size={TextSizes.md}>
            {children}
          </Text>
          {isNonEmptyArray(actions) && (
            <Inline gap={SpaceSizes.mdPlus}>
              {actions.map((action) => (
                <StyledButton
                  key={action.name}
                  color={ButtonColors.primary}
                  href={
                    (action as AbsoluteLinkActionKind<[React.MouseEvent]>).href
                  }
                  name={action.name}
                  to={(action as RelativeLinkActionKind<[React.MouseEvent]>).to}
                  variant={ButtonVariants.text}
                  onClick={action.onClick}
                >
                  {action.label}
                </StyledButton>
              ))}
            </Inline>
          )}
          <CloseButton
            aria-label="Close"
            marginCompensation={SpaceSizes.md}
            onClose={onClose}
          />
        </Inline>
      </Padbox>
    </BaseToastBanner>
  </StyledPadbox>
);

export default Banner;

Banner.propTypes = {
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(Object.values(BannerVariants)),
  actions: CustomPropTypes.tuple(ActionKindsPropType, ActionKindsPropType),
};
