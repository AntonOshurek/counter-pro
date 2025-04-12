//STORE
import counterSlice from '../counter-slice';
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
	IAddConnectionToGroupAction
} from '../model/action.model';
//TYPES
import type { AppThunk } from '../../../../shared/store';

const CreateCounterAction =
	(action: ICreateCounterAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.createCounter({ newCounter: action.newCounter }));
	};

const IncrementAction =
	(action: IIncrementAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.increment(action));
	};

const ResetAction =
	(action: IResetAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.reset(action));
	};

const DecrementAction =
	(action: IDecrementAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.decrement(action));
	};

const SetStepAction =
	(action: ISetStepAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setStep(action));
	};

const setToGroupAction =
	(action: ISetToGroupAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setToGroup(action));
	};

const setNameAction =
	(action: ISetNameAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setName(action));
	};

const deleteCounterAction =
	(action: IDeleteCounterAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.delete(action));
	};

const setListSortTypeAction =
	(action: ISetListSortTypeAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setListSortType(action));
	};

const setIsPinnedAction =
	(action: ISetIsPinnedAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.setIsPinnedCounter(action));
	};

const deleteConnectionWithGroupAction =
	(action: IDeleteConnectionWithGroupAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.deleteConnectionWithGroup(action));
	};

const addConnectionWithGroupAction =
	(action: IAddConnectionToGroupAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.addConnectionWithGroup(action));
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
	addConnectionWithGroupAction
};
