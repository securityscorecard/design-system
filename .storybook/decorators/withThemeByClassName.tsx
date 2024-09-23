/**
 * Based on https://github.com/storybookjs/storybook/blob/b94ead30bd1798648bc674bce61ba841508b6bbc/code/addons/themes/src/decorators/class-name.decorator.tsx
 */

import { useEffect } from 'storybook/internal/preview-api';
import type { DecoratorFunction, Renderer } from 'storybook/internal/types';


import { addons, useParameter } from 'storybook/internal/preview-api';
import type { StoryContext } from 'storybook/internal/types';

export const PARAM_KEY = 'themes' as const;
export const ADDON_ID = `storybook/${PARAM_KEY}` as const;
export const GLOBAL_KEY = 'theme' as const;
export const THEME_SWITCHER_ID = `${ADDON_ID}/theme-switcher` as const;

interface ThemeAddonState {
  themesList: string[];
  themeDefault?: string;
}

export const DEFAULT_ADDON_STATE: ThemeAddonState = {
  themesList: [],
  themeDefault: undefined,
};

interface ThemeParameters {
  themeOverride?: string;
  disable?: boolean;
}

export const DEFAULT_THEME_PARAMETERS: ThemeParameters = {};

export const THEMING_EVENTS = {
  REGISTER_THEMES: `${ADDON_ID}/REGISTER_THEMES`,
} as const;

/**
 *
 * @param StoryContext
 * @returns The global theme name set for your stories
 */
export function pluckThemeFromContext({ globals }: StoryContext): string {
  return globals[GLOBAL_KEY] || '';
}

export function useThemeParameters(): ThemeParameters {
  return useParameter<ThemeParameters>(PARAM_KEY, DEFAULT_THEME_PARAMETERS) as ThemeParameters;
}

export function initializeThemeState(themeNames: string[], defaultTheme: string) {
  addons.getChannel().emit(THEMING_EVENTS.REGISTER_THEMES, {
    defaultTheme,
    themes: themeNames,
  });
}

interface ClassNameStrategyConfiguration {
  themes: Record<string, string>;
  defaultTheme: string;
}


const classStringToArray = (classString: string) => classString.split(' ').filter(Boolean);
const composeStorySelector = (id: string)=>`#anchor--${id} .docs-story`

export const withThemeByClassName = <TRenderer extends Renderer = Renderer>({
  themes,
  defaultTheme,
}: ClassNameStrategyConfiguration): DecoratorFunction<TRenderer> => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (storyFn, context) => {
    const { viewMode, id } = context;
    const { themeOverride } = useThemeParameters();
    const selected = pluckThemeFromContext(context);

    useEffect(() => {
      const selectedThemeName = themeOverride || selected || defaultTheme;
      const parentElement = document.querySelector(viewMode==='story'? 'html' : composeStorySelector(id));

      if (!parentElement) {
        return;
      }

      Object.entries(themes)
        .filter(([themeName]) => themeName !== selectedThemeName)
        .forEach(([themeName, className]) => {
          const classes = classStringToArray(className);
          if (classes.length > 0) {
            parentElement.classList.remove(...classes);
          }
        });

      const newThemeClasses = classStringToArray(themes[selectedThemeName]);

      if (newThemeClasses.length > 0) {
        parentElement.classList.add(...newThemeClasses);
      }
    }, [themeOverride, selected]);

    return storyFn();
  };
};