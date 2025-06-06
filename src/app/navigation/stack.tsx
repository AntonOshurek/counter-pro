//NAVIGATION
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CounterTopTabs from './counter-top-tabs';
import BottomTabs from './bottom-tabs';
import GroupTopTabs from './group-top-tabs';
//TYPES
import type { NavigationStackParams } from '@shared/types/navigation';
//HOOKS
import UseThemeResolver from '@shared/hooks/useThemeResolver';
//CONSTANTS
import { StackScreens } from '@shared/constants';
//STYLES
import { colors } from '@shared/styles';

const Stack = () => {
	const Stack = createNativeStackNavigator<NavigationStackParams>();
	const theme = UseThemeResolver();

	return (
		<Stack.Navigator
			initialRouteName={StackScreens.BottomTabs}
			screenOptions={{
				headerStyle: {
					backgroundColor: colors[theme].mainSurfaceTertiary
				},
				contentStyle: { backgroundColor: 'transparent' },
				headerTintColor: colors[theme].textPrimary
			}}
		>
			<Stack.Screen
				name={StackScreens.BottomTabs}
				component={BottomTabs}
				options={{
					title: 'Home',
					headerShown: false
				}}
			/>
			<Stack.Screen name={StackScreens.CounterScreen} component={CounterTopTabs} />
			<Stack.Screen name={StackScreens.GroupScreen} component={GroupTopTabs} />
		</Stack.Navigator>
	);
};

export default Stack;
