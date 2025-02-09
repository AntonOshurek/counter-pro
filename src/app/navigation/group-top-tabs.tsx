//NAVIGATION
import { RouteProp, useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { GroupScreen, GroupSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//STYLES
import { colors } from '../../shaared/styles';
//TYPES
import {
	GroupScreenRouteProp,
	GroupTopTabsNavigationParams,
	GroupTopTabsParams,
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
			initialRouteName={groupId ? GroupTopTabsParams.Group : GroupTopTabsParams.Settings}
			screenOptions={{
				tabBarStyle: {
					backgroundColor: colors[theme].mainSurfacePrimary
				},
				tabBarActiveTintColor: colors[theme].textPrimary,
				tabBarInactiveTintColor: colors[theme].textSecondary
			}}
		>
			<Tab.Screen
				name={GroupTopTabsParams.Group}
				component={GroupScreen}
				initialParams={{ groupId }}
			/>
			<Tab.Screen name={GroupTopTabsParams.Settings} component={GroupSettingsScreen} />
		</Tab.Navigator>
	);
};

export default GroupTopTabs;
