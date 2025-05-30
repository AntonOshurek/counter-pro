//NAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//SCREENS
import { HomeScreen, InfoScreen, SettingsScreen, GroupsScreen } from '@screens';
//FEATURES
import { SortTypeSelectorHeaderButton as SortTypeSelectorHeaderButtonCounter } from '@features/counter';
import { SortTypeSelectorHeaderButton as SortTypeSelectorHeaderButtonGroup } from '@features/group/';
//TYPES
import type { BottomTabsNavigationParams } from '@shared/types/navigation';
//HOOKS
import UseThemeResolver from '@shared/hooks/useThemeResolver';
//CONSTANTS
import { BottomTabsScreens } from '@shared/constants';
//ICONS
import { HomeIcon, SettingsIcon, ListIcon, InfoIcon } from '@shared/icons/';
//STYLES
import { colors } from '@shared/styles';

const BottomTabs = () => {
	const BottomTabs = createBottomTabNavigator<BottomTabsNavigationParams>();
	const theme = UseThemeResolver();

	return (
		<BottomTabs.Navigator
			initialRouteName={BottomTabsScreens.HomeScreen}
			screenOptions={{
				tabBarShowLabel: false,
				headerStyle: {
					backgroundColor: colors[theme].mainSurfaceTertiary
				},
				headerTintColor: colors[theme].textPrimary,
				tabBarStyle: {
					backgroundColor: colors[theme].mainSurfaceTertiary,
					borderTopWidth: 0,
					paddingTop: 5,
					paddingBottom: 15
				}
			}}
		>
			<BottomTabs.Screen
				component={HomeScreen}
				name={BottomTabsScreens.HomeScreen}
				options={{
					title: 'Home',
					tabBarIcon: () => (
						<HomeIcon height={40} width={40} color={colors[theme].textPrimary} />
					),
					headerRight: () => <SortTypeSelectorHeaderButtonCounter />
				}}
			/>
			<BottomTabs.Screen
				component={GroupsScreen}
				name={BottomTabsScreens.Groups}
				options={{
					title: 'Groups',
					tabBarIcon: () => (
						<ListIcon height={40} width={40} color={colors[theme].textPrimary} />
					),
					headerRight: () => <SortTypeSelectorHeaderButtonGroup />
				}}
			/>
			<BottomTabs.Screen
				component={SettingsScreen}
				name={BottomTabsScreens.SettingsScreen}
				options={{
					title: 'Settings',
					tabBarIcon: () => (
						<SettingsIcon height={40} width={40} color={colors[theme].textPrimary} />
					)
				}}
			/>
			<BottomTabs.Screen
				component={InfoScreen}
				name={BottomTabsScreens.InfoScreen}
				options={{
					title: 'Info',
					tabBarIcon: () => (
						<InfoIcon height={40} width={40} color={colors[theme].textPrimary} />
					)
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabs;
