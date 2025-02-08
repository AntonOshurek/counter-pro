enum GroupTopTabsParams {
	Group = 'Group',
	Settings = 'Settings'
}

type GroupTopTabsNavigationParams = {
	[GroupTopTabsParams.Group]: {groupId?: string};
	[GroupTopTabsParams.Settings]: {groupId?: string};
};

export { GroupTopTabsNavigationParams, GroupTopTabsParams };
