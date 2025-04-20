export const enum Themes {
	dark = 'dark',
	light = 'light',
	system = 'system'
}

export const APP_THEMES = [Themes.dark, Themes.light, Themes.system] as const;
export const COLOR_THEMES = [Themes.dark, Themes.light] as const;
