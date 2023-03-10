import type { Meta, Story } from '@storybook/react/types-6-0';

import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import CloseButton from './CloseButton';

export default {
  title: 'components/CloseButton',
  component: CloseButton,
} as Meta;

export const Default: Story = () => <CloseButton onClose={action('onClose')} />;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000000;
`;
export const Inverted: Story = () => (
  <Wrapper>
    <CloseButton isInverted onClose={action('onClose')} />
  </Wrapper>
);
