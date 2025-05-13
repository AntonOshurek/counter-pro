//STORE
import counterSlice from '../counter-slice';
//SERVICES
import { addToCounterRepo } from '@entities/counter/store/services/counter-async-store.service';
import counterSqliteService from '@entities/counter/store/services/counter-sqlite.service';
//MODEL
import {
	ICreateCounterAction,
	IDecrementAction,
	IDeleteCounterAction,
	IIncrementAction,
	IResetAction,
	ISetIsPinnedAction,
	ISetListSortTypeAction,
	ISetNameAction,
	ISetStepAction,
	ISetToGroupAction,
	IDeleteConnectionWithGroupAction,
	IAddConnectionToGroupAction,
	ISetVibrationOnCounterClick,
	IUpdateState
} from '../model/action.model';
//TYPES
import type { AppThunk } from '@shared/store';
//DB ACTIONS
import { insertOne, updateOne } from '@entities/counter/db/actions/counter-db-actions';

const UpdateStateAction =
	(action: IUpdateState): AppThunk =>
	async (dispatch, getState) => {
		dispatch(counterSlice.actions.updateState({ newState: action.newState }));
	};

const CreateCounterAction =
	(action: ICreateCounterAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.createCounter({ newCounter: action.newCounter }));

		await insertOne(action.newCounter, db);
	};

const IncrementAction =
	(action: IIncrementAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.increment(action));

		await updateOne(getState, action.counterId, db);
	};

const ResetAction =
	(action: IResetAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.reset(action));

		await updateOne(getState, action.counterId, db);
	};

const DecrementAction =
	(action: IDecrementAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.decrement(action));

		await updateOne(getState, action.counterId, db);
	};

const SetStepAction =
	(action: ISetStepAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setStep(action));

		await updateOne(getState, action.counterId, db);
	};

const setToGroupAction =
	(action: ISetToGroupAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setToGroup(action));

		await updateOne(getState, action.counterId, db);
	};

const setNameAction =
	(action: ISetNameAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setName(action));

		await updateOne(getState, action.counterId, db);
	};

const deleteCounterAction =
	(action: IDeleteCounterAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.delete(action));

		await counterSqliteService.deleteById(db, action.counterId);
	};

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setListSortType(action));

		addToCounterRepo(getState);
	};

const setIsPinnedAction =
	(action: ISetIsPinnedAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setIsPinnedCounter(action));

		await updateOne(getState, action.counterId, db);
	};

const deleteConnectionWithGroupAction =
	(action: IDeleteConnectionWithGroupAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.deleteConnectionWithGroup(action));

		await updateOne(getState, action.counterId, db);
	};

const addConnectionWithGroupAction =
	(action: IAddConnectionToGroupAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.addConnectionWithGroup(action));

		await updateOne(getState, action.counterId, db);
	};

const setVibrationOnCounterClickAction =
	(action: ISetVibrationOnCounterClick): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setVibrationOnCounterClick(action));

		addToCounterRepo(getState);
	};

export {
	IncrementAction,
	DecrementAction,
	setToGroupAction,
	SetStepAction,
	setNameAction,
	CreateCounterAction,
	deleteCounterAction,
	ResetAction,
	setListSortTypeAction,
	setIsPinnedAction,
	deleteConnectionWithGroupAction,
	addConnectionWithGroupAction,
	setVibrationOnCounterClickAction,
	UpdateStateAction
};
