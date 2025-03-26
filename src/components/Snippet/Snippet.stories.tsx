import { Meta, StoryFn } from '@storybook/react';

import Snippet from './Snippet';

export default {
  title: 'components/Snippet',
  component: Snippet,
} as Meta<typeof Snippet>;

const Template: StoryFn<typeof Snippet> = (args) => <Snippet {...args} />;

export const Playground: StoryFn<typeof Snippet> = Template.bind({});
Playground.args = {
  children: `
  "scripts": {
    "build": "rollup -c",
    "betterer": "betterer -t ./tsconfig.json -c .betterer/.betterer.ts -r .betterer/.betterer.results --strict",
    "betterer:precommit": "betterer precommit -t ./tsconfig.json -c .betterer/.betterer.ts -r .betterer/.betterer.results --strict",
    "betterer:ci": "betterer ci -t ./tsconfig.json -c .betterer/.betterer.ts -r .betterer/.betterer.results --strict",
    "test": "jest -w 1",
    "test:watch": "jest --watch",
    "types": "tsc --noEmit",
    "lint": "eslint 'src/**/*.{js,ts,tsx}'",
    "lint:fix": "eslint 'src/**/*.{js,ts,tsx}' --fix",
    "lint:css": "stylelint 'src/**/*.{js,ts,tsx}'",
    "storybook": "start-storybook -p 8008",
    "storybook:build": "build-storybook --quiet",
    "test:storybook:visual": "./visual-regressions/bin/take-and-check-in-docker.sh",
    "test:storybook:visual:update": "./visual-regressions/bin/take-and-update-in-docker.sh",
    "test:storybook:visual:ci": "./visual-regressions/bin/take-and-check-in-docker-ci.sh",
    "semantic-release": "semantic-release",
    "prepare": "husky install"
  },
  `,
};
Playground.parameters = {
  screenshot: { skip: true },
};

export const WithoutCopy: StoryFn<typeof Snippet> = Template.bind({});
WithoutCopy.args = {
  ...Playground.args,
  canCopy: false,
};
WithoutCopy.parameters = {
  screenshot: { skip: true },
};

export const WithoutDedent: StoryFn<typeof Snippet> = Template.bind({});
WithoutDedent.args = {
  children: JSON.stringify(
    [
      {
        name: 'core-js',
        url: 'https://github.com/zloirock/core-js',
        version: 'core-js-global@2.6.12',
      },
    ],
    null,
    2,
  ),
  shouldDedent: false,
};

export const WithTextWrapping: StoryFn<typeof Snippet> = Template.bind({});
WithTextWrapping.args = {
  ...Playground.args,
  shouldWrapText: true,
};

export const Expanded: StoryFn<typeof Snippet> = Template.bind({});
Expanded.args = {
  ...Playground.args,
  isExpanded: true,
};

export const CustomMaxHeight: StoryFn<typeof Snippet> = Template.bind({});
CustomMaxHeight.args = {
  ...Playground.args,
  maxHeight: 1000,
};
