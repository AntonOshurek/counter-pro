//NATIVE
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//HOOKS
import useThemeResolver from '@shared/hooks/useThemeResolver';
//STYLES
import { colors } from '@shared/styles';
import { StatusBar } from 'expo-status-bar';
import { Themes } from '@shared/constants';

const UiAppLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = useThemeResolver();

	const statusBarStyle = theme === Themes.dark ? Themes.light : Themes.dark;

	return (
		<SafeAreaProvider>
			<StatusBar style={statusBarStyle} />
			<View style={{ flex: 1, backgroundColor: colors[theme].mainSurfacePrimary }}>
				{children}
			</View>
		</SafeAreaProvider>
	);
};

export default UiAppLayout;
