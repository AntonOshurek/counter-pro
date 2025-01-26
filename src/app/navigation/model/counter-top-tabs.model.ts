enum CounterTopTabsParams {
	Counter = 'Counter',
	Settings = 'Settings'
}

type CounterTopTabsNavigationParams = {
	[CounterTopTabsParams.Counter]: undefined;
	[CounterTopTabsParams.Settings]: undefined;
};

export { CounterTopTabsNavigationParams, CounterTopTabsParams };
