# Design System

## Usage
This package is published in GitHub Package Registry. Easiest way how to consume this package is create `.npmrc` file in the root of you application and add line:
```
@securityscorecard:registry=https://npm.pkg.github.com
```

After `.npmrc` file is created you can install this package as:
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
yarn run develop
```

### Development in third-party application
To avoid version conflicts within application we need to link `react`, `react-dom`
and `styled-components` libraries from third-party application into `design-system`.
```sh
cd path/to/application
cd node_modules/react && yarn link # register react
cd ../react-dom && yarn link # register react-dom
cd ../styled-components && yarn link # register styled-components
```

Then we need to use registred packages in `design-system`, register package as link and start build.
```sh
cd path/to/design-system
yarn link react && yarn link react-dom && yarn link styled-components # use registered package
yarn link # register design-system
yarn build --watch # start build in watch mode
```

At the end we need to link `design-system` in third-party application.
```sh
cd path/to/application
yarn link @securityscorecard/design-system # use design-system
```


## Contributing
- read the [Contributing guide](CONTRIBUTING.md)
- read the [Testing guide](TESTING.md)
