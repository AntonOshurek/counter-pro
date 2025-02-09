//CONSTANTS
import { StackScreens } from '../../../shaared/constants';

type NavigationStackParams = {
	[StackScreens.BottomTabs]: undefined;
	[StackScreens.NewCounterScreen]: undefined;
	[StackScreens.GroupScreen]: { groupId?: string };
};

export { NavigationStackParams };
