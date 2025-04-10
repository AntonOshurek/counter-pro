//STORE
import groupSlice from '../group-slice';
//MODEL
import {
	ICreateGroupAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction
} from '../model/action.model';
//TYPES
import type { AppThunk } from '../../../../shared/store';

const CreateGroupAction =
	(action: ICreateGroupAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.createGroup({ newGroup: action.newGroup }));
	};

const setIsPinnedAction =
	(action: ISetIsPinnedAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.setIsPinnedGroup(action));
	};

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.setListSortType(action));
	};

export { CreateGroupAction, setIsPinnedAction, setListSortTypeAction };
