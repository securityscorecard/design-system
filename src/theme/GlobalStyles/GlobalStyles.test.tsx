import { generateColorsCSSVars } from './GlobalStyles';

const theme = {
  colors: {
    primary: {
      100: 'grey',
      200: 'black',
      300: 'red',
    },
    secondary: {
      lighter: 'lightblue',
      darker: 'blue',
      sidebar: {
        background: 'orange',
      },
    },
  },
};

const expectedResult = `--sscds-primary-100:grey;
--sscds-primary-200:black;
--sscds-primary-300:red;
--sscds-secondary-lighter:lightblue;
--sscds-secondary-darker:blue;
--sscds-secondary-sidebar-background:orange`;

describe('GlobalStyles', () => {
  describe('generateColorsCSSVars', () => {
    it('return a string containing the css variables', () => {
      expect(generateColorsCSSVars({ theme })).toStrictEqual(expectedResult);
    });
  });
});
