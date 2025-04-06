//STORE
import type { RootState } from '../../../../shared/store';
//MODEL
import type { ISelectorGetGroup, ISelectorGetGroups } from '../model/selector.model';

const SelectorGetGroup: ISelectorGetGroup = (groupId: string) => (state: RootState) => {
	return state.group.groups[groupId];
};

const SelectorGetGroups: ISelectorGetGroups = () => (state: RootState) => {
	return state.group.groups;
};

export { SelectorGetGroup, SelectorGetGroups };
