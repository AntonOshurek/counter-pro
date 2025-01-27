enum StackParams {
	BottomTabs = 'BottomTabs',
	NewCounterScreen = 'NewCounterScreen',
	GroupScreen = 'GroupScreen'
}

type NavigationStackParams = {
	[StackParams.BottomTabs]: undefined;
	[StackParams.NewCounterScreen]: undefined;
	[StackParams.GroupScreen]: undefined;
};

export { StackParams, NavigationStackParams };
