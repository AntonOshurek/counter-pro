//STORE
import counterSlice from '../../counter-slice';
//DB ACTIONS
import { updateOne } from '@entities/counter/db/actions/counter-db-actions';
//MODEL
import {
	IDecrementAction,
	IIncrementAction,
	IResetAction,
	ISetIsPinnedAction,
	ISetNameAction,
	ISetStepAction
} from '@entities/counter/store/model/action.model';
//TYPES
import type { AppThunk } from '@shared/store';

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

const setNameAction =
	(action: ISetNameAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setName(action));

		await updateOne(getState, action.counterId, db);
	};

const setIsPinnedAction =
	(action: ISetIsPinnedAction): AppThunk =>
	async (dispatch, getState, { db }) => {
		dispatch(counterSlice.actions.setIsPinnedCounter(action));

		await updateOne(getState, action.counterId, db);
	};

export {
	IncrementAction,
	ResetAction,
	DecrementAction,
	SetStepAction,
	setNameAction,
	setIsPinnedAction
};
