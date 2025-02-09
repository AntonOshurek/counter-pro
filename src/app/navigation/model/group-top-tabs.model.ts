//NATIVE
import { RouteProp } from '@react-navigation/native';
//NAVIGATION
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//ENTITIES
import type { CountersGroup } from '../../../entities/group';
//CONSTANTS
import { GroupTopTabsScreens, StackScreens } from '../../../shaared/constants';
//MODEL
import type { NavigationStackParams } from './stack.model';

interface GroupScreenRouteProps {
	group?: CountersGroup;
}

type GroupTopTabsNavigationParams = {
	[GroupTopTabsScreens.Group]: GroupScreenRouteProps;
	[GroupTopTabsScreens.Settings]: GroupScreenRouteProps;
};

type GroupScreenRouteProp = RouteProp<NavigationStackParams, StackScreens.GroupScreen>;

type GroupScreenNavigationProp = NativeStackNavigationProp<
	NavigationStackParams,
	StackScreens.GroupScreen
>;

interface GroupTopTabsProps {
	navigation: GroupScreenNavigationProp;
}

export {
	GroupTopTabsNavigationParams,
	GroupScreenRouteProp,
	GroupScreenNavigationProp,
	GroupTopTabsProps,
	GroupScreenRouteProps
};
