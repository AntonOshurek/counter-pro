//CONSTANTS
import { SortOptions } from '@shared/constants/sort';
//MODEL
import type { Group } from '../../model/group.model';
import { IGroupState } from '../model/group-state.model';

interface IUpdateState {
	newState: IGroupState;
}

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

interface ISetNameAction {
	newName: string;
	groupId: string;
}

interface IDeleteConnectionWithCounterAction {
	groupId: string;
	counterId: string;
}

interface IAddConnectionToCounterAction {
	groupId: string;
	counterId: string;
}

export {
	ICreateGroupAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction,
	IDeleteGroupAction,
	ISetNameAction,
	IDeleteConnectionWithCounterAction,
	IAddConnectionToCounterAction,
	IUpdateState
};
