//NATIVE
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
//MODEL
import type { NavigationStackParams, StackParams } from './stack.model';
//CONSTANTS
import { GroupTopTabsScreens } from '../../../shaared/constants';

type GroupTopTabsNavigationParams = {
	[GroupTopTabsScreens.Group]: {groupId?: string};
	[GroupTopTabsScreens.Settings]: {groupId?: string};
};

type GroupScreenRouteProp = RouteProp<NavigationStackParams, StackParams.GroupScreen>;

type GroupScreenNavigationProp = NativeStackNavigationProp<
  NavigationStackParams,
  StackParams.GroupScreen
>;

interface GroupTopTabsProps {
  navigation: GroupScreenNavigationProp;
}

export { GroupTopTabsNavigationParams, GroupScreenRouteProp, GroupScreenNavigationProp, GroupTopTabsProps };
