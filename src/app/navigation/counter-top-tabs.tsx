//NAVIGATION
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { CounterScreen, CounterSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//CONSTANTS
import { CounterTopTabsScreens } from '../../shaared/constants';
//STYLES
import { colors } from '../../shaared/styles';
//TYPES
import { CounterTopTabsNavigationParams } from './model/';

const CounterTopTabs = () => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					backgroundColor: colors[theme].mainSurfacePrimary
				},
				tabBarActiveTintColor: colors[theme].textPrimary,
				tabBarInactiveTintColor: colors[theme].textSecondary
			}}
		>
			<Tab.Screen name={CounterTopTabsScreens.Counter} component={CounterScreen} />
			<Tab.Screen
				name={CounterTopTabsScreens.Settings}
				component={CounterSettingsScreen}
			/>
		</Tab.Navigator>
	);
};

export default CounterTopTabs;
