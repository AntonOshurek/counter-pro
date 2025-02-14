//NATIVE
import { View } from 'react-native';
//ENTITIES
import { AppThemes } from '../../../../entities/theme';
//UI
import Paragraph from '../../../../shared/ui/paragraph/paragraph';
import Switcher from '../../../../shared/ui/switcher/switcher';
//MODEL
import { ThemeSwitcherProps } from './theme-switcher.model';
//STYLES
import style from './style';

const ThemeSwitcherControls = ({ currentTheme, onThemeChange, themes }: ThemeSwitcherProps) => {
	return (
		<View style={style.themeSwitcher}>
			<Paragraph size='medium' contentType='secondary' textTransform='capitalize'>
				theme switcher
			</Paragraph>

			<View style={style.themeSwitcherGroup}>
				{themes.map(theme => (
					<Switcher<AppThemes>
						value={theme}
						isChecked={currentTheme === theme}
						onChange={onThemeChange}
						label={theme}
						key={theme}
					/>
				))}
			</View>
		</View>
	);
};

export default ThemeSwitcherControls;
