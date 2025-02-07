//NAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//SCREENS
import { HomeScreen, InfoScreen, SettingsScreen, GroupsScreen } from '../../screens';
//TYPES
import { BottomTabsParams, BottomTabsNavigationParams } from './model/bottom-tabs.model';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//ICONS
import { HomeIcon, SettingsIcon, ListIcon, InfoIcon } from '../../shaared/icons/';
//STYLES
import { colors } from '../../shaared/styles';

const BottomTabs = (): JSX.Element => {
	const BottomTabs = createBottomTabNavigator<BottomTabsNavigationParams>();
  const theme = UseThemeResolver();

	return (
		<BottomTabs.Navigator
			initialRouteName={BottomTabsParams.HomeScreen}
			screenOptions={{
				tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: colors[theme].mainSurfacePrimary
        },
        headerTintColor: colors[theme].textPrimary,
        tabBarStyle: {
          backgroundColor: colors[theme].mainSurfacePrimary,
          borderTopWidth: 0,
          paddingTop: 5,
          paddingBottom: 15,
        }
			}}
		>
			<BottomTabs.Screen
				component={HomeScreen}
				name={BottomTabsParams.HomeScreen}
				options={{
					title: 'Home',
					tabBarIcon: () => <HomeIcon height={40} width={40} color={colors[theme].textPrimary}/>
				}}
			/>
			<BottomTabs.Screen
				component={GroupsScreen}
				name={BottomTabsParams.Groups}
				options={{
					title: 'Groups',
					tabBarIcon: () => <ListIcon height={40} width={40} color={colors[theme].textPrimary}/>
				}}
			/>
			<BottomTabs.Screen
				component={SettingsScreen}
				name={BottomTabsParams.SettingsScreen}
				options={{
					title: 'Settings',
					tabBarIcon: () => <SettingsIcon height={40} width={40} color={colors[theme].textPrimary}/>
				}}
			/>
			<BottomTabs.Screen
				component={InfoScreen}
				name={BottomTabsParams.InfoScreen}
				options={{
					title: 'Info',
					tabBarIcon: () => <InfoIcon height={40} width={40} color={colors[theme].textPrimary}/>
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabs;
