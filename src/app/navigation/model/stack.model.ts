//CONSTANTS
import { StackScreens } from '../../../shaared/constants';
//TYPES
import type { GroupScreenRouteProps } from './group-top-tabs.model';

type NavigationStackParams = {
	[StackScreens.BottomTabs]: undefined;
	[StackScreens.NewCounterScreen]: undefined;
	[StackScreens.GroupScreen]: GroupScreenRouteProps;
};

export { NavigationStackParams };
