//STORE
import type { RootState } from '../../../../shared/store';
//MODEL
import type {
	ISelectorGetGroup,
	ISelectorGetGroups,
	ISelectorGetIsPinnedGroup
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

export { SelectorGetGroup, SelectorGetGroups, SelectorGetIsPinnedGroup };
