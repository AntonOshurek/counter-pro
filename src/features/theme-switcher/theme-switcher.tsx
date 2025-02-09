import { useEffect, useState } from 'react';
//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector, useAppDispatch } from '../../shaared/store';
//ENTITIES
import { SelectorGetTheme, SetNewThemeAction, AppThemes } from '../../entities/theme';
//UI
import Switcher from '../../shaared/ui/switcher/switcher';
import Paragraph from '../../shaared/ui/paragraph/paragraph';
//CONSTANTS
import { appThemes } from '../../shaared/constants';
//STYLES
import style from './styles/style';

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
		<View style={style.themeSwitcher}>
			<Paragraph size={'medium'} contentType={'secondary'} textTransform={'capitalize'}>
				theme switcher
			</Paragraph>

			<View style={style.themeSwitcherGroup}>
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
