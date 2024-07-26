import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn } from '@storybook/react';

import { TextSizes, TextVariants } from '../Text/Text.enums';
import { Paragraph } from '../index';
import { LinkColors } from '../_internal/BaseLink/BaseLink.enums';
import Link from './Link';
import { LinkProps } from './Link.types';

export default {
  title: 'typography/Link',
  component: Link,
} as Meta;

// Link mock from 'react-router-dom'
function RouterLink({ children, to, ...props }) {
  return (
    <button type="button" onClick={action(`navigating-to-${to}`)} {...props}>
      {children}
    </button>
  );
}

export const Playground: StoryFn<LinkProps> = (args) => (
  <Link {...args}>Link</Link>
);
Playground.argTypes = {
  href: { control: { disable: true } },
  to: { control: { disable: true } },
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const PrimaryLink: StoryFn = () => <Link href="#">Absolute Link</Link>;
export const SecondaryLink: StoryFn = () => (
  <Link color={LinkColors.secondary} href="#">
    Absolute Link
  </Link>
);

export const LinkInText: StoryFn = () => (
  <>
    <Paragraph size={TextSizes.lg}>
      Lorem ipsum dolor sit amet, <Link href="#">absolute link</Link>. Donec
      eget nisi bibendum, condimentum tortor eget, maximus eros. V Nullam
      pellentesque nisl nec odio euismod semper.{' '}
      <Link as={RouterLink} to="/dashboard">
        Relative Link
      </Link>{' '}
      a commodo ornare. Aenean viverra diam{' '}
      <Link color={LinkColors.primary} href="#">
        sed ornare
      </Link>{' '}
      viverra. Aenean rutrum et mi quis dapibus.{' '}
      <Link onClick={action('button-click')}>OnClick handler</Link>. Donec erat
      est, posuere at fringilla ultricies, porta et diam.
    </Paragraph>
    <Paragraph size={TextSizes.md}>
      Lorem ipsum dolor sit amet, <Link href="#">absolute link</Link>. Donec
      eget nisi bibendum, condimentum tortor eget, maximus eros. V Nullam
      pellentesque nisl nec odio euismod semper.{' '}
      <Link as={RouterLink} to="/dashboard">
        Relative Link
      </Link>{' '}
      a commodo ornare. Aenean viverra diam{' '}
      <Link color={LinkColors.primary} href="#">
        sed ornare
      </Link>{' '}
      viverra. Aenean rutrum et mi quis dapibus.{' '}
      <Link onClick={action('button-click')}>OnClick handler</Link>. Donec erat
      est, posuere at fringilla ultricies, porta et diam.
    </Paragraph>
    <Paragraph size={TextSizes.sm}>
      Lorem ipsum dolor sit amet, <Link href="#">absolute link</Link>. Donec
      eget nisi bibendum, condimentum tortor eget, maximus eros. V Nullam
      pellentesque nisl nec odio euismod semper.{' '}
      <Link as={RouterLink} to="/dashboard">
        Relative Link
      </Link>{' '}
      a commodo ornare. Aenean viverra diam{' '}
      <Link color={LinkColors.primary} href="#">
        sed ornare
      </Link>{' '}
      viverra. Aenean rutrum et mi quis dapibus.{' '}
      <Link onClick={action('button-click')}>OnClick handler</Link>. Donec erat
      est, posuere at fringilla ultricies, porta et diam.
    </Paragraph>
    <Paragraph variant={TextVariants.secondary}>
      Lorem ipsum dolor sit amet,{' '}
      <Link color={LinkColors.secondary} href="#">
        secondary link
      </Link>
      . Donec eget nisi bibendum, condimentum tortor eget, maximus eros. V
      Nullam pellentesque nisl nec odio euismod semper.{' '}
    </Paragraph>
  </>
);
