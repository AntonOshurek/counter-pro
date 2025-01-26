//NAVIGATION
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { NewCounterScreen, CounterSettingsScreen } from '../../screens';
//TYPES
import {
	CounterTopTabsNavigationParams,
	CounterTopTabsParams
} from './model/counter-top-tabs.model';

const CounterTopTabs = (): JSX.Element => {
	const Tab = createMaterialTopTabNavigator<CounterTopTabsNavigationParams>();

	return (
		<Tab.Navigator>
			<Tab.Screen name={CounterTopTabsParams.Counter} component={NewCounterScreen} />
			<Tab.Screen
				name={CounterTopTabsParams.Settings}
				component={CounterSettingsScreen}
			/>
		</Tab.Navigator>
	);
};

export default CounterTopTabs;
