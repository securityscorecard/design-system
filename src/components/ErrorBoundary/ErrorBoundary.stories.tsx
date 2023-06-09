import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import ErrorBoundary from './ErrorBoundary';
import { Stack } from '../layout';
import { colors } from '../../theme/colors';

export default {
  title: 'components/ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {},
} as Meta;

const BrokenLinkIllustration = ({ color, ...props }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.13 13.03s-.09 0-.13-.02l-1.79-.48a.496.496 0 0 1-.35-.61c.07-.27.34-.42.61-.35l1.51.4 5.46-5.46-1.05-3.91-3.9-1.04-5.46 5.46.4 1.5a.5.5 0 0 1-.35.61.5.5 0 0 1-.61-.35L10.99 7c-.05-.17 0-.36.13-.48L16.99.65c.13-.13.31-.17.48-.13l4.46 1.19c.17.05.31.18.35.35l1.2 4.46c.05.17 0 .36-.13.48l-5.87 5.87a.51.51 0 0 1-.35.15zM6.66 23.5s-.09 0-.13-.02l-4.46-1.2a.495.495 0 0 1-.35-.35l-1.2-4.46c-.05-.17 0-.36.13-.48l5.87-5.87c.13-.13.31-.17.48-.13l1.79.48c.27.07.42.35.35.61-.07.27-.34.42-.61.35l-1.51-.4-5.46 5.47 1.05 3.9 3.9 1.05 5.46-5.46-.4-1.51a.5.5 0 0 1 .35-.61c.27-.06.54.09.61.35l.48 1.79c.05.17 0 .36-.13.48l-5.87 5.87a.51.51 0 0 1-.35.15zm.35-15.98a.47.47 0 0 1-.35-.15L3.65 4.36c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.01 3.01c.2.2.2.51 0 .71-.1.1-.23.15-.35.15zM9 5.5c-.28 0-.5-.22-.5-.5V1c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5zm-4 4H1C.72 9.5.5 9.28.5 9s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5zm15.01 11.02a.47.47 0 0 1-.35-.15l-3.01-3.01c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.01 3.01c.2.2.2.51 0 .71-.1.1-.23.15-.35.15zm3-5h-4c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h4c.28 0 .5.22.5.5s-.22.5-.5.5zm-8 8c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5z"
      fill={color}
    />
  </svg>
);

const Illustration = <BrokenLinkIllustration color={colors?.primary[500]} />;

const ErrorBoundaryTemplate = (args) => {
  return (
    <Stack gap="lg">
      <ErrorBoundary illustration={Illustration} {...args} />
    </Stack>
  );
};

export const ExtraSmall = ErrorBoundaryTemplate.bind({});
ExtraSmall.args = { size: 'xs' };

export const Small = ErrorBoundaryTemplate.bind({});
Small.args = { size: 'sm' };

export const Medium = ErrorBoundaryTemplate.bind({});
Medium.args = { size: 'md' };

export const Large = ErrorBoundaryTemplate.bind({});
Large.args = { size: 'lg' };
