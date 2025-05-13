//STORE
import groupSlice from '../group-slice';
//REPOSITORY
import groupRepository from '../../async-store/services/group-async-store.service';
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
import type { AppThunk, RootState } from '@shared/store';
//LIBS
import { omitKey } from '@shared/lib/object-lib';

const addToGroupRepo = (getState: () => RootState) => {
	groupRepository
		.setState(omitKey('groups', getState().group))
		.then(res => {
			if (res !== true) {
				console.log(res);
				// возможно: dispatch(appSlice.actions.setError(...))
			}
		})
		.catch(error => {
			console.log(error);
			// возможно: dispatch(appSlice.actions.setError(...))
		});
};

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

		addToGroupRepo(getState);
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
