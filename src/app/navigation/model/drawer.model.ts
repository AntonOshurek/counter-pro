enum DrawerParams {
	HomeScreen = 'HomeScreen',
	SettingsScreen = 'SettingsScreen',
	NewCounterScreen = 'NewCounterScreen'
}

type NavigationDrawerParams = {
	[DrawerParams.HomeScreen]: undefined;
	[DrawerParams.SettingsScreen]: undefined;
	[DrawerParams.NewCounterScreen]: undefined;
};

export { NavigationDrawerParams, DrawerParams };
