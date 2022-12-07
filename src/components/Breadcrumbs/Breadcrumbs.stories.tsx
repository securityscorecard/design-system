import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';

import { Link, Paragraph } from '../typographyLegacy';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import Breadcrumbs from './Breadcrumbs';
import BreadcrumbItem from './BreadcrumbItem';

export default {
  title: 'components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { BreadcrumbItem },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta;

export const Playground: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>
  );
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const BreadcrumbsInfo: Story = () => (
  <Paragraph>
    The BreadcrumbItem is a{' '}
    <Link href="/?path=/docs/components-typography-link--playground">link</Link>{' '}
    that should help the user to get to the place in the navigation structure
    where he needs to go. It accepts all props you can give to a link, but make
    sure to give it &apos;to&apos; or &apos;href&apos; attributes. Otherwise the
    link would be inactive plain text. The current page shouldn&apos;t have
    these defined though.
  </Paragraph>
);

BreadcrumbsInfo.parameters = {
  screenshot: { skip: true },
};

export const WithTwoItems: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export const WithMoreThanThreeItems: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent4</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent5</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export const WithRelativeLinks: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem to="/root">Root</BreadcrumbItem>
      <BreadcrumbItem to="/parent1">Parent1</BreadcrumbItem>
      <BreadcrumbItem to="/parent2">Parent2</BreadcrumbItem>
      <BreadcrumbItem to="/parent3">Parent3</BreadcrumbItem>
      <BreadcrumbItem to="/parent4">Parent4</BreadcrumbItem>
      <BreadcrumbItem to="/parent5">Parent5</BreadcrumbItem>
      <BreadcrumbItem to="">Current</BreadcrumbItem>
    </Breadcrumbs>
  );
};
