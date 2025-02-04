import { useEffect, useState } from 'react';
//NATIVE
import { View, Text } from 'react-native';
//STORE
import { useAppSelector, useAppDispatch } from '../../shaared/store';
//ENTITIES
import { SelectorGetTheme, SetNewThemeAction } from '../../entities/theme';
//UI
import Switcher from '../../shaared/ui/switcher/switcher';
//CONSTANTS
import { appThemes } from '../../shaared/constants/theme';
//TYPES
import type { AppThemes } from '../../entities/theme';

const ThemeSwitcher = () => {
	const [currentTheme, setCurrentTheme] = useState<AppThemes>(
		useAppSelector(SelectorGetTheme())
	);

	const dispatch = useAppDispatch();

	const handleThemeChange = (newTheme: AppThemes): void => {
		setCurrentTheme(newTheme);
	};

	useEffect(() => {
		dispatch(SetNewThemeAction({ newTheme: currentTheme }));
	}, [dispatch, currentTheme]);

	return (
		<View>
			<Text>theme switcher</Text>

			{appThemes.map(theme => (
				<Switcher<AppThemes>
					value={theme}
					isChecked={currentTheme === theme}
					onChange={handleThemeChange}
					placeholder={theme}
					key={theme}
				/>
			))}
		</View>
	);
};

export default ThemeSwitcher;
