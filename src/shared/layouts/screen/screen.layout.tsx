//NATIVE
import { View, ScrollView, SafeAreaView } from 'react-native';
//HOOKS
import useThemeResolver from '@shared/hooks/useThemeResolver';
//MODEL
import type { ScreenLayoutProps } from './model/screen-layout.model';
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

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors[theme].mainSurfacePrimary }} >
			{withScroll ? (
				<ScrollView
					contentContainerStyle={containerStyle}
					showsVerticalScrollIndicator={false}
				>
					{children}
				</ScrollView>
			) : (
				<View style={containerStyle}>{children}</View>
			)}
		</SafeAreaView>
	);
};

export default ScreenLayout;
