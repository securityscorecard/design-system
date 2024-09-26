import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import CloseButton from './CloseButton';

export default {
  title: 'components/CloseButton',
  component: CloseButton,
} as Meta;

export const Default: StoryFn = () => (
  <CloseButton onClose={action('onClose')} />
);

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000000;
`;
export const Inverted: StoryFn = () => (
  <Wrapper>
    <CloseButton isInverted onClose={action('onClose')} />
  </Wrapper>
);
