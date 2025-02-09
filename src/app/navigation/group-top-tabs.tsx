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
} from './model/group-top-tabs.model';
import { useLayoutEffect } from 'react';

const GroupTopTabs = ({ navigation }: GroupTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<GroupTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: groupId ? groupId : 'New Group'
		});
	}, [navigation, groupId]);

	return (
		<Tab.Navigator
			initialRouteName={
				groupId ? GroupTopTabsScreens.Group : GroupTopTabsScreens.Settings
			}
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
				initialParams={{ groupId }}
			/>
			<Tab.Screen name={GroupTopTabsScreens.Settings} component={GroupSettingsScreen} />
		</Tab.Navigator>
	);
};

export default GroupTopTabs;
