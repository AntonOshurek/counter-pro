//NATIVE
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//HOOKS
import useThemeResolver from '@shared/hooks/useThemeResolver';
//MODEL
import type { ScreenLayoutProps } from './model/screen-layout.model';
//CONSTANTS
import { Themes } from '@shared/constants';
//STYLES
import style from './styles/style';
import { colors } from '@shared/styles';

const ScreenLayout = ({
	children,
	additionalClass,
	withoutPaddings,
	withScroll
}: ScreenLayoutProps) => {
	const theme = useThemeResolver();
	const s = style(theme);

	const containerStyle = [
		withoutPaddings ? s.ScreenLayoutWithoutPadding : s.ScreenLayout,
		additionalClass
	];

	const statusBarStyle = theme === Themes.dark ? Themes.light : Themes.dark;

	return withScroll ? (
		<ScrollView
			contentContainerStyle={containerStyle}
			showsVerticalScrollIndicator={false}
		>
			<StatusBar
				style={statusBarStyle}
				backgroundColor={colors[theme].mainSurfaceTertiary}
				translucent={true}
			/>
			{children}
		</ScrollView>
	) : (
		<View style={containerStyle}>
			<StatusBar
				style={statusBarStyle}
				backgroundColor={colors[theme].mainSurfaceTertiary}
				translucent={true}
			/>
			{children}
		</View>
	);
};

export default ScreenLayout;
