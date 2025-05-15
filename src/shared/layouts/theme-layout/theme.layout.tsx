//NATIVE
import { View } from 'react-native';
//HOOKS
import useThemeResolver from '@shared/hooks/useThemeResolver';
//STYLES
import { colors } from '@shared/styles';

const ThemeLayout = ({ children }: { children: React.ReactNode }) => {
	const theme = useThemeResolver();

	return (
		<View style={{ flex: 1, backgroundColor: colors[theme].mainSurfacePrimary }}>
			{children}
		</View>
	);
};

export default ThemeLayout;
