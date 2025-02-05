import { useEffect, useState } from 'react';
//NATIVE
import { View, Text } from 'react-native';
//STORE
import { useAppSelector, useAppDispatch } from '../../shaared/store';
//ENTITIES
import { SelectorGetTheme, SetNewThemeAction, AppThemes } from '../../entities/theme';
//HOOKS
import useThemeResolver from '../../shaared/hooks/useThemeResolver';
//UI
import Switcher from '../../shaared/ui/switcher/switcher';
//CONSTANTS
import { appThemes } from '../../shaared/constants';
//STYLES
import style from './styles/style';

const ThemeSwitcher = () => {
	const theme = useThemeResolver();
	const s = style(theme);

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
		<View style={s.themeSwitcher}>
			<Text style={s.themeSwitcherTitle}>theme switcher</Text>

			<View>
				{appThemes.map(theme => (
					<Switcher<AppThemes>
						value={theme}
						isChecked={currentTheme === theme}
						onChange={handleThemeChange}
						label={theme}
						key={theme}
					/>
				))}
			</View>
		</View>
	);
};

export default ThemeSwitcher;
