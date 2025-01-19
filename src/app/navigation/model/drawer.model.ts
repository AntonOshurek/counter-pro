enum DrawerParams {
	HomeScreen = 'HomeScreen',
	SettingsScreen = 'SettingsScreen'
}

type NavigationDrawerParams = {
	[DrawerParams.HomeScreen]: undefined;
	[DrawerParams.SettingsScreen]: undefined;
};

export { NavigationDrawerParams, DrawerParams };
