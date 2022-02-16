# Testing

Please beware all features or bug fixes must be tested by one or more specs (unit-tests, visual regression).

## Unit tests

For unit testing we are using Jest along with [React Testing Library](https://testing-library.com/docs/intro) and [jest-dom](https://github.com/testing-library/jest-dom/blob/master/README.md).

### Scripts

`yarn test` - one time unit tests run
`yarn test:watch` - run with watcher

### Useful sources

- https://testing-library.com/docs/intro
- https://github.com/testing-library/jest-dom/blob/master/README.md
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

## Visual regression

For visual regression we are using reg-cli and storycap. These test are typically run during CI/CD pipeline.
If this `visual-tests` step fails due to intended changes, you have to update snapshots manually, by
running `yarn test:storybook:visual:update` and commit updated snapshots.

## Linting

Linting (eslint and stylelint) is runned in a pre-commit hook as well as in CI.

### Scripts

`yarn lint` - check all files
`yarn lint:fix` - check and try to fix errors in all files
`yarn lint:css` - check styled-components syntax in all files

## Betterer (long term goals)

We are using project called [Betterer](https://phenomnomnominal.github.io/betterer/) for maintaining and continual improvement of code quality.
This tool runs test to check out long term goals, like components deprecation, code migration, etc. We are running these checks in a pre-commit hook
as well as in CI.

### Scripts

`yarn betterer` - check codebase

## Typings

Typings check is automatically runned in CI.

### Scripts

`yarn types` - check all files
