//STORE
import { RootState } from '../../../../shared/store';
//MODEL
import { Group } from '../../model/group.model';
//CONSTANTS
import { SortOptions } from '../../../../shared/constants/sort';

interface ISelectorGetGroup {
	(groupId: string): (state: RootState) => Group;
}

interface ISelectorGetGroups {
	(): (state: RootState) => Record<string, Group>;
}

interface ISelectorGetIsPinnedGroup {
	(groupId: string): (state: RootState) => boolean;
}

interface ISelectorGetListSortType {
	(): (state: RootState) => SortOptions;
}

interface ISelectorGetGroupCreatedDate {
	(groupId: string): (state: RootState) => string;
}

interface ISelectorGetGroupName {
	(groupId: string): (state: RootState) => string;
}

export {
	ISelectorGetGroup,
	ISelectorGetGroups,
	ISelectorGetIsPinnedGroup,
	ISelectorGetListSortType,
	ISelectorGetGroupCreatedDate,
	ISelectorGetGroupName
};
