import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react/types-6-0';

import Icon from './Icon';
import { IconProps } from './Icon.types';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    name: {
      ...generateControl('select', SSCIconNames),
    },
  },
} as Meta;

export const sscIcon: Story<IconProps> = ({ ...args }) => <Icon {...args} />;
sscIcon.args = {
  name: SSCIconNames.wrench,
  color: 'graphite4B',
};

sscIcon.storyName = 'SecurityScorecard Icon';

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  color: #4aba00;
`;

export const styledIcon: Story<IconProps> = () => (
  <StyledIcon name={SSCIconNames.wrench} type={IconTypes.ssc} />
);
