//CONSTANTS
import { StackScreens } from '../../../shared/constants';
//TYPES
import type { GroupScreenRouteProps } from './group-top-tabs.model';

type NavigationStackParams = {
	[StackScreens.BottomTabs]: undefined;
	[StackScreens.NewCounterScreen]: undefined;
	[StackScreens.GroupScreen]: GroupScreenRouteProps;
};

export { NavigationStackParams };
