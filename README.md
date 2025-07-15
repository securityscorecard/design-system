# Design System

## Usage

You can install this package as:

```sh
yarn add @securityscorecard/design-system
# OR
npm install @securityscorecard/design-system
```

## Local Development

### Development in Storybook

```sh
git clone https://github.com/securityscorecard/design-system
cd design-system
yarn
yarn storybook
```

### Testing and development in a third-party application

In order to test out new features before release, we recommend using the `yalc` package. This package works as a local npm registry on your machine, allowing you to "install" unreleased versions of the Design System.

First, you need to install `yalc` by running the following command in your terminal:

```sh
yarn global add yalc # for Yarn
yarn dlx yalc # for Yarn from v2
npm i yalc -g # for NPM
```

In order to publish the Design System to the local registry, you need to build it first with `yarn build` and then run the publish command with `yalc publish`. Alternatively, you can run both these commands in a single line like this:

```sh
yarn build && yalc publish
```

Once you have published the Design System into the local registry, switch to the project you want to test with the new version and add the Design System:

```sh
yalc add @securityscorecard/design-system
```

After adding the local package, you can run your project and start testing.

To update the locally published package with new changes, follow the same process as above but instead of running `yalc add ...`, run `yalc update`.

The re-publishing process can be simplified to `yarn build && yalc push`. The `yalc push` command will handle both publishing new versions to the local registry and updating the version in a project that uses the Design System from the local registry.To be able to test out new features before release we recommend using `yalc` (https://github.com/wclr/yalc) package. This package works as a local npm registry on your machine and allows you to "install" unreleased versions of the Design System.

First, you need to install the `yalc`:

```sh
yarn global add yalc # for Yarn v1
yarn dlx yalc # for Yarn from v2
npm i yalc -g # for NPM
```

To publish the Design System to the local registry you need to first build DS with `yarn build` and next run publish with `yalc publish`. Or you can run this in a single command:

```sh
yarn build && yalc publish
```

After you publish DS into the local registry you need to switch to a project that you want to test with new version and add the DS.

```sh
yalc add @securityscorecard/design-system
```

After adding the local package you can run your project and test.

To update the locally published package with new changes you can follow the process above with a small change in the last step where you don't run `yalc add ...` but instead, you can run `yalc update`.

The re-publishing process can be simplified to `yarn build && yalc push`. The `yalc push` command will handle both publishing new versions to the local registry and updating version in a project using DS from the local registry.

## PR-Based Testing

For internal testing of the design system before merging to main, we provide automatic snapshot builds for every PR. This allows teams to test changes in their applications without waiting for a full release.

### How it works

1. **Automatic Build**: When a PR is created or updated, a GitHub Action automatically:
   - Runs all tests (unit, types, lint)
   - Builds the package
   - Publishes a snapshot version to npm with the pattern: `<base-version>-snapshot-<commit-sha>`
   - Tags the npm package with `pr-<PR-number>`

2. **Installation**: You can install the snapshot version in your project using:
   ```bash
   yarn add @securityscorecard/design-system@pr-<PR-number>
   ```

3. **Automatic Cleanup**: When the PR is closed or merged, the snapshot version is automatically unpublished from npm.

### Example

If PR #123 is created with commit `abc12345`, the published version would be:
- **Version**: `0.0.0-snapshot-abc12345`
- **NPM Tag**: `pr-123`
- **Install Command**: `yarn add @securityscorecard/design-system@pr-123`

### Benefits

- **No Reverts**: Test changes without merging to main
- **Reduced Merge Frequency**: Only merge when fully verified
- **Easy Integration**: Simple npm install command for testing
- **Automatic Cleanup**: No manual cleanup required

## Contributing

- read the [Contributing guide](CONTRIBUTING.md)
- read the [Testing guide](TESTING.md)
- read the [PR Deployment guide](docs/pr-deployment.md) for details on the snapshot build workflow
