import { Meta } from '@storybook/react';
import { head, pipe, sortBy, toPairs } from 'ramda';

import { SSCIconNames } from './icons.enums';
import { generateControl } from '../../utils/tests/storybook';
import { Grid, Inline } from '../../components/layout';
import { Text } from '../../components/Text';
import Icon from '../../components/Icon/Icon';

export default {
  title: 'Iconography/List',
  component: Icon,
  argTypes: {
    name: {
      ...generateControl('select', SSCIconNames),
    },
  },
  tags: ['autodocs', '!dev'],
} as Meta<typeof Icon>;

const sortedIconsList = pipe(toPairs, sortBy(head))(SSCIconNames);
export const List = () => (
  <Grid cols={4} gap="md">
    {sortedIconsList.map(([key, value]) => (
      <Inline key={key} align="center" gap="md">
        <Icon name={value} hasFixedWidth />
        <Text>{key}</Text>
      </Inline>
    ))}
  </Grid>
);
