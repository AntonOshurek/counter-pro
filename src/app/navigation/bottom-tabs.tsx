//NAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//SCREENS
import { HomeScreen, InfoScreen, SettingsScreen, GroupsScreen } from '../../screens';
//TYPES
import { BottomTabsParams, BottomTabsNavigationParams } from './model/bottom-tabs.model';
//ICONS
import { HomeIcon, SettingsIcon, ListIcon, InfoIcon } from '../../shaared/icons/';

const BottomTabs = (): JSX.Element => {
	const BottomTabs = createBottomTabNavigator<BottomTabsNavigationParams>();

	return (
		<BottomTabs.Navigator initialRouteName={BottomTabsParams.HomeScreen}>
			<BottomTabs.Screen
				component={HomeScreen}
				name={BottomTabsParams.HomeScreen}
				options={{
					title: '',
					tabBarIcon: ({ color }) => <HomeIcon height={40} width={40} />
				}}
			/>
			<BottomTabs.Screen
				component={GroupsScreen}
				name={BottomTabsParams.Groups}
				options={{
					title: '',
					tabBarIcon: ({ color }) => <ListIcon height={40} width={40} />
				}}
			/>
			<BottomTabs.Screen
				component={SettingsScreen}
				name={BottomTabsParams.SettingsScreen}
				options={{
					title: '',
					tabBarIcon: ({ color }) => <SettingsIcon height={40} width={40} />
				}}
			/>
			<BottomTabs.Screen
				component={InfoScreen}
				name={BottomTabsParams.InfoScreen}
				options={{
					title: '',
					tabBarIcon: ({ color }) => <InfoIcon height={40} width={40} />
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabs;
