//NAVIGATION
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { CounterScreen, CounterSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//STYLES
import { colors } from '../../shaared/styles';
//TYPES
import {
	CounterTopTabsNavigationParams,
	CounterTopTabsParams
} from './model/counter-top-tabs.model';

const CounterTopTabs = () => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	return (
		<Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: colors[theme].mainSurfacePrimary
      },
      tabBarActiveTintColor: colors[theme].textPrimary,
      tabBarInactiveTintColor: colors[theme].textSecondary,
    }}>
			<Tab.Screen name={CounterTopTabsParams.Counter} component={CounterScreen} />
			<Tab.Screen
				name={CounterTopTabsParams.Settings}
				component={CounterSettingsScreen}
			/>
		</Tab.Navigator>
	);
};

export default CounterTopTabs;
