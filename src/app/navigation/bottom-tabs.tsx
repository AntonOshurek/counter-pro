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
		<BottomTabs.Navigator
			initialRouteName={BottomTabsParams.HomeScreen}
			screenOptions={{
				tabBarShowLabel: false
			}}
		>
			<BottomTabs.Screen
				component={HomeScreen}
				name={BottomTabsParams.HomeScreen}
				options={{
					title: 'Home',
					tabBarIcon: () => <HomeIcon height={40} width={40} />
				}}
			/>
			<BottomTabs.Screen
				component={GroupsScreen}
				name={BottomTabsParams.Groups}
				options={{
					title: 'Groups',
					tabBarIcon: () => <ListIcon height={40} width={40} />
				}}
			/>
			<BottomTabs.Screen
				component={SettingsScreen}
				name={BottomTabsParams.SettingsScreen}
				options={{
					title: 'Settings',
					tabBarIcon: () => <SettingsIcon height={40} width={40} />
				}}
			/>
			<BottomTabs.Screen
				component={InfoScreen}
				name={BottomTabsParams.InfoScreen}
				options={{
					title: 'Info',
					tabBarIcon: () => <InfoIcon height={40} width={40} />
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabs;
