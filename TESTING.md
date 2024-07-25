# Testing

Please beware all features or bug fixes must be tested by one or more specs (unit tests, visual regression).

## Unit tests

For unit testing, we are using Jest along with [React Testing Library](https://testing-library.com/docs/intro)
and [jest-dom](https://github.com/testing-library/jest-dom/blob/master/README.md).

Unit tests should primarily be used for testing component interactions. For testing the visual aspects of components, visual regression tests should be used. However, this does not mean that visual changes in components cannot be used for testing the result of interaction with the component. For example, it is completely valid to test whether the component content is not visible after closing a modal window.

### Scripts

`yarn test` - one-time unit tests run
`yarn test:watch` - run with watcher

### Useful sources

- https://testing-library.com/docs/intro
- https://github.com/testing-library/jest-dom/blob/master/README.md
- https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

## Visual regression

We use `Storybook`, `reg-cli` and `storycap` for visual regression testing. These tests are usually run during the CI/CD pipeline. If the `visual-tests` step fails due to intended changes, you will need to update the snapshots manually by running `yarn test:storybook:visual:update` and commit the updated snapshots.

All components in the Design System should have a stories file (for Storybook) that clearly describes all the features and states that the component has. By default, all stories are considered visual regression tests, unless you manually disable it with `screenshot: { skip: true }` in the story `parameters` object.

## Linting

Linting (eslint and stylelint) is run in a pre-commit hook as well as in CI.

### Scripts

`yarn lint` - check all files
`yarn lint:fix` - check and try to fix errors in all files
`yarn lint:css` - check styled-components syntax in all files

## Typings

The typing check is automatically run in CI.

### Scripts

`yarn types` - check all files
