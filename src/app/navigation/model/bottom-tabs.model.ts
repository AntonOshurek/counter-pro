enum BottomTabsParams {
	HomeScreen = 'HomeScreen',
	SettingsScreen = 'SettingsScreen',
	InfoScreen = 'InfoScreen',
	Groups = 'Groups'
}

type BottomTabsNavigationParams = {
	[BottomTabsParams.HomeScreen]: undefined;
	[BottomTabsParams.SettingsScreen]: undefined;
	[BottomTabsParams.InfoScreen]: undefined;
	[BottomTabsParams.Groups]: undefined;
};

export { BottomTabsNavigationParams, BottomTabsParams };
