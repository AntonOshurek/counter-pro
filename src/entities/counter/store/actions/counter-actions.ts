import {
	IDecrementAction,
	IIncrementAction,
	ISetNameAction,
	ISetStepAction,
	ISetToGroupAction
} from '../model/action.model';
import { AppThunk } from '../../../../shared/store';
import counterSlice from '../counter-slice';

const IncrementAction =
	(action: IIncrementAction): AppThunk =>
	(dispatch, getState) => {
		dispatch(counterSlice.actions.increment(action));
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

export {
	IncrementAction,
	DecrementAction,
	setToGroupAction,
	SetStepAction,
	setNameAction
};
