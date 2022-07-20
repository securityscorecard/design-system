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
yarn run storybook
```

### Development in third-party application

To avoid version conflicts within the application we need to link `react`, `react-dom` 
and `styled-components` libraries from the third-party application into `design-system`.

```sh
cd path/to/application
cd node_modules/react && yarn link # register react
cd ../react-dom && yarn link # register react-dom
cd ../styled-components && yarn link # register styled-components
```

Then we need to use registered packages in `design-system`, register package as the link and start build script.

```sh
cd path/to/design-system
yarn link react && yarn link react-dom && yarn link styled-components # use registered package
yarn link # register design-system
yarn build --watch # start build in watch mode
```

At the end, we need to link `design-system` in a third-party application.

```sh
cd path/to/application
yarn link @securityscorecard/design-system # use design-system
```

## PNP with Yarn2
This package is using Yarn2 with [Plug'n'play installation](https://yarnpkg.com/features/pnp). That
means you won't see any `node_modules` folder in the root. If you already workded in this repository
we recommend to you first remove the original `node_modules` folder and then run `yarn` to create Yarn
cache. We do not expect any significant issues but if anything goes wrong feel free to reach to us or
check the [Troubleshooting](#troubleshooting) section below.

### <a name="troubleshooting"></a>Troubleshooting
#### Cannot find module <require-path>
This is usually caused by not using patched version of typescript package. If you are using VS Code
please follow these steps:

1. Press `cmd+shift+p` in a TypeScript file
2. Choose "Select TypeScript Version"
3. Pick "Use Workspace Version"
4. Restart VS Code (if needed)

## Contributing

- read the [Contributing guide](CONTRIBUTING.md)
- read the [Testing guide](TESTING.md)
