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
yarn global add yalc # for Yarn
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


## PNP with Yarn Modern
This project uses Yarn Modern with Plug'n'play installation method. As a result, you won't see any 'node_modules' folder in the root directory. If you have previously worked on this project, we recommend removing the original 'node_modules' folder before running 'yarn' to create a Yarn cache. Although we don't anticipate any major issues, if you encounter any problems, please don't hesitate to contact us or refer to the Troubleshooting section below.

### Troubleshooting

#### Cannot find module <require-path>
This error can be caused by not using the patched version of the typescript package. If you are using VS Code, please follow the steps below:

1. Press `cmd+shift+p` in a TypeScript file
2. Choose "Select TypeScript Version"
3. Pick "Use Workspace Version"
4. Restart VS Code (if needed)

## Contributing

- read the [Contributing guide](CONTRIBUTING.md)
- read the [Testing guide](TESTING.md)
