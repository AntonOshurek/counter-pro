//DB
import { SQLiteDatabase } from 'expo-sqlite';
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
//DB ACTIONS
import { deleteOne, insertOne, updateOne } from '../../db/actions/group-db.actions';
import { IUpdateState } from '../model/action.model';

const UpdateStateAction =
	(action: IUpdateState): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.updateState({ newState: action.newState }));
	};

const CreateGroupAction =
	(action: ICreateGroupAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.createGroup({ newGroup: action.newGroup }));

		await insertOne(action.newGroup, db);
	};

const setIsPinnedAction =
	(action: ISetIsPinnedAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.setIsPinnedGroup(action));

		await updateOne(getState, action.groupId, db);
	};

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(groupSlice.actions.setListSortType(action));

		setStateToGroupAsyncStoreAction(getState);
	};

const deleteGroupAction =
	(action: IDeleteGroupAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.delete(action));

		await deleteOne(action.groupId, db);
	};

const setNameAction =
	(action: ISetNameAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.setName(action));

		await updateOne(getState, action.groupId, db);
	};

const deleteConnectionWithCounterAction =
	(action: IDeleteConnectionWithCounterAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.deleteConnectionWithCounter(action));

		await updateOne(getState, action.groupId, db);
	};

const addConnectionWithCounterAction =
	(action: IAddConnectionToCounterAction, db: SQLiteDatabase): AppThunk =>
	async (dispatch, getState) => {
		dispatch(groupSlice.actions.addConnectionToCounter(action));

		await updateOne(getState, action.groupId, db);
	};

export {
	CreateGroupAction,
	setIsPinnedAction,
	setListSortTypeAction,
	deleteGroupAction,
	setNameAction,
	deleteConnectionWithCounterAction,
	addConnectionWithCounterAction,
	UpdateStateAction
};
