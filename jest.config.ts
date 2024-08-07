export default {
  roots: ['./src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.build.json',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(styled-reset-advanced))'],
  testMatch: ['./**/*.(test).(ts|tsx)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
      'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
