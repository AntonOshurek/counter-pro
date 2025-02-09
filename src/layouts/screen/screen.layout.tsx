//NATIVE
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//HOOKS
import useThemeResolver from '../../shaared/hooks/useThemeResolver';
//MODEL
import type { ScreenLayoutProps } from './model/screen-layout.model';
//CONSTANTS
import { Themes } from '../../shaared/constants/';
//STYLES
import style from './styles/style';
import { colors } from '../../shaared/styles';

const ScreenLayout = ({
	children,
	additionalClass,
	withoutPaddings
}: ScreenLayoutProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	return (
		<View
			style={[
				withoutPaddings ? s.ScreenLayoutWithoutPadding : s.ScreenLayout,
				additionalClass
			]}
		>
			<StatusBar
				style={theme === Themes.dark ? Themes.light : Themes.dark}
				backgroundColor={colors[theme].mainSurfaceTertiary}
				translucent={true}
			/>
			{children}
		</View>
	);
};

export default ScreenLayout;
