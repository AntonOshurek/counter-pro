//STORE
import type { RootState } from '../../../../shared/store';
//MODEL
import {
	ISelectorGetGroup,
	ISelectorGetGroups,
	ISelectorGetIsPinnedGroup,
	ISelectorGetListSortType
} from '../model/selector.model';

const SelectorGetGroup: ISelectorGetGroup = (groupId: string) => (state: RootState) => {
	return state.group.groups[groupId];
};

const SelectorGetGroups: ISelectorGetGroups = () => (state: RootState) => {
	return state.group.groups;
};

const SelectorGetIsPinnedGroup: ISelectorGetIsPinnedGroup =
	(groupId: string) => (state: RootState) => {
		return state.group.groups[groupId].isPinned;
	};

const SelectorGetListSortTYpe: ISelectorGetListSortType = () => (state: RootState) => {
	return state.group.groupListSortType;
};

export {
	SelectorGetGroup,
	SelectorGetGroups,
	SelectorGetIsPinnedGroup,
	SelectorGetListSortTYpe
};
