//STORE
import groupSlice from '../group-slice';
//MODEL
import type {
	ICreateGroupAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction,
	IDeleteGroupAction,
	ISetNameAction,
	IDeleteConnectionWithCounterAction,
	IAddConnectionToCounterAction
} from '../model/action.model';
//TYPES
import type { AppThunk } from '@shared/store';
//ASYNC STORE ACTIONS
import { setStateToGroupAsyncStoreAction } from '@entities/group/async-store/actions/group-async-store.actions';

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

		setStateToGroupAsyncStoreAction(getState);
	};

const deleteGroupAction =
	(action: IDeleteGroupAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.delete(action));
	};

const setNameAction =
	(action: ISetNameAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.setName(action));
	};

const deleteConnectionWithCounterAction =
	(action: IDeleteConnectionWithCounterAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.deleteConnectionWithCounter(action));
	};

const addConnectionWithCounterAction =
	(action: IAddConnectionToCounterAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.addConnectionToCounter(action));
	};

export {
	CreateGroupAction,
	setIsPinnedAction,
	setListSortTypeAction,
	deleteGroupAction,
	setNameAction,
	deleteConnectionWithCounterAction,
	addConnectionWithCounterAction
};
