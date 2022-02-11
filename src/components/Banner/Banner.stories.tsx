import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Banner from './Banner';
import { BannerVariants } from './Banner.enums';

export default {
  title: 'components/Banner',
  component: Banner,
  decorators: [
    (storyFn) => (
      <div style={{ padding: '25px', marginBottom: '25px' }}>{storyFn()}</div>
    ),
  ],
} as Meta;

export const InfoBanner: Story = () => (
  <Banner
    actions={[
      {
        label: 'Action A',
        name: 'Action A',
        onClick: action('click-action-a'),
      },
      {
        label: 'Action B',
        name: 'Action B',
        onClick: action('click-action-b'),
      },
    ]}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Info Banner
  </Banner>
);

export const SuccessBanner: Story = () => (
  <Banner
    actions={[
      {
        label: 'Action A',
        name: 'Action A',
        onClick: action('click-action-a'),
      },
      {
        label: 'Action B',
        name: 'Action B',
        onClick: action('click-action-b'),
      },
    ]}
    variant={BannerVariants.success}
    onClose={action('close-banner')}
  >
    Success Banner
  </Banner>
);

export const LongInfoBanner: Story = () => (
  <Banner
    actions={[
      {
        label: 'Action A',
        name: 'Action A',
        onClick: action('click-action-a'),
      },
      {
        label: 'Action B',
        name: 'Action B',
        onClick: action('click-action-b'),
      },
    ]}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Banner>
);

export const InfoBannerOneAction: Story = () => (
  <Banner
    actions={[
      {
        label: 'Action',
        name: 'Action',
        onClick: action('click-action'),
      },
    ]}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Info Banner One Action
  </Banner>
);

export const InfoBannerNoAction: Story = () => (
  <Banner variant={BannerVariants.info} onClose={action('close-banner')}>
    Info Banner No Action
  </Banner>
);

export const WarnBanner: Story = () => (
  <Banner
    actions={[
      {
        label: 'Action A',
        name: 'Action A',
        onClick: action('click-action-a'),
      },
      {
        label: 'Action B',
        name: 'Action B',
        onClick: action('click-action-b'),
      },
    ]}
    variant={BannerVariants.warn}
    onClose={action('close-banner')}
  >
    Warn Banner
  </Banner>
);

export const ErrorBanner: Story = () => (
  <Banner
    actions={[
      {
        label: 'Action A',
        name: 'Action A',
        onClick: action('click-action-a'),
      },
      {
        label: 'Action B',
        name: 'Action B',
        onClick: action('click-action-b'),
      },
    ]}
    variant={BannerVariants.error}
    onClose={action('close-banner')}
  >
    Error Banner
  </Banner>
);
