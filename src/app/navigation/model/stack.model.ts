import { ComponentType } from 'react';

enum StackParams {
	BottomTabs = 'BottomTabs',
	NewCounterScreen = 'NewCounterScreen'
}

type NavigationStackParams = {
	[StackParams.BottomTabs]: undefined;
	[StackParams.NewCounterScreen]: undefined;
};

interface StackProps {
	BottomTabsNavigation: ComponentType<any>;
}

export { StackParams, NavigationStackParams, StackProps };
