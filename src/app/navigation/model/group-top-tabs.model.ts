enum GroupTopTabsParams {
	Group = 'Group',
	Settings = 'Settings'
}

type GroupTopTabsNavigationParams = {
	[GroupTopTabsParams.Group]: undefined;
	[GroupTopTabsParams.Settings]: undefined;
};

export { GroupTopTabsNavigationParams, GroupTopTabsParams };
