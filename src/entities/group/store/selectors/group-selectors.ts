//STORE
import type { RootState } from '../../../../shared/store';
//MODEL
import {
	ISelectorGetGroup,
	ISelectorGetGroups,
	ISelectorGetIsPinnedGroup,
	ISelectorGetListSortType,
	ISelectorGetGroupCreatedDate
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

const SelectorGetListSortType: ISelectorGetListSortType = () => (state: RootState) => {
	return state.group.groupListSortType;
};

const SelectorGetGroupCreatedDate: ISelectorGetGroupCreatedDate =
	(groupId: string) => (state: RootState) => {
		return state.group.groups[groupId].createdAt;
	};

export {
	SelectorGetGroup,
	SelectorGetGroups,
	SelectorGetIsPinnedGroup,
	SelectorGetListSortType,
	SelectorGetGroupCreatedDate
};
