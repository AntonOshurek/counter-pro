//NATIVE
import { SafeAreaProvider } from 'react-native-safe-area-context';
//HOOKS
import useThemeResolver from '@shared/hooks/useThemeResolver';
//STYLES
import { colors } from '@shared/styles';
import { StatusBar } from 'expo-status-bar';
import { Themes } from '@shared/constants';
import { View } from 'react-native';

const UiAppLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = useThemeResolver();

	const statusBarStyle = theme === Themes.dark ? Themes.light : Themes.dark;

	return (
		<>
			<SafeAreaProvider>
				<View style={{ flex: 1, backgroundColor: colors[theme].mainSurfacePrimary }}>
					<StatusBar style={statusBarStyle} translucent={false} />
					{children}
				</View>
			</SafeAreaProvider>
		</>
	);
};

export default UiAppLayout;
