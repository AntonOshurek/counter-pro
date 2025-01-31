import { useEffect, useState } from 'react';
//NATIVE
import { View, Text, Switch } from 'react-native';
//STORE
import { useAppSelector, useAppDispatch } from '../../shaared/store';
//ENTITIES
import { SelectorGetTheme } from '../../entities/theme';
import { SetNewThemeAction } from '../../entities/theme';
//CONSTANTS
import { themes } from '../../shaared/constants/theme';
//TYPES
import type { Themes } from '../../entities/theme';

const ThemeSwitcher = () => {
	const [currentTheme, setCurrentTheme] = useState<Themes>(
		useAppSelector(SelectorGetTheme())
	);

	const dispatch = useAppDispatch();

	const handleThemeChange = (newTheme: Themes): void => {
		setCurrentTheme(newTheme);
	};

	useEffect(() => {
		dispatch(SetNewThemeAction({ newTheme: currentTheme }));
	}, [dispatch, currentTheme]);

	return (
		<View>
			<Text>theme switcher</Text>

			{themes.map(theme => (
				<View key={theme}>
					<Text>{theme}</Text>
					<Switch
						trackColor={{ false: '#767577', true: '#81b0ff' }}
						thumbColor={currentTheme === theme ? '#f5dd4b' : '#f4f3f4'}
						ios_backgroundColor='#3e3e3e'
						onValueChange={() => handleThemeChange(theme)}
						value={currentTheme === theme}
					/>
				</View>
			))}
		</View>
	);
};

export default ThemeSwitcher;
