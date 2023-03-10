import type { Meta, Story } from '@storybook/react/types-6-0';
import type { LinkProps } from './Link.types';

import { action } from '@storybook/addon-actions';

import { TextSizes, TextVariants } from '../Text/Text.enums';
import { Paragraph } from '../index';
import { LinkColors } from '../../_internal/BaseLink/BaseLink.enums';
import Link from './Link';
import { generateControl } from '../../../utils/tests/storybook';

export default {
  title: 'components/typography/Link',
  component: Link,
} as Meta;

// Link mock from 'react-router-dom'
// eslint-disable-next-line react/prop-types
function RouterLink({ children, to, ...props }) {
  return (
    <button type="button" onClick={action(`navigating-to-${to}`)} {...props}>
      {children}
    </button>
  );
}

export const Playground: Story<LinkProps> = (args) => (
  <Link {...args}>Link</Link>
);
Playground.argTypes = {
  color: { ...generateControl('select', LinkColors) },
  href: { control: { disable: true } },
  to: { control: { disable: true } },
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const PrimaryLink: Story = () => <Link href="#">Absolute Link</Link>;
export const SecondaryLink: Story = () => (
  <Link color={LinkColors.secondary} href="#">
    Absolute Link
  </Link>
);

export const LinkInText: Story = () => (
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
