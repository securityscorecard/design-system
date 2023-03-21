import type { Meta, Story } from '@storybook/react';
import type { IconProps } from './Icon.types';

import styled from 'styled-components';
import { head, pipe, sortBy, toPairs } from 'ramda';

import Icon from './Icon';
import { IconTypes, SSCIconNames } from '../../theme/icons/icons.enums';
import { generateControl } from '../../utils/tests/storybook';
import { Text } from '../typographyLegacy';
import { Grid, Inline } from '../layout';

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    name: {
      ...generateControl('select', SSCIconNames),
    },
  },
} as Meta;

export const SscIcon: Story<IconProps> = ({ ...args }) => <Icon {...args} />;
SscIcon.args = {
  name: SSCIconNames.wrench,
  color: 'neutral.900',
};

SscIcon.storyName = 'SecurityScorecard Icon';

const SIcon = styled(Icon)`
  font-size: 2rem;
  color: #4aba00;
`;

export const StyledIcon: Story<IconProps> = () => (
  <SIcon name={SSCIconNames.wrench} type={IconTypes.ssc} />
);

const sortedIconsList = pipe(toPairs, sortBy(head))(SSCIconNames);
export const IconsList = () => (
  <Grid cols={4} gap="md">
    {sortedIconsList.map(([key, value]) => (
      <Inline key={key} align="center" gap="md">
        <Icon name={value} hasFixedWidth />
        <Text>{key}</Text>
      </Inline>
    ))}
  </Grid>
);
