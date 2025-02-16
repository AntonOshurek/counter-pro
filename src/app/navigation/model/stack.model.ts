//CONSTANTS
import { StackScreens } from '../../../shared/constants';
//TYPES
import type { GroupScreenRouteProps } from './group-top-tabs.model';
import type { CounterScreenRouteProps } from './counter-top-tabs.model';

type NavigationStackParams = {
	[StackScreens.BottomTabs]: undefined;
	[StackScreens.CounterScreen]: CounterScreenRouteProps;
	[StackScreens.GroupScreen]: GroupScreenRouteProps;
};

export { NavigationStackParams };
