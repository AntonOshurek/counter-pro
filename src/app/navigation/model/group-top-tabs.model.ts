import { RouteProp } from '@react-navigation/native';
import type { NavigationStackParams, StackParams } from './stack.model';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

enum GroupTopTabsParams {
	Group = 'Group',
	Settings = 'Settings'
}

type GroupTopTabsNavigationParams = {
	[GroupTopTabsParams.Group]: {groupId?: string};
	[GroupTopTabsParams.Settings]: {groupId?: string};
};

type GroupScreenRouteProp = RouteProp<NavigationStackParams, StackParams.GroupScreen>;

type GroupScreenNavigationProp = NativeStackNavigationProp<
  NavigationStackParams,
  StackParams.GroupScreen
>;

interface GroupTopTabsProps {
  navigation: GroupScreenNavigationProp;
}

export { GroupTopTabsNavigationParams, GroupTopTabsParams, GroupScreenRouteProp, GroupScreenNavigationProp, GroupTopTabsProps };
