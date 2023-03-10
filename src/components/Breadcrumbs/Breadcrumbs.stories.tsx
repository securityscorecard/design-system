import type { Meta, Story } from '@storybook/react/types-6-0';
import type { BreadcrumbsProps } from './Breadcrumbs.types';

import { MemoryRouter } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';
import BreadcrumbItem from './BreadcrumbItem';

export default {
  title: 'components/Breadcrumbs',
  component: Breadcrumbs,
  subcomponents: { BreadcrumbItem },
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
  parameters: {
    docs: {
      description: {
        component: `
\`\`\`jsx
import { Breadcrumbs, BreadcrumbItem } from '@securityscorecard/design-system';
\`\`\`

The BreadcrumbItem is a link that should help the user to get to the place in the navigation
structure where he needs to go. It accepts all props you can give to a link, but makesure to
give it \`to\` or \`href\` attributes. Otherwise the link would be inactive plain text.
The current page shouldn't have these defined though.`,
      },
    },
  },
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

export const WithTwoItems: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#">Root</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export const WithDropdown: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#" iconName="cog">
        Root
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent4</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent5</BreadcrumbItem>
      <BreadcrumbItem href="">Current</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export const OnLimit: Story<BreadcrumbsProps> = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem href="#" iconName="cog">
        Root
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Parent1</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent2</BreadcrumbItem>
      <BreadcrumbItem href="#">Parent3</BreadcrumbItem>
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

WithRelativeLinks.parameters = {
  screenshot: { skip: true },
};
