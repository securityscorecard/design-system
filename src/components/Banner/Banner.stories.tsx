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
    cta1={{
      text: 'First CTA',
      onClick: action('click-first-cta'),
    }}
    cta2={{
      text: 'Second CTA',
      onClick: action('click-second-cta'),
    }}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Info Banner
  </Banner>
);

export const LongInfoBanner: Story = () => (
  <Banner
    cta1={{
      text: 'First CTA',
      onClick: action('click-first-cta'),
    }}
    cta2={{
      text: 'Second CTA',
      onClick: action('click-second-cta'),
    }}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </Banner>
);

export const InfoBannerOneCTA: Story = () => (
  <Banner
    cta1={{
      text: 'CTA',
      onClick: action('click-cta'),
    }}
    variant={BannerVariants.info}
    onClose={action('close-banner')}
  >
    Info Banner
  </Banner>
);

export const InfoBannerNoCTA: Story = () => (
  <Banner variant={BannerVariants.info} onClose={action('close-banner')}>
    Info Banner
  </Banner>
);

export const WarnBanner: Story = () => (
  <Banner
    cta1={{
      text: 'First CTA',
      onClick: action('click-first-cta'),
    }}
    cta2={{
      text: 'Second CTA',
      onClick: action('click-second-cta'),
    }}
    variant={BannerVariants.warn}
    onClose={action('close-banner')}
  >
    Warn Banner
  </Banner>
);

export const ErrorBanner: Story = () => (
  <Banner
    cta1={{
      text: 'First CTA',
      onClick: action('click-first-cta'),
    }}
    cta2={{
      text: 'Second CTA',
      onClick: action('click-second-cta'),
    }}
    variant={BannerVariants.error}
    onClose={action('close-banner')}
  >
    Error Banner
  </Banner>
);
