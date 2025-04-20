//NATIVE
import { View } from 'react-native';
//STORE
import { useAppSelector } from '@shared/store';
//FEATURES
import useSwitchTheme from '../../switch-theme';
//ENTITIES
import { SelectorGetTheme } from '@entities/app';
//UI
import { Paragraph, Switcher } from '@shared/ui/';
//STYLES
import style from './styles/style';
//TYPES
import type { AppThemes } from '@shared/types';
//CONSTANTS
import { appThemes } from '@shared/constants';

const ThemeSettingSwitcher = () => {
	const currentTheme = useAppSelector(SelectorGetTheme());
	const switchTheme = useSwitchTheme();

	return (
		<View style={style.themeSwitcher}>
			<Paragraph size='medium' contentType='secondary' textTransform='capitalize'>
				theme switcher
			</Paragraph>

			<View style={style.themeSwitcherGroup}>
				{appThemes.map(theme => (
					<Switcher<AppThemes>
						value={theme}
						isChecked={currentTheme === theme}
						onChange={switchTheme}
						label={theme}
						key={theme}
					/>
				))}
			</View>
		</View>
	);
};

export default ThemeSettingSwitcher;
