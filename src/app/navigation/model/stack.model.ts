import { ComponentType } from 'react';

enum StackParams {
	Drawer = 'Drawer',
	NewCounterScreen = 'NewCounterScreen'
}

type NavigationStackParams = {
	[StackParams.Drawer]: undefined;
	[StackParams.NewCounterScreen]: undefined;
};

interface StackProps {
	DrawerNavigation: ComponentType<any>;
}

export { StackParams, NavigationStackParams, StackProps };
