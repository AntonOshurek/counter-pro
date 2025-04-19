import { useColorScheme } from 'react-native';
//ENTITIES
import { SelectorGetTheme } from '@entities/theme';
import { ColorThemes } from '@shared/types';
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
