enum StackParams {
	HomeScreen = 'HomeScreen',
	NewCounterScreen = 'NewCounterScreen'
}

type NavigationStackParams = {
	[StackParams.HomeScreen]: undefined;
	[StackParams.NewCounterScreen]: undefined;
};

export { StackParams, NavigationStackParams };
