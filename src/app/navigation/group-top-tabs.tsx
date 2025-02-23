import { useLayoutEffect } from 'react';
//NAVIGATION
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { GroupScreen, GroupSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shared/hooks/useThemeResolver';
//LIBS
import { truncateWithEllipsis } from '../../shared/lib/word-lib';
//CONSTANTS
import {
	GroupTopTabsScreens,
	symbolsAmountOnNavigationHeader
} from '../../shared/constants';
//STYLES
import { colors } from '../../shared/styles';
//TYPES
import {
	GroupScreenRouteProp,
	GroupTopTabsNavigationParams,
	GroupTopTabsProps
} from './model/';

const GroupTopTabs = ({ navigation }: GroupTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<GroupTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<GroupScreenRouteProp>();
	const { group } = route.params || {};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: group
				? truncateWithEllipsis(group.name, symbolsAmountOnNavigationHeader)
				: 'New Group'
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
