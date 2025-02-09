//NAVIGATION
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { GroupScreen, GroupSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//CONSTANTS
import { GroupTopTabsScreens } from '../../shaared/constants';
//STYLES
import { colors } from '../../shaared/styles';
//TYPES
import {
	GroupScreenRouteProp,
	GroupTopTabsNavigationParams,
	GroupTopTabsProps
} from './model/';
import { useLayoutEffect } from 'react';

const GroupTopTabs = ({ navigation }: GroupTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<GroupTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<GroupScreenRouteProp>();
	const { group } = route.params || {};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: group ? group.name : 'New Group'
		});
	}, [navigation, group]);

	return (
		<Tab.Navigator
			initialRouteName={group ? GroupTopTabsScreens.Group : GroupTopTabsScreens.Settings}
			screenOptions={{
				tabBarStyle: {
					backgroundColor: colors[theme].mainSurfacePrimary
				},
				tabBarActiveTintColor: colors[theme].textPrimary,
				tabBarInactiveTintColor: colors[theme].textSecondary
			}}
		>
			<Tab.Screen
				name={GroupTopTabsScreens.Group}
				component={GroupScreen}
				initialParams={{ group }}
			/>
			<Tab.Screen name={GroupTopTabsScreens.Settings} component={GroupSettingsScreen} />
		</Tab.Navigator>
	);
};

export default GroupTopTabs;
