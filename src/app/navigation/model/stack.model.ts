enum StackParams {
	BottomTabs = 'BottomTabs',
	NewCounterScreen = 'NewCounterScreen'
}

type NavigationStackParams = {
	[StackParams.BottomTabs]: undefined;
	[StackParams.NewCounterScreen]: undefined;
};

export { StackParams, NavigationStackParams };
