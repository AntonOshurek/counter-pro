import { useColorScheme } from 'react-native';
//ENTITIES
import { SelectorGetTheme, Themes } from '../../entities/theme';
//STORE
import { useAppSelector } from '../store';

const useThemeResolver = (): Omit<Themes, 'system'> => {
	const storeTheme = useAppSelector(SelectorGetTheme());
	const systemTheme = useColorScheme();

	if (storeTheme === 'system') {
		return systemTheme === 'dark' ? 'dark' : 'light';
	}

	return storeTheme;
};

export default useThemeResolver;
