//NAVIGATION
import { NavigationContainer } from '@react-navigation/native';
import Stack from './stack';
import { colors } from '@shared/styles';
import useThemeResolver from '@shared/hooks/useThemeResolver';
import { View } from 'react-native';

const Navigation = () => {
	const theme = useThemeResolver();

	return (
		<View style={{ flex: 1, backgroundColor: colors[theme].mainSurfacePrimary }}>
			<NavigationContainer>
				<Stack />
			</NavigationContainer>
		</View>
	);
};

export default Navigation;
