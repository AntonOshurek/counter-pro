export const enum Themes {
	dark = 'dark',
	light = 'light',
	system = 'system'
}

export const appThemes = [Themes.dark, Themes.light, Themes.system] as const;
export const colorThemes = [Themes.dark, Themes.light] as const;
