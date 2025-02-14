//ENTITIES
import type { AppThemes } from '../../../../entities/theme';

interface ThemeSwitcherProps {
	currentTheme: AppThemes;
	onThemeChange: (newTheme: AppThemes) => void;
	themes: AppThemes[];
}

export { ThemeSwitcherProps };
