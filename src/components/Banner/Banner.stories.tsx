import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Banner from './Banner';
import { BannerVariants } from './Banner.enums';
import { ActionsArray, BannerProps } from './Banner.types';
import { generateControl } from '../../utils/tests/storybook';

export default {
  title: 'components/Banner',
  component: Banner,
  decorators: [
    (storyFn) => (
      <div style={{ padding: '25px', marginBottom: '25px' }}>{storyFn()}</div>
    ),
  ],
  argTypes: {
    variant: {
      ...generateControl('select', BannerVariants),
    },
  },
} as Meta;

const BannerActions: ActionsArray = [
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
];

export const Playground: StoryFn<BannerProps> = (args) => (
  <Banner actions={[...BannerActions]} {...args} />
);
Playground.parameters = {
  screenshot: { skip: true },
};

export const InfoBanner: StoryFn = () => (
  <Banner
    actions={[...BannerActions]}
    data-custom-attr="test"
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Info Banner
  </Banner>
);

export const SuccessBanner: StoryFn = () => (
  <Banner
    actions={[...BannerActions]}
    variant={BannerVariants.success}
    onClose={action('close-banner')}
  >
    Success Banner
  </Banner>
);

export const LongInfoBanner: StoryFn = () => (
  <Banner
    actions={[...BannerActions]}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Banner>
);

export const InfoBannerOneAction: StoryFn = () => (
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

export const InfoBannerNoAction: StoryFn = () => (
  <Banner variant={BannerVariants.info} onClose={action('close-banner')}>
    Info Banner No Action
  </Banner>
);

export const WarnBanner: StoryFn = () => (
  <Banner
    actions={[...BannerActions]}
    variant={BannerVariants.warn}
    onClose={action('close-banner')}
  >
    Warn Banner
  </Banner>
);

export const ErrorBanner: StoryFn = () => (
  <Banner
    actions={[...BannerActions]}
    variant={BannerVariants.error}
    onClose={action('close-banner')}
  >
    Error Banner
  </Banner>
);

export const NonDismissableBanner: StoryFn = () => (
  <Banner
    actions={[...BannerActions]}
    isDismissable={false}
    variant={BannerVariants.error}
  >
    Error Banner
  </Banner>
);
