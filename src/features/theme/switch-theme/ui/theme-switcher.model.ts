//ENTITIES
import type { AppThemes } from '@shared/types';

interface ThemeSwitcherProps {
	currentTheme: AppThemes;
	onThemeChange: (newTheme: AppThemes) => void;
	themes: AppThemes[];
}

export { ThemeSwitcherProps };
