//CONSTANTS
import { SortOptions } from '../../../../shared/constants/sort';
//MODEL
import type { Group } from '../../model/group.model';

interface ICreateGroupAction {
	newGroup: Group;
}

interface ISetIsPinnedAction {
	isPinned: boolean;
	groupId: string;
}

interface ISetListSortTypeAction {
	sortType: SortOptions;
}

interface IDeleteGroupAction {
	groupId: string;
}

export {
	ICreateGroupAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction,
	IDeleteGroupAction
};
