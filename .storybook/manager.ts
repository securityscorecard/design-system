import { themes } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: themes.dark,
  docs: {
    theme: themes.light,
  },
  showPanel: true,
  panelPosition: 'right',
});
