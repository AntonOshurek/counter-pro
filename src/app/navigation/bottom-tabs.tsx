//NAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//SCREENS
import { HomeScreen, InfoScreen, SettingsScreen, GroupsScreen } from '../../screens';
//TYPES
import { BottomTabsParams, BottomTabsNavigationParams } from './model/bottom-tabs.model';

const BottomTabs = (): JSX.Element => {
	const BottomTabs = createBottomTabNavigator<BottomTabsNavigationParams>();

	return (
		<BottomTabs.Navigator initialRouteName={BottomTabsParams.HomeScreen}>
			<BottomTabs.Screen
				component={HomeScreen}
				name={BottomTabsParams.HomeScreen}
				options={{ title: 'Home' }}
			/>
			<BottomTabs.Screen
				component={GroupsScreen}
				name={BottomTabsParams.Groups}
				options={{ title: 'Groups' }}
			/>
			<BottomTabs.Screen
				component={SettingsScreen}
				name={BottomTabsParams.SettingsScreen}
				options={{ title: 'Settings' }}
			/>
			<BottomTabs.Screen
				component={InfoScreen}
				name={BottomTabsParams.InfoScreen}
				options={{ title: 'Info' }}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabs;
