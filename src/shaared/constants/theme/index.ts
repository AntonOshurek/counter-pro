export enum AppTheme {
  dark = 'dark',
  light = 'light',
  system = 'system'
}

export const appThemes = [AppTheme.dark, AppTheme.light, AppTheme.system] as const;
export const colorThemes = [AppTheme.dark, AppTheme.light] as const;
