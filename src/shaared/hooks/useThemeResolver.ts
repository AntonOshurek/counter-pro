import { useColorScheme } from 'react-native';
//ENTITIES
import { SelectorGetTheme, ColorThemes } from '../../entities/theme';
//STORE
import { useAppSelector } from '../store';
//CONSTANTS
import { Themes } from '../constants';

const useThemeResolver = (): ColorThemes => {
	const storeTheme = useAppSelector(SelectorGetTheme());
	const systemTheme = useColorScheme();

	if (storeTheme === Themes.system) {
		return systemTheme === Themes.dark ? Themes.dark : Themes.light;
	}

	return storeTheme;
};

export default useThemeResolver;
