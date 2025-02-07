//NAVIGATION
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//SCREENS
import { GroupScreen, GroupSettingsScreen } from '../../screens';
//HOOKS
import UseThemeResolver from '../../shaared/hooks/useThemeResolver';
//STYLES
import { colors } from '../../shaared/styles';
//TYPES
import {
	GroupTopTabsNavigationParams,
	GroupTopTabsParams
} from './model/group-top-tabs.model';


const GroupTopTabs = () => {
	const Tab = createMaterialTopTabNavigator<GroupTopTabsNavigationParams>();
  const theme = UseThemeResolver();

	return (
		<Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: colors[theme].mainSurfacePrimary
      },
      tabBarActiveTintColor: colors[theme].textPrimary,
      tabBarInactiveTintColor: colors[theme].textSecondary,
    }}>
			<Tab.Screen name={GroupTopTabsParams.Group} component={GroupScreen} />
			<Tab.Screen name={GroupTopTabsParams.Settings} component={GroupSettingsScreen} />
		</Tab.Navigator>
	);
};

export default GroupTopTabs;
