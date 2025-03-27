import { useLayoutEffect } from 'react';
//NAVIGATION
import { useRoute } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { GroupScreen, GroupSettingsScreen, NotFoundScreen } from '../../screens';
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
import { Group } from '../../entities/group';
//TEXT
import { groupText } from '../../shared/text-content/text-content';

const GroupTopTabs = ({ navigation }: GroupTopTabsProps) => {
	const Tab = createMaterialTopTabNavigator<GroupTopTabsNavigationParams>();
	const theme = UseThemeResolver();

	const route = useRoute<GroupScreenRouteProp>();
	const { groupId } = route.params || {};
	const group: Group | null = null;

	useLayoutEffect(() => {
		navigation.setOptions({
			// title: group.name
			// 	? truncateWithEllipsis(group.name, symbolsAmountOnNavigationHeader)
			// 	: 'New Group'
		});
	}, [navigation, group]);

	if (!group) {
		return <NotFoundScreen notFoundText={groupText.groupNotFound} />;
	} else {
		return (
			<Tab.Navigator
				initialRouteName={
					group ? GroupTopTabsScreens.Group : GroupTopTabsScreens.Settings
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
	}
};

export default GroupTopTabs;
