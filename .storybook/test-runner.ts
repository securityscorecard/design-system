import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);
    const a11yParams = storyContext.parameters?.a11y;
    const storyName = storyContext.name;

    if (a11yParams?.disable || storyName === 'Playground') {
      return;
    }
    await configureAxe(page, {
      rules: a11yParams?.config?.rules,
    });

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      verbose: false,
      axeOptions: {
        runOnly: ['wcag21aa','wcag22aa','best-practice','EN-301-549']
      },
    }, true, 'v2');
  },
};

export default config;