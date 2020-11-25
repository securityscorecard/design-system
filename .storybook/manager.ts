import { themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: themes.dark,
  showRoots: true, // display the top-level grouping as a "root" in the sidebar
  docs: {
    theme: themes.light,
  },
  showPanel: true,
  panelPosition: 'right',
});
