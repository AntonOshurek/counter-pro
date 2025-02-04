import { useEffect, useState } from 'react';
//NATIVE
import { View, Text, Switch } from 'react-native';
//STORE
import { useAppSelector, useAppDispatch } from '../../shaared/store';
//ENTITIES
import { SelectorGetTheme } from '../../entities/theme';
import { SetNewThemeAction } from '../../entities/theme';
//UI
import Switcher from '../../shaared/ui/switcher/switcher';
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
				<Switcher<Themes>
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
