import { useColorScheme } from 'react-native';
//ENTITIES
import { SelectorGetTheme } from '../../entities/theme';
//STORE
import { useAppSelector } from '../store';
import { AppTheme } from '../constants/theme';
import { ColorThemes } from '../../entities/theme/';

const useThemeResolver = (): ColorThemes => {
	const storeTheme = useAppSelector(SelectorGetTheme());
	const systemTheme = useColorScheme();

  console.log(storeTheme)
  console.log(systemTheme)

	if (storeTheme === AppTheme.system) {
		return systemTheme === AppTheme.dark ? AppTheme.dark : AppTheme.light;
	}

	return storeTheme;
};

export default useThemeResolver;
