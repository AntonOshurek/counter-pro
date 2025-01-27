//NAVIGATION
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { GroupScreen, GroupSettingsScreen } from '../../screens';
//TYPES
import {
	GroupTopTabsNavigationParams,
	GroupTopTabsParams
} from './model/group-top-tabs.model';

const GroupTopTabs = (): JSX.Element => {
	const Tab = createMaterialTopTabNavigator<GroupTopTabsNavigationParams>();

	return (
		<Tab.Navigator>
			<Tab.Screen name={GroupTopTabsParams.Group} component={GroupScreen} />
			<Tab.Screen name={GroupTopTabsParams.Settings} component={GroupSettingsScreen} />
		</Tab.Navigator>
	);
};

export default GroupTopTabs;
