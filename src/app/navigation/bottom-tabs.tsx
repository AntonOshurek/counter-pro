//NAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//SCREENS
import { HomeScreen, SettingsScreen } from '../../screens';
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
				component={SettingsScreen}
				name={BottomTabsParams.SettingsScreen}
				options={{ title: 'Settings' }}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabs;
