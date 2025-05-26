//NATIVE
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
//HOOKS
import useThemeResolver from '@shared/hooks/useThemeResolver';
//STYLES
import { colors } from '@shared/styles';
//CONSTANTS
import { Themes } from '@shared/constants';

const UiAppLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = useThemeResolver();

	const statusBarStyle = theme === Themes.dark ? Themes.light : Themes.dark;

	return (
		<>
			<SafeAreaProvider>
				<View style={{ flex: 1, backgroundColor: colors[theme].mainSurfacePrimary }}>
					<StatusBar
						style={statusBarStyle}
						translucent={false}
						backgroundColor={colors[theme].mainSurfaceSecondary}
					/>
					{children}
				</View>
			</SafeAreaProvider>
		</>
	);
};

export default UiAppLayout;
