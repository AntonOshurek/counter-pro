// features/theme/switch-theme/index.ts
import { useAppSelector } from '../../../shared/store';
//FEATURES
import useSwitchTheme from './switch-theme';
//ENTITIES
import { SelectorGetTheme } from '../../../entities/theme';
//CONSTANTS
import { appThemes } from '../../../shared/constants';
//UI
import ThemeSwitcherControls from './ui/theme-switcher-controls';

const ThemeSwitcher = () => {
	const currentTheme = useAppSelector(SelectorGetTheme());
	const switchTheme = useSwitchTheme();

	return (
		<ThemeSwitcherControls
			currentTheme={currentTheme}
			onThemeChange={switchTheme}
			themes={[...appThemes]}
		/>
	);
};

export default ThemeSwitcher;
