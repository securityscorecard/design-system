import React from 'react';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react/types-6-0';

import Icon from './Icon';
import { IconProps } from './Icon.types';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import colors from '../../theme/colors';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Icon',
  component: Icon,
} as Meta;

export const sscIcon: Story<IconProps> = ({ ...args }) => <Icon {...args} />;
sscIcon.args = { type: IconTypes.ssc, name: SSCIconNames.wrench };
sscIcon.argTypes = {
  color: {
    options: Object.keys(colors),
    control: { type: 'select' },
    defaultValue: 'graphite4B',
  },
  hasFixedWidth: { control: 'boolean' },
  name: {
    ...generateControl('select', SSCIconNames),
  },
};

sscIcon.storyName = 'SecurityScorecard Icon';

const StyledIcon = styled(Icon)`
  font-size: 2rem;
  color: #4aba00;
`;

export const styledIcon: Story<IconProps> = () => (
  <StyledIcon name={SSCIconNames.wrench} type={IconTypes.ssc} />
);
