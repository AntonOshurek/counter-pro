//NAVIGATION
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { CounterScreen, CounterSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shared/hooks/useThemeResolver';
//CONSTANTS
import { CounterTopTabsScreens } from '../../shared/constants';
//STYLES
import { colors } from '../../shared/styles';
//TYPES
import { CounterTopTabsNavigationParams } from './model/';

const CounterTopTabs = () => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	return (
		<Tab.Navigator
      initialRouteName={CounterTopTabsScreens.Counter}
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
