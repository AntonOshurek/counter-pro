enum StackParams {
	Drawer = 'Drawer',
	HomeScreen = 'HomeScreen',
	NewCounterScreen = 'NewCounterScreen'
}

type NavigationStackParams = {
	[StackParams.Drawer]: undefined;
	// [StackParams.HomeScreen]: undefined;
	[StackParams.NewCounterScreen]: undefined;
};

export { StackParams, NavigationStackParams };
