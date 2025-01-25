enum BottomTabsParams {
	HomeScreen = 'HomeScreen',
	SettingsScreen = 'SettingsScreen',
	InfoScreen = 'InfoScreen'
}

type BottomTabsNavigationParams = {
	[BottomTabsParams.HomeScreen]: undefined;
	[BottomTabsParams.SettingsScreen]: undefined;
	[BottomTabsParams.InfoScreen]: undefined;
};

export { BottomTabsNavigationParams, BottomTabsParams };
